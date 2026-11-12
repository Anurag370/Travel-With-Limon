import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, BadgeIndianRupee, MessageCircle } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { PackageCard } from "@/components/packages/package-card";
import { packages } from "@/data/packages";
import { Link } from "@/i18n/navigation";
import { PACKAGE_WHATSAPP_NUMBER } from "@/lib/package-utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("packages.title"),
    description: t("packages.description"),
  };
}

export default async function PackagesPage() {
  const t = await getTranslations("Packages");

  const whatsappUrl = `https://wa.me/${PACKAGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("customTripMessage"),
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff9ef]">
        {/* Packages Hero */}
        <section className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#073b34] sm:min-h-[420px]">
          <Image
            src="/destinations/darjeeling/drj4.jpeg"
            alt={t("heroImageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#032c28]/95 via-[#063d36]/80 to-[#063d36]/35" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                <span className="h-px w-8 bg-brand-orange" />
                {t("eyebrow")}
              </div>

              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("title")}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                {t("description")}
              </p>

              <div className="mt-6 inline-flex items-start gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs leading-5 text-white/85 backdrop-blur-md sm:items-center">
                <BadgeIndianRupee
                  size={16}
                  className="mt-0.5 shrink-0 text-orange-300 sm:mt-0"
                />
                {t("approxNote")}
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-orange via-brand-gold to-transparent" />
        </section>

        {/* Package Grid */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-9 max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {t("sectionEyebrow")}
                </span>
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green sm:text-4xl">
                {t("sectionTitle")}
              </h2>

              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                {t("sectionDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Trip CTA */}
        <section className="px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#073b34] px-6 py-12 text-center sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              {t("customTripEyebrow")}
            </p>

            <h2 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
              {t("customTripTitle")}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
              {t("customTripDescription")}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-700"
              >
                {t("customTripCta")}
                <ArrowRight size={16} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-brand-green"
              >
                <MessageCircle size={16} />
                {t("chatCta")}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
