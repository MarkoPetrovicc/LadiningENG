import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · HabitBreaker",
  description: "Terms governing your use of HabitBreaker.",
};

const sections = [
  {
    title: "1. Eligibility",
    paragraphs: [
      "You must be at least 16 years old and legally capable of accepting these Terms.",
    ],
  },
  {
    title: "2. Service",
    paragraphs: [
      "HabitBreaker is a habit-change and personal-wellness application offering self-tracking, educational material, daily activities, non-medical risk estimates, and automated AI support.",
      "Results vary. HabitBreaker does not guarantee that you will change a habit or achieve a particular result.",
    ],
  },
  {
    title: "3. Medical and Mental-Health Disclaimer",
    paragraphs: [
      "HabitBreaker is not a medical device, healthcare provider, therapist, emergency service, or substitute for professional advice, diagnosis, or treatment.",
      "If you may harm yourself or another person or are in immediate danger, contact local emergency services or a qualified crisis service immediately.",
    ],
  },
  {
    title: "4. AI Features",
    paragraphs: [
      "AI Mentor and AI-generated check-in feedback are automated and may be inaccurate, incomplete, or inappropriate.",
      "AI responses are not reviewed continuously by a human and must not be relied upon for medical decisions, treatment, diagnosis, or emergencies.",
    ],
  },
  {
    title: "5. Accounts",
    paragraphs: [
      "You are responsible for providing accurate information, protecting your credentials, and activities performed through your account.",
      "Notify us at habitbreaker531@gmail.com if you suspect unauthorised access.",
    ],
  },
  {
    title: "6. Purchases and Subscriptions",
    paragraphs: ["HabitBreaker may offer:"],
    bullets: [
      "Monthly auto-renewing subscriptions.",
      "Annual auto-renewing subscriptions.",
      "A one-time lifetime purchase.",
    ],
    after: [
      "The exact local price, currency, billing period, trial eligibility, trial duration, and renewal price are displayed by Apple App Store or Google Play before confirmation.",
      "Eligible users may receive a seven-day free trial. Unless cancelled before the trial or billing period ends, subscriptions renew automatically and the applicable store account is charged.",
      "Lifetime access means access for the supported lifetime of the HabitBreaker App and service, not the purchaser’s lifetime.",
    ],
  },
  {
    title: "7. Cancellation and Refunds",
    paragraphs: [
      "Manage or cancel subscriptions through Apple or Google store settings. Cancellation normally takes effect at the end of the paid billing period, subject to applicable law and store rules.",
      "Deleting HabitBreaker or deleting your account does not cancel a store subscription.",
      "Refund requests are handled by Apple or Google according to their policies and applicable consumer law.",
    ],
  },
  {
    title: "8. Acceptable Use",
    paragraphs: [
      "You must not use the App unlawfully, access another user’s account, interfere with security, abuse AI or reporting systems, or publish illegal, threatening, hateful, harassing, sexually explicit, exploitative, or otherwise objectionable content.",
      "We may remove prohibited content and suspend or terminate responsible accounts.",
    ],
  },
  {
    title: "9. User Content",
    paragraphs: [
      "You retain ownership of content you deliberately publish.",
      "You grant us a non-exclusive, worldwide, royalty-free licence to host, reproduce, moderate, and display that content only as needed to provide the relevant feature.",
      "Do not publish private health information or identifying information about another person.",
    ],
  },
  {
    title: "10. Intellectual Property",
    paragraphs: [
      "HabitBreaker’s software, branding, graphics, and original content are owned by or licensed to Marko Petrovic and may not be copied or redistributed except where legally permitted.",
    ],
  },
  {
    title: "11. Availability and Changes",
    paragraphs: [
      "We may modify, suspend, or discontinue features where reasonably necessary. We do not guarantee uninterrupted availability.",
      "Material changes affecting paid access will be handled according to applicable consumer law and store requirements.",
    ],
  },
  {
    title: "12. Liability",
    paragraphs: [
      "To the fullest extent permitted by law, HabitBreaker is provided “as is” and “as available.”",
      "We are not responsible for indirect, incidental, special, or consequential losses resulting from use of the App.",
      "Nothing in these Terms limits mandatory consumer rights or liability that cannot legally be excluded.",
    ],
  },
  {
    title: "13. Account Deletion",
    paragraphs: [
      "You may delete your account through the App or request deletion at:",
    ],
    link: {
      href: "https://habitbreakeer.vercel.app/delete-account",
      label: "https://habitbreakeer.vercel.app/delete-account",
    },
    after: [
      "Account deletion does not automatically cancel an active store subscription.",
    ],
  },
  {
    title: "14. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the Republic of Serbia, without removing mandatory consumer protections available in the country where you live.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    paragraphs: [
      "We may update these Terms when the service or legal requirements change. We will provide reasonable notice of material changes where required.",
    ],
  },
  {
    title: "16. Contact",
    paragraphs: [
      "Operator: Marko Petrovic",
      "Contact location: Novi Sad, Republic of Serbia",
      "Email: habitbreaker531@gmail.com",
    ],
  },
];

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-white/40">
          Last updated: September 1, 2026
        </p>

        <div className="mb-10 space-y-3 text-base leading-relaxed text-white/70">
          <p>
            These Terms govern your use of HabitBreaker, operated by Marko
            Petrovic, Novi Sad, Republic of Serbia.
          </p>
          <p>
            By creating an account or using HabitBreaker, you agree to these
            Terms.
          </p>
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
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.link && (
                  <a
                    href={section.link.href}
                    className="block break-all text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                  >
                    {section.link.label}
                  </a>
                )}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/privacy"
            className="text-sm text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
          >
            Privacy Policy
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
