import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Travel Responsibly",
    description:
      "We encourage thoughtful travel that respects local culture, nature, and the communities we visit.",
  },
  {
    icon: Heart,
    title: "Genuine Experiences",
    description:
      "Discover the character of every destination through meaningful, memorable experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Your Comfort Matters",
    description:
      "From the first conversation to the end of your journey, your comfort and peace of mind come first.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Planning",
    description:
      "We pay attention to the little details that help make every trip feel special.",
  },
];

const highlights = [
  { icon: Compass, title: "Explore with purpose", text: "Trips shaped around the places you want to discover." },
  { icon: MapPin, title: "Local perspective", text: "A travel experience inspired by the people and places of India." },
  { icon: Users, title: "People first", text: "Friendly guidance and support while planning your journey." },
];

export function AboutUs() {
  return (
    <main className="bg-[#fff9ef] text-neutral-800" id="about">
      {/* Page hero */}
      <section className="relative isolate flex min-h-[310px] items-center overflow-hidden bg-[#073b34] sm:min-h-[390px]">
        <Image
          src="/images/darjeeling-hero.jpg"
          alt="Mountain landscape in the Indian Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032c28]/95 via-[#063d36]/75 to-[#063d36]/20" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
              <span className="h-px w-8 bg-brand-orange" />
              About Travel with Limon
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Every journey has a story. We are here to help you discover
              incredible places, experience local culture, and make memories
              that stay with you.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-orange via-brand-gold to-transparent" />
      </section>

      {/* Story */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl shadow-emerald-950/10">
              <div
                role="img"
                aria-label="Travellers exploring a mountain trail"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85')",
                }}
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-orange-100 bg-white px-5 py-4 shadow-lg sm:-right-6">
              <p className="font-heading text-lg font-bold text-brand-green">Travel. Explore.</p>
              <p className="text-sm text-neutral-500">Experience India.</p>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Who We Are
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green sm:text-4xl">
              Making every journey worth remembering
            </h2>
            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
              Travel with Limon is built around a simple idea: travelling
              should be more than moving from one place to another. It should
              bring you closer to new landscapes, cultures, food, and people.
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              Whether you are dreaming of mountain views, a peaceful getaway,
              or an exciting holiday with family and friends, we want to make
              planning your next adventure easier and more personal.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fff3df] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                What Guides Us
              </span>
              <span className="h-px w-8 bg-brand-orange" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-green sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
              The principles behind the way we plan, guide, and experience every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-orange-100 bg-[#fffaf2] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-green">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#073b34] px-4 py-16 text-center sm:px-6 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e29]/90 via-[#073b34]/75 to-[#052e29]/90" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
            Your next story starts here
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Travel Beyond Boundaries
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Tell us what kind of journey you have in mind. Let&apos;s start
            planning an experience you will always remember.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-7 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-700"
          >
            Plan Your Trip <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
