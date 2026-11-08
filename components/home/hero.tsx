import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section id="home" className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#09243c] md:min-h-[540px]">

      {/* Background Image */}
      <Image
        src="/images/darjeeling-hero.jpg"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b32]/95 via-[#06233c]/75 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031b32]/40 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">

        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-sm font-medium tracking-wide text-white sm:text-base">
            <span className="h-px w-8 bg-brand-orange" />
            {t("eyebrow")}
            <span className="h-px w-8 bg-brand-orange" />
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-brand-orange">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/90 sm:text-base md:text-lg">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

            <Button
              nativeButton={false}
              render={<Link href="/packages" />}
              className="h-12 rounded-full bg-brand-orange px-6 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition-all hover:-translate-y-1 hover:bg-orange-700 sm:px-7">
              {t("explorePackages")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              nativeButton={false}
              render={<Link href="/#destinations" />}
              variant="outline"
              className="h-12 rounded-full border-2 border-white/80 bg-transparent px-6 text-sm font-semibold text-white transition-all hover:bg-white hover:text-neutral-900 sm:px-7">
              <MapPin className="mr-2 h-4 w-4" />
              {t("viewDestinations")}
            </Button>

          </div>
        </div>
      </div>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-orange via-brand-gold to-transparent" />

    </section>
  );
}
