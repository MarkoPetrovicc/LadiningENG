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

function sanitizeText(v: unknown, max = 128): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s) return null;
  return s.slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | Record<string, unknown>
      | null;

    const session_id = sanitizeText(body?.session_id, 64);
    const locale = sanitizeText(body?.locale, 8) ?? "en";
    const question_id = sanitizeText(body?.question_id, 64);
    const option_id = sanitizeText(body?.option_id, 64);

    const step_index =
      typeof body?.step_index === "number" && Number.isFinite(body.step_index)
        ? Math.max(0, Math.min(99, Math.floor(body.step_index)))
        : null;
    const total_steps =
      typeof body?.total_steps === "number" && Number.isFinite(body.total_steps)
        ? Math.max(1, Math.min(99, Math.floor(body.total_steps)))
        : null;

    const is_completed = body?.is_completed === true;

    if (!session_id || !question_id || !option_id) {
      return NextResponse.json(
        { ok: false, error: "invalid_payload" },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: existing, error: readErr } = await supabase
      .from("waitlist_quiz_sessions")
      .select("answers")
      .eq("session_id", session_id)
      .maybeSingle();

    if (readErr) {
      return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
    }

    const prev =
      existing && typeof existing.answers === "object" && existing.answers
        ? (existing.answers as Record<string, unknown>)
        : {};

    const nextAnswers: Record<string, unknown> = { ...prev, [question_id]: option_id };

    const country = getCountryFromHeaders(req.headers);
    const user_agent = sanitizeText(req.headers.get("user-agent"), 220);
    const nowIso = new Date().toISOString();

    const { error: upsertErr } = await supabase
      .from("waitlist_quiz_sessions")
      .upsert(
        {
          session_id,
          locale,
          answers: nextAnswers,
          last_step_index: step_index,
          total_steps,
          ...(is_completed ? { completed_at: nowIso } : {}),
          country,
          user_agent,
          updated_at: nowIso,
        },
        { onConflict: "session_id" },
      );

    if (upsertErr) {
      return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}

