import type { Metadata } from "next";
import Link from "next/link";
import DeleteEmailButton from "./DeleteEmailButton";

export const metadata: Metadata = {
  title: "Delete Account · HabitBreaker",
  description:
    "Request deletion of your HabitBreaker account and all associated data.",
};

const SUPPORT_EMAIL = "habitbreaker531@gmail.com";

const steps = [
  {
    num: "1",
    title: "In-app (fastest)",
    body: 'Open HabitBreaker → Profile → Settings → scroll to "Delete account" and confirm. Your data is removed immediately.',
  },
  {
    num: "2",
    title: "By email",
    body: `Send an email to ${SUPPORT_EMAIL} from the address you used to register. Include "Delete my account" in the subject. We will verify your identity and permanently delete all data within 30 days.`,
  },
];

const deletedItems = [
  "Your profile (name, username, email)",
  "All daily check-ins, mood and urge logs",
  "Relapse records and risk scores",
  "AI Mentor (SOS) chat sessions and messages",
  "Community posts and comments",
  "Push notification tokens",
  "Subscription and entitlement records",
];

export default function DeleteAccountPage() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-white">
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-white/40">
          <Link href="/" className="hover:text-white/60 transition-colors">
            HabitBreaker
          </Link>
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Delete Your Account
        </h1>
        <p className="mb-10 text-sm text-white/40">
          We respect your right to be forgotten.
        </p>

        <p className="mb-10 text-base leading-relaxed text-white/70">
          You can permanently delete your HabitBreaker account and all
          associated data at any time. Choose whichever method is easiest for
          you:
        </p>

        {/* Methods */}
        <div className="space-y-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-400">
                  {step.num}
                </span>
                <div>
                  <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                    {step.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/65">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DeleteEmailButton />

        {/* What gets deleted */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 mb-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
            What gets deleted
          </h2>
          <ul className="space-y-2">
            {deletedItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-white/65"
              >
                <span className="mt-1 text-red-400">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/40">
            Deletion is permanent and cannot be undone. Data is removed within
            30 days of receiving your request.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/privacy"
            className="text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
