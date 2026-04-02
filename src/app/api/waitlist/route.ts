import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";

function getCountryFromHeaders(headers: Headers): string | null {
  const candidates = [
    headers.get("x-vercel-ip-country"),
    headers.get("cf-ipcountry"),
    headers.get("x-country"),
  ];
  const v = candidates.find((x) => x && x.trim().length > 0) ?? null;
  if (!v) return null;
  const cc = v.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc)) return null;
  return cc;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeQuizSummary(raw: unknown): Record<string, unknown> | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const o = raw as Record<string, unknown>;
  if (!Array.isArray(o.tags)) return null;
  const tags = o.tags
    .filter((t): t is string => typeof t === "string")
    .map((t) => t.replace(/[^\w-]/g, "").slice(0, 64))
    .filter(Boolean)
    .slice(0, 48);
  const answers: Record<string, string> = {};
  if (o.answers && typeof o.answers === "object" && !Array.isArray(o.answers)) {
    for (const [k, v] of Object.entries(
      o.answers as Record<string, unknown>,
    )) {
      if (typeof v !== "string") continue;
      const key = k.slice(0, 64);
      if (key) answers[key] = v.slice(0, 256);
    }
  }
  return {
    tags,
    ...(Object.keys(answers).length ? { answers } : {}),
    saved_at: new Date().toISOString(),
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | {
          email?: unknown;
          quiz_summary?: unknown;
          session_id?: unknown;
        }
      | null;

    const email = typeof body?.email === "string" ? body.email.trim() : "";
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    const country = getCountryFromHeaders(req.headers);
    const quiz_summary = sanitizeQuizSummary(body?.quiz_summary);
    const session_id =
      typeof body?.session_id === "string" ? body.session_id.trim().slice(0, 64) : null;

    const row: Record<string, unknown> = {
      email,
      locale: "en",
      country,
    };
    if (quiz_summary) row.quiz_summary = quiz_summary;
    if (session_id) row.quiz_summary = { ...(quiz_summary ?? {}), session_id };

    const { error } = await getSupabaseAdmin()
      .from("waitlist_signups")
      .upsert(row, { onConflict: "email_lower" });

    if (error) {
      console.error("waitlist upsert error", {
        message: error.message,
        code: (error as any).code,
        details: (error as any).details,
        hint: (error as any).hint,
      });
      return NextResponse.json(
        {
          ok: false,
          error: "db_error",
          message:
            process.env.NODE_ENV !== "production" ? error.message : undefined,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("waitlist server error", e);
    return NextResponse.json(
      {
        ok: false,
        error: "server_error",
        message:
          process.env.NODE_ENV !== "production"
            ? e instanceof Error
              ? e.message
              : String(e)
            : undefined,
      },
      { status: 500 },
    );
  }
}
