import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · HabitBreaker",
  description:
    "How HabitBreaker collects, uses, shares, stores, and deletes personal information.",
};

const sections = [
  {
    title: "1. Information We Process",
    paragraphs: ["Depending on the features you use, we process:"],
    bullets: [
      "Account information: email address, name, username, authentication provider, account identifier, and account settings.",
      "Onboarding information: goals, triggers, habit-related answers, session patterns, and self-reflection scores.",
      "Check-in information: mood, urge level, stress, anxiety, loneliness, sleep, energy, notes, streaks, relapse entries, and related progress information.",
      "Generated information: non-medical risk estimates, habit insights, and AI-generated check-in feedback.",
      "AI Mentor information: messages and relevant context sent to the AI Mentor, including recent habit and check-in context where applicable.",
      "Purchase information: product identifier, entitlement status, transaction status, subscription status, and store country. We do not receive complete payment-card details.",
      "Optional analytics: pseudonymous screen and feature-use events, including check-in, relapse, purchase, and AI-feature usage. Analytics is disabled by default. Notes and AI messages are not included in analytics.",
      "Technical information: app version, device type, operating system, diagnostic information, IP-derived information, and security events.",
      "Community information, if community features are available: content you publish, comments, reports, and blocked-user records.",
    ],
    after: [
      "We do not request precise location, contacts, microphone recordings, or photo-library access for core App functionality.",
    ],
  },
  {
    title: "2. Sensitive Information",
    paragraphs: [
      "Information about sexual habits, mental wellbeing, urges, relapses, mood, and related behaviour may be considered health information or other sensitive personal information.",
      "Where required by law, we request explicit consent before processing this information. Consent can be withdrawn, but withdrawal may prevent features that require this information from operating.",
      "The App’s scores and estimates are self-help planning tools. They are not medical diagnoses or clinical assessments.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Create, authenticate, and secure accounts.",
      "Provide and synchronise check-ins, progress tracking, daily activities, and other App features.",
      "Personalise your habit-change plan.",
      "Generate AI Mentor responses and AI check-in feedback.",
      "Calculate non-medical habit and risk indicators.",
      "Process, verify, and restore purchases.",
      "Schedule local notifications requested by you.",
      "Provide customer support.",
      "Prevent abuse, fraud, and security incidents.",
      "Comply with legal obligations.",
      "Improve the App through optional analytics when you enable them.",
    ],
    after: [
      "We do not sell personal information. We do not use health information, sexual-behaviour information, notes, or AI messages for advertising or targeted advertising.",
    ],
  },
  {
    title: "4. AI Processing",
    paragraphs: [
      "AI Mentor messages and relevant context are transmitted securely through a Supabase Edge Function to OpenRouter and the model provider selected to generate a response, currently including OpenAI models.",
      "AI check-in requests may contain current and historical check-in values, relapse patterns, streak information, risk estimates, and notes.",
      "AI Mentor conversation history is stored in the App’s private storage on your device. It is not stored in our Supabase database. It remains on the device until you sign out, erase App data, delete your account through the App, clear the App’s storage, or uninstall the App.",
      "AI-generated check-in feedback is stored with the corresponding check-in in our database.",
      "AI providers may temporarily process or retain requests according to our account configuration, contractual arrangements, and their legal obligations. Do not submit information you do not want processed by an AI provider.",
      "AI responses may be inaccurate or inappropriate. They are not medical advice, treatment, diagnosis, therapy, or emergency assistance.",
    ],
  },
  {
    title: "5. Legal Bases",
    paragraphs: ["Depending on your location, we rely on:"],
    bullets: [
      "Performance of a contract to provide accounts, purchases, and requested App functionality.",
      "Explicit consent for sensitive information and AI processing where required.",
      "Consent for optional analytics.",
      "Legitimate interests in securing, maintaining, and improving the service where those interests do not override your rights.",
      "Compliance with legal obligations.",
    ],
    after: [
      "You may withdraw consent through App settings, account deletion, or by contacting us.",
    ],
  },
  {
    title: "6. Service Providers",
    paragraphs: ["We use:"],
    bullets: [
      "Supabase for authentication, database hosting, and Edge Functions.",
      "OpenRouter and underlying model providers, including OpenAI, for AI response generation.",
      "RevenueCat for purchase validation and entitlement management.",
      "Apple App Store and Google Play for payments, subscriptions, and transaction records.",
      "PostHog EU Cloud for optional product-event analytics. Session replay is disabled.",
      "Apple and Google for social sign-in when selected.",
      "Expo for application delivery, updates, and notification tooling.",
      "Vercel for hosting our public website and legal pages.",
    ],
    after: [
      "Providers receive only information needed to perform the relevant service. Their own legal obligations and retention requirements may also apply.",
    ],
  },
  {
    title: "7. International Transfers",
    paragraphs: [
      "Some providers may process information outside Serbia or your country, including in the European Economic Area and the United States.",
      "Where required, we use appropriate contractual or legal safeguards for international transfers. Contact us for information about applicable safeguards.",
    ],
  },
  {
    title: "8. Public Content",
    paragraphs: [
      "Private check-ins, notes, relapse records, and AI conversations are not published publicly.",
      "If community features are available and you deliberately publish a post or comment, that content and its displayed author name may be visible to other users. Do not publish private health information or identifying information about yourself or another person.",
    ],
  },
  {
    title: "9. Analytics",
    paragraphs: [
      "Analytics is disabled by default.",
      "If you enable analytics, PostHog receives pseudonymous feature-use events associated with an App identifier. These events may indicate that features such as check-in, relapse logging, purchases, or AI Mentor were used, but do not contain your notes or AI messages.",
      "You can withdraw analytics consent at any time through Settings. Session replay and screen recording are disabled.",
    ],
  },
  {
    title: "10. Notifications and Widgets",
    paragraphs: [
      "HabitBreaker primarily uses notifications scheduled locally on your device. Notification permission can be withdrawn through device settings.",
      "Home-screen widgets may display progress information on your device. Anyone who can see your widgets may be able to see that information.",
    ],
  },
  {
    title: "11. Security",
    paragraphs: [
      "Information transmitted to our services uses HTTPS/TLS encryption. Authentication is handled by Supabase Auth, and database access is protected with access controls and Row-Level Security policies.",
      "Information stored locally is protected by your device’s operating-system security and App sandbox. Not every locally stored file is separately encrypted.",
      "No service is completely secure. Protect your device and credentials and contact us if you suspect unauthorised access.",
    ],
  },
  {
    title: "12. Retention and Deletion",
    paragraphs: [
      "Account information and App records are generally retained while your account remains active.",
      "Deleting your account through the App removes your Supabase account and associated App records and clears account-linked local progress on that device.",
      "A request submitted by email will be processed after identity verification and normally completed within 30 days.",
      "Limited records may remain where required for store transactions, accounting, tax, fraud prevention, security, backups, support, or other legal obligations.",
      "Deleting your HabitBreaker account does not cancel an Apple or Google subscription. Subscriptions must be cancelled separately through the applicable store.",
    ],
  },
  {
    title: "13. Your Rights",
    paragraphs: ["Depending on your location, you may have rights to:"],
    bullets: [
      "Access your information.",
      "Correct inaccurate information.",
      "Receive portable information.",
      "Delete information.",
      "Restrict or object to processing.",
      "Withdraw consent.",
      "Appeal certain privacy decisions.",
      "Complain to your local data-protection authority.",
    ],
    after: [
      "Email habitbreaker531@gmail.com to exercise these rights. We may need to verify your identity.",
      "HabitBreaker does not sell personal information or share it for cross-context behavioural advertising.",
    ],
  },
  {
    title: "14. Children",
    paragraphs: [
      "HabitBreaker addresses sexual habits and personal wellbeing and is not intended for anyone under 16.",
      "Do not create an account if you are under 16. If we learn that information was collected from someone below the permitted age, we will investigate and delete it where required.",
    ],
  },
  {
    title: "15. Changes",
    paragraphs: [
      "We may update this Policy when the App, our providers, or legal requirements change. We will update the date above and provide additional notice where required.",
      "If a new purpose legally requires consent, we will request consent rather than relying only on continued use.",
    ],
  },
  {
    title: "16. Contact",
    paragraphs: [
      "Data controller: Marko Petrovic",
      "Contact location: Novi Sad, Republic of Serbia",
      "Email: habitbreaker531@gmail.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-white/40">
          Last updated: September 1, 2026
        </p>

        <div className="mb-10 space-y-4 text-base leading-relaxed text-white/70">
          <p>
            This Privacy Policy explains how Marko Petrovic
            (&ldquo;HabitBreaker&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo;), located in Novi Sad, Republic of Serbia,
            collects, uses, shares, stores, and deletes personal information
            through the HabitBreaker mobile application and website.
          </p>
          <div className="text-sm">
            <p>Data controller: Marko Petrovic</p>
            <p>Contact location: Novi Sad, Republic of Serbia</p>
            <p>Email: habitbreaker531@gmail.com</p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5"
            >
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                {section.title}
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/65">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Link
            href="/delete-account"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Account deletion
          </Link>
          <Link
            href="/terms"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Support
          </Link>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} HabitBreaker. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
