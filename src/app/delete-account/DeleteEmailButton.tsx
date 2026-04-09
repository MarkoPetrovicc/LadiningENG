"use client";

const SUPPORT_EMAIL = "habitbreaker531@gmail.com";

export default function DeleteEmailButton() {
  const handleClick = () => {
    const subject = encodeURIComponent("Delete my HabitBreaker account");
    const body = encodeURIComponent(
      "Hi,\n\nPlease delete my HabitBreaker account and all associated data.\n\nRegistered email: [your account email]\n\nThank you."
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mb-12 text-center">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-red-500 hover:shadow-red-500/40 active:scale-[0.97] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Request account deletion via email
      </button>
      <p className="mt-3 text-xs text-white/35">
        Opens your email app with a pre-filled message to{" "}
        <span className="text-white/50">{SUPPORT_EMAIL}</span>
      </p>
    </div>
  );
}
