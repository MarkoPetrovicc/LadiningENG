import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your HabitBreaker Account",
  description:
    "Permanently delete your HabitBreaker account and associated App data.",
};

const deletedItems = [
  "Your HabitBreaker authentication account.",
  "Your profile, name, username, and account settings.",
  "Daily check-ins, notes, mood, and urge information.",
  "Relapse records and risk estimates.",
  "Stored AI-generated check-in feedback.",
  "Community posts and comments connected to your account, if applicable.",
  "Account-linked local progress and AI Mentor chat history when deletion is initiated through the App on that device.",
];

const retainedItems = [
  "Apple and Google retain purchase and transaction records under their legal obligations.",
  "RevenueCat may retain limited purchase and entitlement records needed for restoration, fraud prevention, or legal compliance.",
  "Provider backups may retain deleted information until the applicable backup cycle expires.",
  "Security, fraud-prevention, support, tax, and legal records may be retained where required.",
  "AI providers may retain request records according to their settings and legal obligations.",
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
          <Link href="/" className="transition-colors hover:text-white/60">
            HabitBreaker
          </Link>
        </div>
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Delete Your HabitBreaker Account
        </h1>

        <div className="mb-8 space-y-4 text-base leading-relaxed text-white/70">
          <p>
            You can permanently delete your HabitBreaker account and associated
            App data.
          </p>
          <p className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-sm text-amber-100/80">
            Important: deleting your HabitBreaker account does not cancel an
            Apple App Store or Google Play subscription. Cancel your
            subscription separately through your store account.
          </p>
        </div>

        <div className="space-y-8">
          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Delete in the App
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/65">
              <li>Open HabitBreaker.</li>
              <li>Open Profile.</li>
              <li>Select Delete account.</li>
              <li>Review the warning and confirm deletion.</li>
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              In-app deletion removes your Supabase account and associated App
              records immediately. It also clears account-linked local progress
              and AI Mentor chat history from that device.
            </p>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Request Deletion by Email
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/65">
              <p>Send an email from the address connected to your account:</p>
              <div>
                <p>Email: habitbreaker531@gmail.com</p>
                <p>Subject: Delete my HabitBreaker account</p>
              </div>
              <p>
                We may request information needed to verify that you own the
                account. Verified requests are normally completed within 30
                days.
              </p>
              <p>
                If deletion is performed by email, local information may remain
                on devices where HabitBreaker is installed. Uninstall the App
                or clear its storage to remove remaining local files.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Information We Delete
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white/65">
              Subject to lawful retention exceptions, deletion includes:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/65">
              {deletedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Information That May Remain
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white/65">
              Some information cannot be deleted immediately or is controlled
              by another provider:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/65">
              {retainedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Subscriptions
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/65">
              <p>Account deletion does not cancel recurring charges.</p>
              <p>
                Manage Apple subscriptions:{" "}
                <a
                  href="https://apps.apple.com/account/subscriptions"
                  className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                >
                  apps.apple.com/account/subscriptions
                </a>
              </p>
              <p>
                Manage Google Play subscriptions:{" "}
                <a
                  href="https://play.google.com/store/account/subscriptions"
                  className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                >
                  play.google.com/store/account/subscriptions
                </a>
              </p>
              <p>
                After account deletion, restoring a previous purchase may
                require signing in with the same Apple or Google store account.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Contact
            </h2>
            <div className="text-sm leading-relaxed text-white/65">
              <p>Operator: Marko Petrovic</p>
              <p>Contact location: Novi Sad, Republic of Serbia</p>
              <p>Email: habitbreaker531@gmail.com</p>
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
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
