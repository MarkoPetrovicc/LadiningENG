import { WaitlistForm } from "../components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070913] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col px-6 py-16 sm:py-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Early access waitlist
          </div>
          <div className="text-sm text-white/60">HabitBreaker</div>
        </div>

        <section className="mt-10 grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              90 days of nofap can change your life.
              <span className="text-white/70"> Build the streak before everyone else.</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/70">
              The app is releasing soon. Join the waitlist to get early access,
              first features, and the best chance to lock in your momentum.
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

            <div className="mt-10">
              <div className="text-sm font-medium text-white/80">
                Get early access
              </div>
              <div className="mt-3">
                <WaitlistForm
                  locale="en"
                  placeholder="Enter your email"
                  buttonLabel="Join waitlist"
                  successTitle="You're in."
                  successBody="We’ll email you as soon as early access opens."
                  errorInvalidEmail="Please enter a valid email address."
                  errorGeneric="Something went wrong. Please try again."
                />
              </div>

              <p className="mt-3 text-xs text-white/50">
                No spam. One email when we launch (and maybe a couple of key
                updates).
              </p>
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
                  { title: "SOS mode", body: "Fast interventions in moments of weakness." },
                  { title: "Personalized check-ins", body: "Daily nudges based on your patterns." },
                  { title: "Streak support", body: "Motivation + reflections to stay consistent." },
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

        <footer className="mt-14 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
