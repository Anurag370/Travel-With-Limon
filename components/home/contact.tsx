"use client";

import { useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react";
const WHATSAPP_BUSINESS_NUMBER = "+918768790090";
const faqs = [
  {
    question: "How can I book a trip?",
    answer:
      "Send us your destination, travel dates, and the number of travellers. Our team will get in touch to discuss the next steps.",
  },
  {
    question: "Can I ask for a customised travel plan?",
    answer:
      "Absolutely. Share the places you would like to visit, your preferred dates, and any special requirements in the message form.",
  },
  {
    question: "How can I confirm package details and payment options?",
    answer:
      "Contact us directly before making a payment. We will share the available package details and explain the payment process with you.",
  },
  {
    question: "Where are you located?",
    answer:
      "Travel with Limon is based in Falakata, Alipurduar, West Bengal. Please contact us before visiting so we can coordinate with you.",
  },
];

const instagramUrl =
  "https://www.instagram.com/travel_with_limon58?srtk=MW83d2FreTEycWRhag==";

const facebookUrl =
  "https://www.facebook.com/travelwithlimon58";

/* Instagram SVG Icon */
function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* Facebook SVG Icon */
function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
    </svg>
  );
}

/* Reusable Social Links */
function SocialLinks({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex gap-3">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Travel With Limon on Instagram"
        title="Instagram - Travel With Limon"
        className={
          footer
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F]"
            : "flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F] hover:text-white hover:shadow-lg"
        }
      >
        <InstagramIcon className="h-6 w-6" />
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Travel With Limon on Facebook"
        title="Facebook - Travel With Limon"
        className={
          footer
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]"
            : "flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
        }
      >
        <FacebookIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Tour package enquiry",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const message = [
    "Hello Travel with Limon! 👋",
    "",
    "I have a new travel enquiry.",
    "",
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Subject: ${form.subject}`,
    `Message: ${form.message.trim()}`,
    "",
    "Please share more details. Thank you!",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${+918768790090}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

  return (
    <main className="bg-[#fff9ef] text-neutral-800">
      {/* Contact Hero */}
      <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#073b34] sm:min-h-[370px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#032c28]/95 via-[#063d36]/75 to-[#063d36]/25" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
              <span className="h-px w-8 bg-brand-orange" />
              Contact Us
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Have a question, need a custom trip, or want to plan your next
              adventure? We would love to hear from you.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-orange via-brand-gold to-transparent" />
      </section>

      {/* Contact Form and Information */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Contact Form */}
          <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-emerald-950/5 sm:p-8">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Write to us
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold text-brand-green sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Fill in the details below and continue the conversation with
                us on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Your Name <span className="text-brand-orange">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Your Email <span className="text-brand-orange">*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Subject
                </label>

                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                >
                  <option>Tour package enquiry</option>
                  <option>Custom travel plan</option>
                  <option>Hotel enquiry</option>
                  <option>Booking support</option>
                  <option>Other question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Your Message <span className="text-brand-orange">*</span>
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder="Tell us a little about the trip you have in mind..."
                  className="w-full resize-y rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 text-sm font-semibold text-white shadow-md shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                <Send size={17} />
                Send via WhatsApp
              </button>

              <p className="text-center text-xs leading-5 text-neutral-500">
                Your message will open in WhatsApp Business. You can review
                it before sending.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-emerald-950/5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Reach our team
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold text-brand-green">
                Contact Information
              </h2>

              <div className="mt-7 space-y-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${8768790090}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <MessageCircle size={20} />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-neutral-900">
                      WhatsApp Business
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      +91 87687 90090
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      Chat with us about your trip
                    </span>
                  </span>
                </a>

                {/* Phone */}
                <a href="tel:+918001242166" className="group flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <Phone size={20} />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-neutral-900">
                      Contact Call
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      +91 80012 42166
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      Call us for enquiries
                    </span>
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:travelwithlimon58@gmail.com"
                  className="group flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <Mail size={20} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-neutral-900">
                      Email Us
                    </span>

                    <span className="mt-1 block break-all text-sm text-neutral-600">
                      travelwithlimon58@gmail.com
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      Send us your questions anytime
                    </span>
                  </span>
                </a>

                {/* Location */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Falakata%2C+Alipurduar%2C+West+Bengal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-neutral-900">
                      Our Location
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      Falakata, Alipurduar
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      West Bengal, India · View map
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-7 rounded-2xl bg-[#fff5e8] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-green">
                  <Clock3 size={17} className="text-brand-orange" />
                  Let&apos;s plan your next journey
                </div>

                <p className="mt-2 text-xs leading-5 text-neutral-600">
                  Call, email, or message us with your travel requirements.
                  We&apos;ll be happy to help.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <h3 className="font-heading text-xl font-bold text-brand-green">
                Follow Our Journey
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Explore our travel stories, discover beautiful destinations,
                and stay connected with Travel With Limon.
              </p>

              <div className="mt-5">
                <SocialLinks />
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Follow us for travel inspiration and updates.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-[#fff3df] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-9 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Need to know?
            </p>

            <h2 className="mt-2 font-heading text-3xl font-bold text-brand-green sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-sm text-neutral-600">
              A few quick answers to help you get started.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-orange-100 bg-[#fffaf2]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-neutral-900 transition hover:text-brand-orange sm:px-6"
                  >
                    {faq.question}

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-brand-orange transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-orange-100 px-5 py-4 text-sm leading-7 text-neutral-600 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Find Us Here */}
      <section className="bg-[#e8efdf] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-orange-100 bg-[#e9f0df] shadow-sm md:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[220px] md:min-h-[250px]">
            <iframe
              title="Map showing Falakata, Alipurduar, West Bengal"
              src="https://www.google.com/maps?q=Falakata%2C%20Alipurduar%2C%20West%20Bengal&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center justify-between gap-3 p-5">
            <div>
              <h3 className="font-heading text-lg font-bold text-brand-green">
                Find Us Here
              </h3>

              <p className="mt-1 text-sm text-neutral-600">
                Falakata, West Bengal, India
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Falakata%2C+Alipurduar%2C+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-brand-green/20 px-4 py-2 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
            >
              Open Map
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00382f] px-5 pb-5 pt-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-white">
                Travel <span className="text-brand-orange">with Limon</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
              Discover India with curated tours, local experiences, and
              unforgettable journeys.
            </p>

            <div className="mt-5">
              <SocialLinks footer />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a className="transition hover:text-orange-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="/#destinations"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="/packages"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white">Destinations</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "Kalimpong",
                "Darjeeling",
                "North sikkim",
                "East sikkim",
                "Darjeeling offbeat",
                "Kalimpong offbeat",
              ].map((place) => (
                <li key={place}>
                  <a
                    className="transition hover:text-orange-300"
                    href="/#destinations"
                  >
                    {place}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="tel:+918001242166"
                >
                  ☎ +91 80012 42166
                </a>
              </li>

              <li>
                <a
                  className="break-all transition hover:text-orange-300"
                  href="mailto:travelwithlimon58@gmail.com"
                >
                  ✉ travelwithlimon58@gmail.com
                </a>
              </li>

              <li className="flex gap-2">
                <span>📍</span>
                <span>Falakata, Alipurduar, West Bengal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/20 pt-4 text-center text-xs text-white/65">
          © 2026 Travel With Limon. All rights reserved.
        </div>
      </footer>
    </main>
  );
}