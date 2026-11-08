
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

const reviewIds = [1, 2, 3, 4] as const;
const reviewUrls: Record<number, string> = {
  1: "https://www.facebook.com/reel/3313951985478234",
  2: "https://www.facebook.com/reel/1339349497696751",
  3: "https://www.facebook.com/reel/1577373470630542",
  4: "https://www.facebook.com/reel/2148471792576141",
};

export async function ReviewVideos() {
  const t = await getTranslations("Reviews");

  return (
    <section className="bg-[#fff9ef] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
            {t("sectionEyebrow")}
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-green sm:text-4xl">
            {t("sectionTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            {t("sectionDescription")}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-7 sm:grid-cols-2">
          {reviewIds.map((id) => {
            const review = t.raw(`videos.${id}`) as {
              title: string;
              destination: string;
            };
            const url = reviewUrls[id];

            const embedUrl =
              `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;

            return (
              <article
                key={id}
                className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Facebook Video */}
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <iframe
                    src={embedUrl}
                    title={review.title}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Video Details */}
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-green">
                      {review.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {review.destination}
                    </p>
                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("watchOnFacebook", { title: review.title })}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange transition hover:bg-brand-orange hover:text-white"
                  >
                    <ExternalLink size={21} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-600">
            {t("bottomMessage")}
          </p>
        </div>

      </div>
    </section>
  );
}
