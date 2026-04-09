const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect: (a) account data — your email, name, and username when you register; (b) health and behavioural data — daily mood, urge level, stress, sleep hours, free-text notes, relapse logs, and your stated reason for change; (c) AI Mentor messages you type in the SOS chat; (d) a push notification token if you grant permission; (e) basic technical data such as device type and app version. We do not collect precise location.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your data is used to: provide and personalise the App; generate AI-powered check-in feedback and daily motivation; compute your daily risk score; send optional daily check-in reminders; diagnose errors and improve the Service. We do not use your health or behavioural data for advertising.",
  },
  {
    title: "3. AI Mentor (SOS Chat)",
    body: "Messages you type in the AI Mentor chat are sent to OpenAI's API over an encrypted connection to generate a response. Conversations are also stored in our database. OpenAI processes these messages under their own Privacy Policy. We have opted out of OpenAI's data-training for API usage.",
  },
  {
    title: "4. Third-Party Services",
    body: "We use: Supabase (database and authentication), OpenAI (AI Mentor), Expo (push notifications), and Google (Sign-In via OAuth). None of these providers receive your health data beyond what is strictly necessary to operate the feature.",
  },
  {
    title: "5. Data Sharing",
    body: "We do not sell, rent, or trade your personal information. We share data only with the service providers listed above, or if required by law. Community content (testimonials, comments) you post is visible to other users — only your first name and last initial are shown publicly.",
  },
  {
    title: "6. Data Security",
    body: "All data is transmitted over TLS (HTTPS). Passwords are never stored in plain text — authentication is handled by Supabase Auth with bcrypt hashing. Database access is protected by Row-Level Security so users can only access their own records.",
  },
  {
    title: "7. Data Retention & Deletion",
    body: "We retain your data for as long as your account is active. You can delete your account from Settings inside the App or by emailing habitbreaker531@gmail.com. All personal data is permanently deleted within 30 days of an account deletion request.",
  },
  {
    title: "8. Your Rights",
    body: "You have the right to access, correct, export, or delete your personal data. You may also withdraw consent for push notifications through your device settings at any time. To exercise any other right, email habitbreaker531@gmail.com.",
  },
  {
    title: "9. Children's Privacy",
    body: "The App is not intended for children under 16 (or 13 where applicable). We do not knowingly collect personal information from children. If you believe a child has provided data, contact us and we will delete it promptly.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We may update this Privacy Policy. We will notify you of significant changes through the App or by email. Continued use after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "11. Contact",
    body: "For questions or data requests, contact us at habitbreaker531@gmail.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-white">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Header */}
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-white/40">
          HabitBreaker
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-white/40">
          Last updated: April 9, 2026
        </p>

        {/* Intro */}
        <p className="mb-10 text-base leading-relaxed text-white/70">
          HabitBreaker ("we", "us", or "our") is committed to protecting your
          privacy. This policy explains what data we collect, why we collect it,
          and how we keep it safe.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5"
            >
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-white/65">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
