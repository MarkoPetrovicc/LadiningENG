"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: "en" | "sr";
  placeholder: string;
  buttonLabel: string;
  successTitle: string;
  successBody: string;
  pdfDriveUrl: string;
  pdfLinkLabel: string;
  errorInvalidEmail: string;
  errorGeneric: string;
};

export function WaitlistForm(props: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "invalid"
  >("idle");

  const canSubmit = useMemo(
    () => status !== "loading" && email.trim().length > 0,
    [email, status],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim(), locale: props.locale }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      if (res.status === 400) {
        setStatus("invalid");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const showPdfLink =
    props.pdfDriveUrl.length > 0 &&
    /^https?:\/\//i.test(props.pdfDriveUrl.trim());

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold text-white">
          {props.successTitle}
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">
          {props.successBody}
        </p>
        {showPdfLink ? (
          <a
            href={props.pdfDriveUrl.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
          >
            {props.pdfLinkLabel}
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={props.placeholder}
            inputMode="email"
            autoComplete="email"
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/25 focus:bg-white/10"
          />
        </label>
        <button
          type="submit"
          disabled={!canSubmit}
          className="h-14 rounded-2xl bg-white px-6 font-semibold text-black transition enabled:hover:bg-white/90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : props.buttonLabel}
        </button>
      </div>

      {status === "invalid" ? (
        <p className="mt-3 text-sm text-rose-200">{props.errorInvalidEmail}</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm text-rose-200">{props.errorGeneric}</p>
      ) : null}
    </form>
  );
}
