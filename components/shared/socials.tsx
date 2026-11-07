const instagramUrl =
  "https://www.instagram.com/travel_with_limon58?srtk=MW83d2FreTEycWRhag==";

const facebookUrl = "https://www.facebook.com/travelwithlimon58";

/* Instagram SVG Icon */
function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Facebook SVG Icon */
function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
    </svg>
  );
}

/* Reusable Social Links */
export function SocialLinks({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex gap-3">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Travel With Limon on Instagram"
        title="Instagram - Travel With Limon"
        className={
          footer
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F]"
            : "flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F] hover:text-white hover:shadow-lg"
        }
      >
        <InstagramIcon className="h-6 w-6" />
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Travel With Limon on Facebook"
        title="Facebook - Travel With Limon"
        className={
          footer
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]"
            : "flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
        }
      >
        <FacebookIcon className="h-6 w-6" />
      </a>
    </div>
  );
}