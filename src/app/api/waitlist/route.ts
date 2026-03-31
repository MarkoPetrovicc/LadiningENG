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
  // common values: "US", "RS"
  if (!/^[A-Z]{2}$/.test(cc)) return null;
  return cc;
}

function isValidEmail(email: string): boolean {
  // pragmatic validation for waitlist capture
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { email?: unknown }
      | null;

    const email = typeof body?.email === "string" ? body.email.trim() : "";
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    const country = getCountryFromHeaders(req.headers);

    const { error } = await getSupabaseAdmin().from("waitlist_signups").upsert(
      {
        email,
        locale: "en",
        country,
      },
      { onConflict: "email_lower" },
    );

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

