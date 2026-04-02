import { QuizExperience } from "../components/QuizExperience";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-white">
      {/* Fixed to viewport so long pages do not get a flat mid scroll band */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[min(70vh,520px)] w-[min(92vw,780px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.055] blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/50 sm:text-sm">
            HabitBreaker · waitlist
          </div>
          <div className="text-xs font-medium text-white/70 sm:text-sm">
            HabitBreaker
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-start pt-6 sm:pt-10">
          <QuizExperience />
        </div>

        <footer className="mt-auto border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} HabitBreaker
        </footer>
      </main>
    </div>
  );
}
