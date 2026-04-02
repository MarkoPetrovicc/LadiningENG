"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: "en" | "sr";
  /** Visible label above the field (better than placeholder alone). */
  emailLabel?: string;
  placeholder: string;
  buttonLabel: string;
  successTitle: string;
  successBody: string;
  pdfDriveUrl: string;
  pdfLinkLabel: string;
  errorInvalidEmail: string;
  errorGeneric: string;
  /** Larger input + button for above-the-fold hero */
  prominent?: boolean;
  quizSummary?: { tags: string[]; answers: Record<string, string> };
  extraBody?: Record<string, unknown>;
  onSuccess?: () => void;
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
        body: JSON.stringify({
          email: email.trim(),
          locale: props.locale,
          quiz_summary: props.quizSummary
            ? {
                tags: props.quizSummary.tags,
                answers: props.quizSummary.answers,
              }
            : undefined,
          ...(props.extraBody ?? {}),
        }),
      });

      if (res.ok) {
        setStatus("success");
        props.onSuccess?.();
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

  const p = props.prominent;
  const inputClass = p
    ? "h-16 w-full rounded-2xl border-2 border-white/20 bg-black/40 px-4 text-base text-white shadow-inner placeholder:text-white/45 outline-none transition focus:border-cyan-400/60 focus:bg-black/50 focus:ring-4 focus:ring-cyan-500/20 sm:text-lg"
    : "h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/25 focus:bg-white/10";
  const btnClass = p
    ? "h-16 shrink-0 rounded-2xl bg-gradient-to-r from-white to-white/95 px-8 text-base font-bold text-black shadow-lg shadow-cyan-500/25 ring-2 ring-white/30 transition enabled:hover:brightness-105 disabled:opacity-60 sm:min-w-[11rem]"
    : "h-14 rounded-2xl bg-white px-6 font-semibold text-black transition enabled:hover:bg-white/90 disabled:opacity-60";

  const labelText = props.emailLabel?.trim();

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1">
          {labelText ? (
            <span
              className={`mb-2 block font-medium text-white/90 ${p ? "text-sm sm:text-base" : "text-sm"}`}
            >
              {labelText}
            </span>
          ) : (
            <span className="sr-only">Email</span>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={props.placeholder}
            inputMode="email"
            autoComplete="email"
            className={inputClass}
          />
        </label>
        <button type="submit" disabled={!canSubmit} className={btnClass}>
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
