import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import type { TravelPackage } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { destinationGallery } from "@/data/gallery";
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

  const { name, state, price, duration, whatsappUrl } =
    await getPackageDetails(pkg);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={destination.href}
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

        <div className="mt-4 flex-1 border-t border-orange-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
            {t("priceApprox")}
          </p>

          <p className="mt-1 font-heading text-2xl font-bold text-brand-green">
            {t("fromPrice", { price })}
          </p>

          <p className="text-xs text-neutral-500">{t("perPerson")}</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
        >
          {t("enquire")}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
