import { WaitlistForm } from "../components/WaitlistForm";

const pdfDriveUrl =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PDF_URL?.trim() ?? "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070913] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Early access
          </div>
          <div className="text-xs text-white/60 sm:text-sm">HabitBreaker</div>
        </div>

        <section className="mt-6 grid gap-10 lg:mt-10 lg:grid-cols-5 lg:items-start">
          <div className="flex flex-col gap-10 lg:col-span-3">
            {/* Mobile-first: signup first */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-400/45 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-5 shadow-[0_0_50px_-12px_rgba(34,211,238,0.35)] ring-1 ring-white/10 sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-3xl" />

              <div className="relative">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/95 sm:text-left">
                  Lifetime free access
                </p>
                <p className="mt-3 text-center text-base font-semibold leading-snug text-white sm:text-left sm:text-lg">
                  Get lifetime free access if you sign up now.
                </p>
                <p className="mt-4 text-center text-sm leading-relaxed text-white/85 sm:text-left">
                  <span className="font-semibold text-white">77%</span> of users
                  who stopped watching porn found a girlfriend, strengthened their
                  relationship, and started enjoying life more.{" "}
                  <span className="text-white/90">
                    That&apos;s what&apos;s waiting for you.
                  </span>
                </p>

                <div className="mt-6">
                  <WaitlistForm
                    locale="en"
                    prominent
                    placeholder="Your email"
                    buttonLabel="Claim my spot"
                    successTitle="You're in."
                    successBody="Open the PDF below. We’ll email you when early access opens."
                    pdfDriveUrl={pdfDriveUrl}
                    pdfLinkLabel="Open Dopamine Detox Protocol (Google Drive)"
                    errorInvalidEmail="Please enter a valid email address."
                    errorGeneric="Something went wrong. Please try again."
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.08] px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald-200/90">
                    Free bonus
                  </p>
                  <p className="mt-1 text-sm text-white/85">
                    After you join: link to the{" "}
                    <span className="font-semibold text-white">
                      Dopamine Detox Protocol
                    </span>{" "}
                    (PDF on Google Drive).
                  </p>
                </div>

                <p className="mt-4 text-center text-xs leading-relaxed text-white/55 sm:text-left">
                  <span className="text-white/70">Privacy guaranteed.</span> We
                  won&apos;t spam you — only important launch updates about
                  HabitBreaker.
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                90 days of nofap can change your life.
                <span className="text-white/70">
                  {" "}
                  Build the streak before everyone else.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                The app is releasing soon. Join the waitlist for early access and
                your free protocol link — plus everything below.
              </p>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/60">
                For most people it’s not just “willpower” — it’s a system. Track
                your streak, spot patterns, and build a calmer mind with small
                daily wins that compound over weeks.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "More energy & focus",
                  "Better confidence",
                  "Stronger discipline",
                  "Less brain fog",
                  "Better sleep & mood",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">
                AI Mentor (built in)
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Get guidance when cravings hit.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Your personal coach that learns your triggers, helps you
                reframe urges, and gives you a quick plan for the next 10
                minutes.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    title: "SOS mode",
                    body: "Fast interventions in moments of weakness.",
                  },
                  {
                    title: "Personalized check-ins",
                    body: "Daily nudges based on your patterns.",
                  },
                  {
                    title: "Streak support",
                    body: "Motivation + reflections to stay consistent.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-sm font-semibold">{x.title}</div>
                    <div className="mt-1 text-sm text-white/70">{x.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">
                What you’ll get
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Streak tracking with simple journaling</li>
                <li>• Daily insights + progress milestones</li>
                <li>• Private by default</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50 sm:mt-14">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
