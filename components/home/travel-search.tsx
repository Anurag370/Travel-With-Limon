"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import {
  BriefcaseBusiness,
  CalendarDays,
  Hotel,
  MapPin,
  Minus,
  Plus,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";

export function TravelSearch() {
  const t = useTranslations("TravelSearch");
  const tDestinations = useTranslations("destinations");

  const categories = [
    { id: "tours", label: t("tours"), icon: BriefcaseBusiness },
    { id: "hotels", label: t("hotels"), icon: Hotel },
  ] as const;

  type Category = (typeof categories)[number]["id"];

  const [category, setCategory] = useState<Category>("tours");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const totalTravelers = adults + children;

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const categoryLabel =
    categories.find((item) => item.id === category)?.label;

  return (
    <section
      id="travel-search"
      className="relative z-20 mx-auto -mt-10 w-full max-w-[1200px] px-4 sm:px-6"
    >
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/10 sm:p-6">

        {/* Category Tabs */}
        <div className="mb-5 grid grid-cols-4 gap-2 sm:flex sm:gap-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const active = category === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setCategory(item.id);
                  setSubmitted(false);
                }}
                className={`flex min-h-[68px] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-all sm:min-w-[130px] sm:flex-row sm:text-sm ${
                  active
                    ? "border-orange-300 bg-orange-50 text-brand-orange shadow-sm"
                    : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-orange-200 hover:bg-orange-50"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 gap-3 md:grid-cols-[1.3fr_1fr_1fr_auto] md:items-end"
        >
          {/* Destination */}
          <div className="space-y-2">
            <label
              htmlFor="destination"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-800"
            >
              <MapPin className="h-4 w-4" />
              {t("whereTo")}
            </label>

            <select
              id="destination"
              required
              value={destination}
              onChange={(event) => {
                setDestination(event.target.value);
                setSubmitted(false);
              }}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
            >
              <option value="" disabled>
                {t("destinationPlaceholder")}
              </option>

              {destinations.map((place) => (
                <option key={place.slug} value={place.slug}>
                  {tDestinations(`${place.slug}.name`)}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}
          <div className="space-y-2">
            <label
              htmlFor="travel-date"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-800"
            >
              <CalendarDays className="h-4 w-4" />
              {t("travelDates")}
            </label>

            <input
              id="travel-date"
              type="date"
              required
              value={travelDate}
              onChange={(event) => {
                setTravelDate(event.target.value);
                setSubmitted(false);
              }}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-700 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <Users className="h-4 w-4" />
              {t("travelers")}
            </label>

            <details className="group relative">
              <summary className="flex h-12 cursor-pointer list-none items-center justify-between rounded-xl border border-neutral-200 px-3 text-sm transition hover:border-brand-orange">
                <span>{t("travelersCount", { count: totalTravelers })}</span>
                <Users className="h-4 w-4 text-neutral-500" />
              </summary>

              <div className="absolute right-0 top-14 z-30 w-64 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
                {/* Adults */}
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold">{t("adults")}</p>
                    <p className="text-xs text-neutral-500">
                      {t("adultsAge")}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={t("removeAdult")}
                      disabled={adults <= 1}
                      onClick={() => setAdults((v) => Math.max(1, v - 1))}
                      className="rounded-full border p-1.5 disabled:opacity-30"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-4 text-center text-sm font-semibold">
                      {adults}
                    </span>

                    <button
                      type="button"
                      aria-label={t("addAdult")}
                      onClick={() => setAdults((v) => v + 1)}
                      className="rounded-full border p-1.5"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="border-t" />

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold">{t("children")}</p>
                    <p className="text-xs text-neutral-500">
                      {t("childrenAge")}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={t("removeChild")}
                      disabled={children <= 0}
                      onClick={() =>
                        setChildren((v) => Math.max(0, v - 1))
                      }
                      className="rounded-full border p-1.5 disabled:opacity-30"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-4 text-center text-sm font-semibold">
                      {children}
                    </span>

                    <button
                      type="button"
                      aria-label={t("addChild")}
                      onClick={() => setChildren((v) => v + 1)}
                      className="rounded-full border p-1.5"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </details>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-brand-orange px-6 font-semibold text-white shadow-md transition-all hover:bg-orange-700 md:min-w-[145px]"
          >
            <Search className="mr-2 h-4 w-4" />
            {t("searchTrips")}
          </Button>
        </form>

        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4"
          >
            <p className="text-sm font-semibold text-brand-green">
              {t("readyTitle")}
            </p>

            <p className="mt-1 text-sm text-neutral-700">
              {t("summary", {
                category: categoryLabel ?? "",
                destination: destination
                  ? tDestinations(`${destination}.name`)
                  : "",
                date: travelDate,
                adults,
                children,
              })}
            </p>

            <p className="mt-2 text-xs text-neutral-500">
              {t("demoNote")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
