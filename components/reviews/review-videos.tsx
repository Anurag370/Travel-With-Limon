
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Traveler Experience 01",
    destination: "Darjeeling",
    url: "https://www.facebook.com/reel/3313951985478234",
  },
  {
    id: 2,
    title: "Traveler Experience 02",
    destination: "North Sikkim",
    url: "https://www.facebook.com/reel/1339349497696751",
  },
  {
    id: 3,
    title: "Traveler Experience 03",
    destination: "Travel Memories",
    url: "https://www.facebook.com/reel/1577373470630542",
  },
  {
    id: 4,
    title: "Traveler Experience 04",
    destination: "Travel Memories",
    url: "https://www.facebook.com/reel/2148471792576141",
  },
];

export function ReviewVideos() {
  return (
    <section className="bg-[#fff9ef] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
            Real Stories • Real Experiences
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-green sm:text-4xl">
            What Our Travelers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Every journey creates a beautiful memory. Watch the experiences
            shared by travelers who explored with Travel with Limon.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-7 sm:grid-cols-2">
          {reviews.map((review) => {
            const embedUrl =
              `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(review.url)}&show_text=false&width=500`;

            return (
              <article
                key={review.id}
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
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${review.title} on Facebook`}
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
            Your memories could be featured here too!
          </p>
        </div>

      </div>
    </section>
  );
}
