
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  MessageCircle,
  Mountain,
} from "lucide-react";

import type { TravelItinerary } from "@/data/itineraries";
import { PACKAGE_WHATSAPP_NUMBER } from "@/lib/package-utils";

interface ItineraryHeroProps {
  itinerary: TravelItinerary;
}

export function ItineraryHero({ itinerary }: ItineraryHeroProps) {
  const message = [
    "Hello Travel with Limon! 👋",
    "",
    `I am interested in the ${itinerary.title} package.`,
    `Duration: ${itinerary.duration}`,
    `Destinations: ${itinerary.destinations.join(", ")}`,
    "",
    "Please share the package price, availability and booking details.",
    "",
    "Thank you!",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${PACKAGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#073b34] sm:min-h-[620px]">
      <Image
        src={itinerary.heroImage}
        alt={itinerary.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#032c28]/95 via-[#063d36]/45 to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12">
        <Link
          href="/packages"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
        >
          <ArrowLeft size={16} />
          All Packages
        </Link>

        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-100 backdrop-blur-md">
            <Mountain size={15} />
            Himalayan Travel Experience
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {itinerary.title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {itinerary.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md">
              <CalendarDays size={16} className="text-orange-300" />
              {itinerary.duration}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md">
              <MapPin size={16} className="text-orange-300" />
              {itinerary.destinations.join(" · ")}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-1 hover:bg-orange-700"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-orange via-brand-gold to-transparent" />
    </section>
  );
}
