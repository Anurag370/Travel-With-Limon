
import {
  CheckCircle2,
  CircleX,
  Info,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { TravelItinerary } from "@/data/itineraries";

interface ItineraryDetailsProps {
  itinerary: TravelItinerary;
}

export function ItineraryDetails({ itinerary }: ItineraryDetailsProps) {
  return (
    <section className="space-y-10">
      {/* Inclusions and exclusions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inclusions */}
        <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 bg-[#073b34] px-6 py-5 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <CheckCircle2 size={21} className="text-emerald-300" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                What&apos;s included
              </p>
              <h3 className="font-heading text-xl font-bold">
                Package Inclusions
              </h3>
            </div>
          </div>

          <ul className="space-y-4 p-6">
            {itinerary.inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <span className="text-sm leading-6 text-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm">
          <div className="flex items-center gap-3 bg-[#292b2a] px-6 py-5 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <CircleX size={21} className="text-red-300" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Not included
              </p>
              <h3 className="font-heading text-xl font-bold">
                Package Exclusions
              </h3>
            </div>
          </div>

          <ul className="space-y-4 p-6">
            {itinerary.exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CircleX
                  size={18}
                  className="mt-0.5 shrink-0 text-red-500"
                />
                <span className="text-sm leading-6 text-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Important notes */}
      <div className="overflow-hidden rounded-3xl border border-amber-200 bg-amber-50">
        <div className="flex items-center gap-3 border-b border-amber-200 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-800">
            <Info size={21} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Before you travel
            </p>
            <h3 className="font-heading text-xl font-bold text-amber-950">
              Important Travel Notes
            </h3>
          </div>
        </div>

        <ul className="grid gap-4 p-6 sm:grid-cols-2">
          {itinerary.importantNotes.map((note, index) => (
            <li key={index} className="flex items-start gap-3">
              <Sparkles
                size={17}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span className="text-sm leading-6 text-amber-950">
                {note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing message */}
      <div className="relative overflow-hidden rounded-3xl bg-[#073b34] px-6 py-10 text-center sm:px-10">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-white/10" />

        <div className="relative">
          <ShieldCheck
            size={34}
            className="mx-auto text-orange-300"
          />

          <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
            {itinerary.closingMessage}
          </h3>

          <p className="mt-3 text-sm text-white/70">
            Travel. Explore. Experience India.
          </p>
        </div>
      </div>
    </section>
  );
}
