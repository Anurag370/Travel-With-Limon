
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, CalendarDays, Map } from "lucide-react";

import type { TravelPackage } from "@/data/packages";
import { itineraries } from "@/data/itineraries";
import { getPackageDetails } from "@/lib/package-utils";
import { Link } from "@/i18n/navigation";

interface PackagePanelProps {
  pkg: TravelPackage;
}

export async function PackagePanel({ pkg }: PackagePanelProps) {
  const t = await getTranslations("Packages");

  const { duration, whatsappUrl } = await getPackageDetails(pkg);

  // Find all itineraries belonging to this destination.
  const destinationItineraries = itineraries.filter(
    (item) => item.destinationSlug === pkg.destinationSlug,
  );

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto -mt-10 max-w-[1200px] rounded-3xl border border-orange-100 bg-white p-5 shadow-xl shadow-emerald-950/10 sm:p-7">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Duration */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
              <CalendarDays size={21} className="text-brand-orange" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                {t("durationLabel")}
              </p>

              <p className="mt-1 text-base font-semibold text-brand-green">
                {duration}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">

            {destinationItineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/packages/${itinerary.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <Map size={16} />

                {destinationItineraries.length === 1
                  ? "View Itinerary"
                  : itinerary.title}

                <ArrowUpRight size={16} />
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
            >
              {t("enquire")}
              <ArrowUpRight size={16} />
            </a>

          </div>
        </div>

        {destinationItineraries.length === 0 && (
          <p className="mt-4 border-t border-orange-100 pt-3 text-sm text-neutral-500">
            Detailed itinerary coming soon. Contact us on WhatsApp for your travel plan.
          </p>
        )}

      </div>
    </section>
  );
}
