export type QuizOption = { id: string; label: string; tags: string[] };

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "urges",
    prompt:
      "When you’re stressed, bored, or alone, how often do strong urges show up?",
    options: [
      { id: "urges_daily", label: "Almost every day", tags: ["urge_pattern", "triggers"] },
      { id: "urges_week", label: "Several times a week", tags: ["urge_pattern"] },
      { id: "urges_rare", label: "Rarely", tags: [] },
    ],
  },
  {
    id: "aftermath",
    prompt: "After a slip, what’s the emotional hangover usually like?",
    options: [
      {
        id: "after_shame",
        label: "Heavy shame or a spiral of being hard on yourself",
        tags: ["shame_cycle", "mental_load"],
      },
      {
        id: "after_frustrated",
        label: "Frustrated, but I try to move on",
        tags: ["discipline_gap"],
      },
      { id: "after_light", label: "I don’t dwell on it much", tags: [] },
    ],
  },
  {
    id: "focus",
    prompt: "Compared to six months ago, how are focus and mental clarity?",
    options: [
      { id: "focus_worse", label: "Worse. More fog and harder to concentrate.", tags: ["brain_fog", "dopamine_reset"] },
      { id: "focus_same", label: "About the same", tags: ["stagnation"] },
      { id: "focus_better", label: "Better", tags: [] },
    ],
  },
  {
    id: "social",
    prompt: "Has this pattern affected confidence, dating, or social life?",
    options: [
      {
        id: "social_yes",
        label: "Yes. It clearly holds me back.",
        tags: ["confidence", "isolation"],
      },
      { id: "social_sometimes", label: "Sometimes I feel it", tags: ["confidence"] },
      { id: "social_no", label: "Not really", tags: [] },
    ],
  },
  {
    id: "help",
    prompt: "What would help you most right now?",
    options: [
      {
        id: "help_sos",
        label: "Instant support when a craving hits",
        tags: ["need_sos", "ai_mentor"],
      },
      {
        id: "help_structure",
        label: "Daily structure and accountability",
        tags: ["need_structure", "streaks"],
      },
      {
        id: "help_both",
        label: "Both. I need the full system.",
        tags: ["need_sos", "need_structure", "ai_mentor", "streaks"],
      },
    ],
  },
];

/** One short line per tag, easy to scan on mobile. */
export const TAG_TO_LINE: Record<string, string> = {
  urge_pattern: "Urges hit often. Respond fast instead of white knuckling alone.",
  triggers: "See patterns by time, mood, and context.",
  shame_cycle: "Shame after a slip. Resets and reframes break the spiral.",
  mental_load: "Heavy mental load. Quick logging turns chaos into steps.",
  discipline_gap: "On and off rhythm. Check ins rebuild consistency.",
  brain_fog: "Brain fog. Small wins and structure sharpen focus.",
  dopamine_reset: "Overstimulated. Steady wins replace endless hits.",
  stagnation: "Feeling stuck. Milestones make progress visible.",
  confidence: "Confidence dips. Track proof as you rebuild.",
  isolation: "Private support when it feels lonely.",
  need_sos: "Cravings spike. SOS tools in the moment.",
  ai_mentor: "Advice that fits your situation, not generic tips.",
  need_structure: "Daily structure built for real life.",
  streaks: "Bounce back after a broken streak. No reset from zero.",
};

export const QUIZ_COPY = {
  introEyebrow: "2 minute check in",
  introStatPercent: "87%",
  introStatSubtitle:
    "of people are not aware of their addiction level or how it affects daily life.",
  introTitle: "Find your porn addiction level.",
  introBody:
    "Answer a few quick questions. See your risk. Then see how HabitBreaker helps.",
  progress: (n: number, total: number) => `Question ${n} of ${total}`,
  backCta: "Back",
  riskEyebrow: "Your profile",
  riskTitle: "High risk pattern detected",
  riskSubtitle:
    "Your answers line up with common friction points HabitBreaker is built for.",
  riskMeter: "Pattern intensity",
  problemsHeading: "What stood out, and how we help",
  releasingSoon: "Releasing next week",
  firstMonthFree:
    "First month free if you join the waitlist before we ship next week.",
  /** Highlighted above the email field. */
  pdfBonusHighlight:
    "Free dopamine detox PDF when you join. Download it as soon as you sign up.",
  /** Shown above the email field. */
  waitlistHighlights: [
    "SOS tools when a craving spikes. Fast, private, no judgment.",
    "Streaks and daily check ins built for real life, not perfection.",
    "AI mentor that adapts to your patterns, not generic one size fits all tips.",
    "Your data stays yours. We never sell emails or share your story.",
  ],
  resultsPitch:
    "Launching next week. You get the free dopamine detox PDF plus your first month free.",
  /** Success screen button when PDF URL is configured. */
  pdfDownloadLabel: "Download your dopamine detox PDF",
  waitlistTitle: "Get launch updates + your free month",
  waitlistSub: "We’ll only email you about launch and your offer.",
  waitlistSocialProof: "257 people already joined.",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  emailCta: "Join waitlist",
  successTitle: "You’re on the list.",
  successBody:
    "We’ll email you for launch next week with your first month free. Your dopamine detox PDF is below. No spam.",
  privacy:
    "Privacy matters. We store the minimum needed, we do not sell your email, and you can ask us to delete it anytime.",
  invalidEmail: "Please enter a valid email.",
  genericError: "Something went wrong. Try again.",
  fallbackProblems: [
    "Urges in weak moments. SOS when you need it.",
    "Patchy discipline. Streaks and structure.",
    "Fog after slips. Tracking brings clarity.",
  ],
};
