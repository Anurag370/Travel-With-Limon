
import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { ReviewVideos } from "@/components/reviews/review-videos";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("reviews.title"),
    description: t("reviews.description"),
  };
}

export default async function ReviewsPage() {
  const t = await getTranslations("Reviews");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff9ef]">

        {/* Reviews Hero */}
        <section className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#073b34] sm:min-h-[430px]">

          <Image
            src="/destinations/darjeeling/drj4.jpeg"
            alt={t("heroImageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#032c28]/95 via-[#063d36]/75 to-[#063d36]/30" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">

            <div className="max-w-2xl lg:ml-auto lg:mr-0 lg:text-right">

              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90 lg:justify-end">
                <span className="h-px w-8 bg-brand-orange" />
                {t("heroEyebrow")}
              </div>

              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("heroTitle")}
                <span className="block text-brand-orange">
                  {t("heroTitleHighlight")}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base lg:ml-auto">
                {t("heroDescription")}
              </p>

            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-l from-brand-orange via-brand-gold to-transparent" />
        </section>

        {/* Video Reviews */}
        <ReviewVideos />

        {/* Share Your Experience */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#073b34] px-6 py-12 text-center sm:px-12">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              {t("shareEyebrow")}
            </p>

            <h2 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
              {t("shareTitle")}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
              {t("shareDescription")}
            </p>

            <a
              href="https://wa.me/918768790090?text=Hello%20Travel%20with%20Limon!%20I%20would%20like%20to%20share%20my%20travel%20experience."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-700"
            >
              {t("shareCta")}
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
