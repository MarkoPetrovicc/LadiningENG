import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support · HabitBreaker",
  description: "Contact HabitBreaker support and find account and purchase help.",
};

const linkClass =
  "break-all text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300";

export default function SupportPage() {
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
          <Link href="/" className="transition-colors hover:text-white/60">
            HabitBreaker
          </Link>
        </div>
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          HabitBreaker Support
        </h1>

        <div className="mb-8 space-y-4 text-base leading-relaxed text-white/70">
          <p>For assistance with HabitBreaker, contact:</p>
          <div className="text-sm">
            <p>
              Email:{" "}
              <a href="mailto:habitbreaker531@gmail.com" className={linkClass}>
                habitbreaker531@gmail.com
              </a>
            </p>
            <p>Operator: Marko Petrovic</p>
            <p>Contact location: Novi Sad, Republic of Serbia</p>
          </div>
          <p className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-sm text-amber-100/80">
            Please do not include passwords, complete payment information, or
            unnecessary health information in support messages.
          </p>
        </div>

        <div className="space-y-8">
          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Purchases
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/65">
              <p>
                Purchases and subscriptions are processed by Apple App Store or
                Google Play.
              </p>
              <p>
                Manage Apple subscriptions:{" "}
                <a
                  href="https://apps.apple.com/account/subscriptions"
                  className={linkClass}
                >
                  https://apps.apple.com/account/subscriptions
                </a>
              </p>
              <p>
                Manage Google Play subscriptions:{" "}
                <a
                  href="https://play.google.com/store/account/subscriptions"
                  className={linkClass}
                >
                  https://play.google.com/store/account/subscriptions
                </a>
              </p>
              <p>
                Use Restore Purchases inside HabitBreaker if an earlier
                purchase is not recognised.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Account Deletion
            </h2>
            <a
              href="https://habitbreakeer.vercel.app/delete-account"
              className={linkClass}
            >
              https://habitbreakeer.vercel.app/delete-account
            </a>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Privacy Policy
            </h2>
            <a
              href="https://habitbreakeer.vercel.app/privacy"
              className={linkClass}
            >
              https://habitbreakeer.vercel.app/privacy
            </a>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Terms of Service
            </h2>
            <a
              href="https://habitbreakeer.vercel.app/terms"
              className={linkClass}
            >
              https://habitbreakeer.vercel.app/terms
            </a>
          </section>

          <section className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-300">
              Emergency Notice
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/65">
              <p>
                HabitBreaker support and AI Mentor are not emergency or crisis
                services.
              </p>
              <p>
                If you are in immediate danger or may harm yourself or another
                person, contact your local emergency services or a qualified
                crisis service immediately.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/privacy"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/delete-account"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Account deletion
          </Link>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
