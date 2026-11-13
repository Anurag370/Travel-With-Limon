
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import type { TravelPackage } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { destinationGallery } from "@/data/gallery";
import { itineraries } from "@/data/itineraries";
import { getPackageDetails } from "@/lib/package-utils";
import { Link } from "@/i18n/navigation";

interface PackageCardProps {
  pkg: TravelPackage;
}

export async function PackageCard({ pkg }: PackageCardProps) {
  const t = await getTranslations("Packages");

  const destination = destinations.find(
    (item) => item.slug === pkg.destinationSlug,
  );

  const cover =
    destinationGallery[pkg.destinationSlug]?.cover ?? destination?.image;

  if (!destination || !cover) return null;

  const { name, state, duration, whatsappUrl } =
    await getPackageDetails(pkg);

  // Find an itinerary associated with this package's destination.
  const itinerary = itineraries.find(
    (item) => item.destinationSlug === pkg.destinationSlug,
  );

  // Open the itinerary when available; otherwise open the destination page.
  const cardHref = itinerary
    ? `/packages/${itinerary.slug}`
    : destination.href;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={cardHref}
        className="relative block aspect-[4/3] overflow-hidden bg-neutral-200"
      >
        <Image
          src={cover}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {itinerary && (
          <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            More details
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/85">
            <MapPin size={13} />
            {state}
          </div>

          <h3 className="font-heading text-2xl font-bold">{name}</h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
          <CalendarDays size={16} className="text-brand-orange" />
          {duration}
        </div>

        <div className="mt-4 flex flex-1 flex-col justify-end border-t border-orange-100 pt-4">
          <Link
            href={cardHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
          >
            More Details
            <ArrowUpRight size={16} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-orange px-4 py-3 text-sm font-semibold text-brand-orange transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
          >
            {t("enquire")}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
