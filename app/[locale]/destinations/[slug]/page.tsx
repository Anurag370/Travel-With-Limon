import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Navbar } from "@/components/layout/navbar";
import { Link } from "@/i18n/navigation";
import { destinations } from "@/data/destinations";
import { destinationGallery } from "@/data/gallery";
import { getPackageByDestination } from "@/data/packages";
import { DestinationGallery } from "@/components/shared/destination-gallery";
import { PackagePanel } from "@/components/packages/package-panel";

export const instant = false;

interface DestinationPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  const gallery = destinationGallery[slug];
  const pkg = getPackageByDestination(slug);

  if (!destination || !gallery) {
    notFound();
  }

  const t = await getTranslations("destinations");
  const pageT = await getTranslations("DestinationPage");

  const name = t(`${slug}.name`);
  const state = t(`${slug}.state`);
  const description = t(`${slug}.description`);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff9ef]">

        {/* Destination Hero */}
        <section className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-brand-green md:min-h-[600px]">
          <Image
            src={gallery.cover}
            alt={name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 pt-32 sm:px-8 lg:px-12">
            <Link
              href="/#destinations"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              {pageT("backToDestinations")}
            </Link>

            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              <MapPin size={16} />
              {state}
            </div>

            <h1 className="max-w-4xl font-heading text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
              {name}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80">
              <Camera size={17} />
              {pageT("photographs", { count: gallery.images.length })}
            </div>
          </div>
        </section>

        {/* Approximate Package Price */}
        {pkg && <PackagePanel pkg={pkg} />}

        {/* Destination Gallery */}
        <DestinationGallery slug={slug} />
      </main>
    </>
  );
}
