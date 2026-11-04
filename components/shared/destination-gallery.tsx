"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, MapPin, X } from "lucide-react";
import { destinationGallery } from "@/data/gallery";

interface DestinationGalleryProps {
  slug: string;
}

export function DestinationGallery({ slug }: DestinationGalleryProps) {
  const gallery = destinationGallery[slug];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeViewer = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    if (!gallery) return;
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + gallery.images.length) % gallery.images.length,
    );
  }, [gallery]);

  const showNext = useCallback(() => {
    if (!gallery) return;
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % gallery.images.length,
    );
  }, [gallery]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeViewer, showNext, showPrevious]);

  if (!gallery || gallery.images.length === 0) return null;

  const images = gallery.images;
  const visibleImages = images.slice(0, 5);

  return (
    <section className="bg-[#fff9ef] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Explore the destination
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-green sm:text-4xl">
              Moments worth remembering
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Take a closer look at the landscapes, views and experiences waiting
              for you in {gallery.title}.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-brand-green">
            <Images size={16} className="text-brand-orange" />
            {images.length} {images.length === 1 ? "photo" : "photos"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {visibleImages.map((src, index) => {
            const isFeatured = index === 0;
            const isLastVisible = index === 4 && images.length > 5;

            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photo ${index + 1} of ${gallery.title}`}
                className={`group relative min-h-[230px] overflow-hidden rounded-2xl bg-neutral-200 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/50 ${
                  isFeatured
                    ? "sm:col-span-2 sm:row-span-2 sm:min-h-[430px] lg:min-h-[500px]"
                    : "min-h-[220px] lg:min-h-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`${gallery.title} travel view ${index + 1}`}
                  fill
                  priority={isFeatured}
                  sizes={
                    isFeatured
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5 opacity-70 transition-opacity group-hover:opacity-100" />

                {isFeatured && (
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    <MapPin size={15} />
                    Discover {gallery.title}
                  </div>
                )}

                {isLastVisible && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 text-white">
                    <span className="rounded-full border border-white/40 bg-white/15 px-5 py-3 text-sm font-bold backdrop-blur-md">
                      +{images.length - 5} more photos
                    </span>
                  </div>
                )}

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-green opacity-0 shadow-lg transition-all group-hover:opacity-100">
                  <Images size={16} />
                </span>
              </button>
            );
          })}
        </div>

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${gallery.title} photo viewer`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeViewer();
            }}
          >
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="relative h-[72vh] w-full max-w-6xl">
              <Image
                src={images[activeIndex]}
                alt={`${gallery.title} photo ${activeIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight size={26} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              {activeIndex + 1} / {images.length} · {gallery.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
