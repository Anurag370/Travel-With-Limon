import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/shared/destination-card";

export function Destinations() {
  return (
    <section
      id="destinations"
      className="scroll-mt-16 bg-[#fff9ef] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Discover India
              </span>
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green sm:text-4xl lg:text-5xl">
              Explore India&apos;s Finest Destinations
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
              From the majestic Himalayas to tropical beaches,
              discover the incredible diversity and beauty of India.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-orange transition-all hover:gap-3"
          >
            View All Destinations
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

      </div>
    </section>
  );
}