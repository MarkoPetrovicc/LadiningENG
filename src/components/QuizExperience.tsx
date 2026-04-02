"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  QUIZ_COPY,
  QUIZ_QUESTIONS,
  TAG_TO_LINE,
  type QuizQuestion,
} from "../data/quiz-en";
import { WaitlistForm } from "./WaitlistForm";

const pdfDriveUrl =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PDF_URL?.trim() ?? ""
    : "";

type Phase = "quiz" | "results";

function getOrCreateSessionId(storageKey: string) {
  if (typeof window === "undefined") return "server";
  const existing = window.localStorage.getItem(storageKey);
  if (existing) return existing;
  const id = (globalThis.crypto?.randomUUID?.() ?? `hb_${Date.now()}_${Math.random()}`)
    .toString()
    .replace(/\s+/g, "");
  window.localStorage.setItem(storageKey, id);
  return id;
}

function trackAnswer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  void fetch("/api/quiz-answer", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function collectTags(
  questions: QuizQuestion[],
  answers: Record<string, string>,
): string[] {
  const set = new Set<string>();
  for (const q of questions) {
    const oid = answers[q.id];
    if (!oid) continue;
    const opt = q.options.find((o) => o.id === oid);
    opt?.tags.forEach((t) => set.add(t));
  }
  return [...set];
}

const TAG_ORDER = [
  "shame_cycle",
  "urge_pattern",
  "brain_fog",
  "confidence",
  "need_sos",
  "ai_mentor",
  "need_structure",
  "triggers",
  "mental_load",
  "discipline_gap",
  "dopamine_reset",
  "stagnation",
  "isolation",
  "streaks",
];

export function QuizExperience() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sessionId, setSessionId] = useState<string>("");
  const advancingRef = useRef(false);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[index];
  const selected = q ? answers[q.id] : "";

  const tags = useMemo(
    () => collectTags(QUIZ_QUESTIONS, answers),
    [answers],
  );

  const problemLines = useMemo(() => {
    const ordered = [...TAG_ORDER]
      .filter((t) => tags.includes(t) && TAG_TO_LINE[t])
      .map((t) => TAG_TO_LINE[t]);
    const rest = tags
      .filter((t) => !TAG_ORDER.includes(t) && TAG_TO_LINE[t])
      .map((t) => TAG_TO_LINE[t]);
    const merged = [...ordered, ...rest];
    if (merged.length === 0) return QUIZ_COPY.fallbackProblems;
    return merged.slice(0, 5);
  }, [tags]);

  const riskPercent = useMemo(() => {
    const n = tags.length;
    return Math.min(96, Math.max(72, 68 + n * 5));
  }, [tags]);

  useEffect(() => {
    setSessionId(getOrCreateSessionId("hb_quiz_session_en"));
  }, []);

  function pickOption(questionId: string, optionId: string) {
    setAnswers((a) => ({ ...a, [questionId]: optionId }));
  }

  function goBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function answerAndAdvance(optionId: string) {
    if (!q || advancingRef.current) return;
    advancingRef.current = true;
    pickOption(q.id, optionId);
    if (sessionId) {
      trackAnswer({
        session_id: sessionId,
        locale: "en",
        question_id: q.id,
        option_id: optionId,
        step_index: index,
        total_steps: total,
        is_completed: index >= total - 1,
      });
    }
    window.setTimeout(() => {
      if (index < total - 1) setIndex((i) => i + 1);
      else {
        setPhase("results");
      }
      advancingRef.current = false;
    }, 140);
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      {phase === "quiz" && q ? (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          {index === 0 ? (
            <>
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/90">
                {QUIZ_COPY.introEyebrow}
              </p>
              <div className="mt-4 rounded-2xl border border-amber-400/35 bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-transparent px-4 py-5 text-center shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)] sm:px-5 sm:py-6">
                <p className="text-[3rem] font-black leading-none tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-amber-200 via-white to-amber-100 bg-clip-text">
                  {QUIZ_COPY.introStatPercent}
                </p>
                <p className="mx-auto mt-2 max-w-[22rem] text-sm font-medium leading-relaxed text-white/90">
                  {QUIZ_COPY.introStatSubtitle}
                </p>
              </div>
              <h1 className="mt-5 text-balance text-center text-xl font-semibold leading-tight sm:text-2xl">
                {QUIZ_COPY.introTitle}
              </h1>
              <p className="mt-2 text-center text-sm leading-relaxed text-white/65">
                {QUIZ_COPY.introBody}
              </p>
              <div className="my-6 border-t border-white/10" />
            </>
          ) : null}
          <p className="text-center text-xs text-white/50">
            {QUIZ_COPY.progress(index + 1, total)}
          </p>
          <div className="mx-auto mt-3 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
          <h2 className="mt-8 text-balance text-xl font-semibold leading-snug sm:text-2xl">
            {q.prompt}
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {q.options.map((o) => {
              const on = selected === o.id;
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => answerAndAdvance(o.id)}
                  className={`rounded-2xl border-2 px-4 py-4 text-left text-sm font-medium leading-snug transition sm:text-base ${
                    on
                      ? "border-cyan-400/70 bg-cyan-500/15 text-white shadow-[0_0_24px_-8px_rgba(34,211,238,0.5)]"
                      : "border-white/10 bg-black/20 text-white/85 hover:border-white/20"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex justify-start">
            <button
              type="button"
              onClick={() => {
                goBack();
              }}
              disabled={index === 0}
              className="rounded-xl px-4 py-3 text-sm text-white/60 transition enabled:hover:text-white disabled:opacity-30"
            >
              {QUIZ_COPY.backCta}
            </button>
          </div>
        </div>
      ) : null}

      {phase === "results" ? (
        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-3xl border-2 border-rose-500/50 bg-gradient-to-br from-rose-950/80 via-[#1a0a12] to-orange-950/50 p-5 shadow-[0_0_60px_-15px_rgba(244,63,94,0.45)] sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,113,133,0.25),transparent_55%)]" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rose-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                  </span>
                  {QUIZ_COPY.riskEyebrow}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {QUIZ_COPY.riskTitle}
              </h2>
              <p className="mt-2 text-sm leading-snug text-rose-100/85">
                {QUIZ_COPY.riskSubtitle}
              </p>
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-rose-200/80">
                  <span>{QUIZ_COPY.riskMeter}</span>
                  <span className="font-mono font-bold text-white">
                    {Math.round(riskPercent)}%
                  </span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-black/40 ring-1 ring-rose-500/35">
                  <div
                    className="h-full rounded-full bg-rose-500 transition-all duration-700"
                    style={{ width: `${riskPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-cyan-400/35 bg-gradient-to-b from-cyan-500/15 to-black/20 p-4 shadow-[0_0_48px_-12px_rgba(34,211,238,0.25)] sm:p-7">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-cyan-200/90">
              {QUIZ_COPY.releasingSoon}
            </p>
            <h3 className="mt-3 text-balance text-center text-xl font-bold leading-snug text-white sm:text-2xl">
              {QUIZ_COPY.waitlistTitle}
            </h3>
            <p className="mt-2 text-center text-sm text-white/75">
              {QUIZ_COPY.waitlistSub}
            </p>
            <p className="mt-3 text-center text-sm font-semibold text-cyan-100/95">
              {QUIZ_COPY.firstMonthFree}
            </p>
            <p className="mt-3 rounded-xl border-2 border-emerald-400/45 bg-gradient-to-br from-emerald-500/25 via-teal-500/12 to-transparent px-3 py-3.5 text-center text-sm font-semibold leading-snug text-emerald-50 shadow-[0_0_36px_-10px_rgba(52,211,153,0.4)] ring-1 ring-emerald-400/30">
              {QUIZ_COPY.pdfBonusHighlight}
            </p>
            <div className="mt-4">
              <WaitlistForm
                locale="en"
                prominent
                emailLabel={QUIZ_COPY.emailLabel}
                placeholder={QUIZ_COPY.emailPlaceholder}
                buttonLabel={QUIZ_COPY.emailCta}
                successTitle={QUIZ_COPY.successTitle}
                successBody={QUIZ_COPY.successBody}
                pdfDriveUrl={pdfDriveUrl}
                pdfLinkLabel={QUIZ_COPY.pdfDownloadLabel}
                errorInvalidEmail={QUIZ_COPY.invalidEmail}
                errorGeneric={QUIZ_COPY.genericError}
                quizSummary={{ tags, answers }}
                extraBody={{ session_id: sessionId }}
                onSuccess={() => {
                }}
              />
            </div>
            <p className="mt-4 flex justify-center px-1">
              <span className="text-balance rounded-xl bg-gradient-to-r from-amber-500/35 to-orange-500/25 px-4 py-2 text-center text-sm font-bold tracking-tight text-amber-50 shadow-[0_0_24px_-8px_rgba(251,191,36,0.45)] ring-2 ring-amber-400/45 sm:text-base sm:px-5 sm:py-2.5">
                {QUIZ_COPY.waitlistSocialProof}
              </span>
            </p>
            <ul className="mx-auto mt-5 max-w-md space-y-2 text-left border-t border-cyan-400/25 pt-5 max-sm:mt-4 max-sm:pt-4">
              {QUIZ_COPY.waitlistHighlights.map((line, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm leading-snug text-white/80"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-white/60 max-sm:mt-3">
              {QUIZ_COPY.resultsPitch}
            </p>
            <p className="mt-4 text-center text-xs leading-relaxed text-white/45">
              {QUIZ_COPY.privacy}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
              {QUIZ_COPY.problemsHeading}
            </h3>
            <ul className="mt-3 space-y-2">
              {problemLines.map((line, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/5 bg-black/20 px-3 py-2.5 text-sm leading-snug text-white/85"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
