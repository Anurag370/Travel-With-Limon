
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MapPin, PlaneTakeoff } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ItineraryHero } from "@/components/packages/itinerary-hero";
import { ItineraryTimeline } from "@/components/packages/itinerary-timeline";
import { ItineraryDetails } from "@/components/packages/itinerary-details";
import { getItineraryBySlug, itineraries } from "@/data/itineraries";

interface ItineraryPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

export async function generateMetadata({
  params,
}: ItineraryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    return { title: "Package Not Found | Travel with Limon" };
  }

  return {
    title: `${itinerary.title} | Travel with Limon`,
    description: itinerary.subtitle,
  };
}

export default async function ItineraryPage({
  params,
}: ItineraryPageProps) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff9ef]">
        {/* Premium Hero */}
        <ItineraryHero itinerary={itinerary} />

        {/* Overview */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Discover the journey
                </span>
              </div>

              <h2 className="font-heading text-3xl font-bold text-brand-green sm:text-4xl">
                Your Himalayan Escape
              </h2>

              <p className="mt-5 text-sm leading-8 text-neutral-600 sm:text-base">
                {itinerary.overview}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {itinerary.destinations.map((destination) => (
                  <span
                    key={destination}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-brand-green"
                  >
                    <MapPin size={14} className="text-brand-orange" />
                    {destination}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={itinerary.heroImage}
                alt={itinerary.heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pickup Information */}
        <section className="px-4 pb-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1200px] rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange">
                <PlaneTakeoff size={23} />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-brand-green">
                  Pickup & Drop Locations
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Pickup and drop facilities are available from the following
                  locations:
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {itinerary.pickupPoints.map((point) => (
                    <span
                      key={point}
                      className="rounded-lg bg-[#f5f7f3] px-3 py-2 text-sm font-medium text-neutral-700"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day-wise Timeline */}
        <section className="bg-[#f5f7f3] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <ItineraryTimeline days={itinerary.days} />
          </div>
        </section>

        {/* Inclusions, Exclusions and Notes */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <ItineraryDetails itinerary={itinerary} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
