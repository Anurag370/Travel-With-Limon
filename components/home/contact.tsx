"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { SocialLinks } from '../shared/socials'
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react";

export function Contact() {
  const t = useTranslations("Contact");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subjectOptions = [
    { key: "package", value: "Tour package enquiry" },
    { key: "custom", value: "Custom travel plan" },
    { key: "hotel", value: "Hotel enquiry" },
    { key: "booking", value: "Booking support" },
    { key: "other", value: "Other question" },
  ] as const;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "package",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      t("whatsapp.greeting"),
      "",
      t("whatsapp.intro"),
      "",
      `${t("whatsapp.nameLabel")}: ${form.name.trim()}`,
      `${t("whatsapp.emailLabel")}: ${form.email.trim()}`,
      `${t("whatsapp.subjectLabel")}: ${t(`subjects.${form.subject}`)}`,
      `${t("whatsapp.messageLabel")}: ${form.message.trim()}`,
      "",
      t("whatsapp.closing"),
    ].join("\n");

    const whatsappUrl = `https://wa.me/${+918768790090}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const faqs = t.raw("faqs") as Array<{ question: string; answer: string }>;

  return (
    <main className="scroll-mt-16 bg-[#fff9ef] text-neutral-800" id="contact">
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
              {t("eyebrow")}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              {t("intro")}
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
                {t("formEyebrow")}
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold text-brand-green sm:text-3xl">
                {t("formTitle")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {t("formIntro")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  {t("nameLabel")} <span className="text-brand-orange">*</span>
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
                  placeholder={t("namePlaceholder")}
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  {t("emailLabel")} <span className="text-brand-orange">*</span>
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
                  placeholder={t("emailPlaceholder")}
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  {t("subjectLabel")}
                </label>

                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 text-sm outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                >
                  {subjectOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {t(`subjects.${option.key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  {t("messageLabel")} <span className="text-brand-orange">*</span>
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder={t("messagePlaceholder")}
                  className="w-full resize-y rounded-xl border border-neutral-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 text-sm font-semibold text-white shadow-md shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                <Send size={17} />
                {t("sendWhatsApp")}
              </button>

              <p className="text-center text-xs leading-5 text-neutral-500">
                {t("whatsappNote")}
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-emerald-950/5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                {t("reachEyebrow")}
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold text-brand-green">
                {t("infoTitle")}
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
                      {t("whatsappBusiness")}
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      +91 87687 90090
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      {t("whatsappHint")}
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
                      {t("contactCall")}
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      +91 80012 42166
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      {t("callHint")}
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
                      {t("emailUs")}
                    </span>

                    <span className="mt-1 block break-all text-sm text-neutral-600">
                      travelwithlimon58@gmail.com
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      {t("emailHint")}
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
                      {t("ourLocation")}
                    </span>

                    <span className="mt-1 block text-sm text-neutral-600">
                      {t("locationCity")}
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      {t("locationRegion")}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-7 rounded-2xl bg-[#fff5e8] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-green">
                  <Clock3 size={17} className="text-brand-orange" />
                  {t("planJourney")}
                </div>

                <p className="mt-2 text-xs leading-5 text-neutral-600">
                  {t("planJourneyText")}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <h3 className="font-heading text-xl font-bold text-brand-green">
                {t("followTitle")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {t("followText")}
              </p>

              <div className="mt-5">
                <SocialLinks />
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                {t("followNote")}
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
              {t("faqEyebrow")}
            </p>

            <h2 className="mt-2 font-heading text-3xl font-bold text-brand-green sm:text-4xl">
              {t("faqTitle")}
            </h2>

            <p className="mt-3 text-sm text-neutral-600">
              {t("faqIntro")}
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
              title={t("mapFrameTitle")}
              src="https://www.google.com/maps?q=Falakata%2C%20Alipurduar%2C%20West%20Bengal&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center justify-between gap-3 p-5">
            <div>
              <h3 className="font-heading text-lg font-bold text-brand-green">
                {t("findUs")}
              </h3>

              <p className="mt-1 text-sm text-neutral-600">
                {t("findUsAddress")}
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Falakata%2C+Alipurduar%2C+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-brand-green/20 px-4 py-2 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
            >
              {t("openMap")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}

    </main>
  );
}
