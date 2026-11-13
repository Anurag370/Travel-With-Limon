
import Image from "next/image";
import { CalendarDays, MapPin, Moon, Route } from "lucide-react";

import type { ItineraryDay } from "@/data/itineraries";

interface ItineraryTimelineProps {
  days: ItineraryDay[];
}

export function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
            Your journey
          </span>
        </div>

        <h2 className="font-heading text-3xl font-bold text-brand-green sm:text-4xl">
          Day-by-Day Itinerary
        </h2>

        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Explore every moment of your journey, from scenic mountain drives
          to peaceful Himalayan destinations.
        </p>
      </div>

      <div className="relative space-y-8 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-orange-200 md:before:left-[27px]">
        {days.map((day) => (
          <article
            key={day.day}
            className="relative grid gap-5 pl-12 md:grid-cols-[1fr_1.1fr] md:gap-8 md:pl-16"
          >
            {/* Timeline marker */}
            <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#fff9ef] bg-brand-orange text-sm font-bold text-white shadow-md md:h-14 md:w-14">
              {String(day.day).padStart(2, "0")}
            </div>

            {/* Day image */}
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-neutral-200 md:min-h-[300px]">
              <Image
                src={day.image}
                alt={day.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <CalendarDays size={14} />
                Day {day.day}
              </div>
            </div>

            {/* Day details */}
            <div className="flex flex-col justify-center rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                Day {day.day}
              </span>

              <h3 className="mt-2 font-heading text-xl font-bold text-brand-green sm:text-2xl">
                {day.title}
              </h3>

              {day.route && (
                <div className="mt-3 flex items-start gap-2 text-sm font-medium text-neutral-600">
                  <Route size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                  <span>{day.route}</span>
                </div>
              )}

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {day.description}
              </p>

              <div className="my-5 h-px bg-orange-100" />

              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-green">
                <MapPin size={16} className="text-brand-orange" />
                Places & Activities
              </h4>

              <ul className="space-y-2.5">
                {day.activities.map((activity, index) => (
                  <li
                    key={`${day.day}-${index}`}
                    className="flex items-start gap-3 text-sm leading-6 text-neutral-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>

              {day.note && (
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  <strong>Important note:</strong> {day.note}
                </div>
              )}

              {day.overnightStay && (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#f5f7f3] px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Moon size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      Night stay
                    </p>
                    <p className="text-sm font-semibold text-brand-green">
                      {day.overnightStay}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
