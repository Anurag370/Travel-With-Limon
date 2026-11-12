
"use client";

import { useState, useSyncExternalStore } from "react";

import {
  BriefcaseBusiness,
  CalendarDays,
  Hotel,
  MapPin,
  Minus,
  Plus,
  Search,
  Users,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  { id: "tours", label: "Tour Packages", icon: BriefcaseBusiness },
  { id: "hotels", label: "Hotels", icon: Hotel },
] as const;

type Category = (typeof categories)[number]["id"];

const destinations = [
  "Darjeeling",
  "Darjeeling Offbeat",
  "Kalimpong",
  "Kalimpong Offbeat",
  "North Sikkim",
  "East Sikkim",
  "Dooars",
  "Bhutan",
];

const WHATSAPP_NUMBER = "918768790090";

function subscribeToToday() {
  return () => {};
}

function getTodaySnapshot() {
  const now = new Date();

  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

function getTodayServerSnapshot() {
  return "";
}

export function TravelSearch() {
  const [category, setCategory] = useState<Category>("tours");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  // Resolve today's date on the client without triggering a hydration mismatch.
  const today = useSyncExternalStore(
    subscribeToToday,
    getTodaySnapshot,
    getTodayServerSnapshot,
  );

  const totalTravelers = adults + children;

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !destination ||
      !travelDate ||
      totalTravelers < 1 ||
      (today && travelDate < today)
    ) {
      return;
    }

    const formattedDate = new Date(
      `${travelDate}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const categoryLabel =
      categories.find((item) => item.id === category)?.label ??
      "Tour Packages";

    const message = [
      "Hello Travel with Limon! 👋",
      "",
      "I would like to enquire about a trip. Here are my travel preferences:",
      "",
      "📌 ENQUIRY DETAILS",
      `✈️ Enquiry Type: ${categoryLabel}`,
      `📍 Destination: ${destination}`,
      `📅 Travel Date: ${formattedDate}`,
      "",
      "👥 TRAVELLERS",
      `• Adults: ${adults}`,
      `• Children: ${children}`,
      `• Total Travellers: ${totalTravelers}`,
      "",
      "Please share the available packages, pricing, itinerary and other details.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="travel-search"
      className="relative z-20 mx-auto -mt-10 w-full max-w-[1200px] px-4 sm:px-6"
    >
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/10 transition-colors duration-300 dark:border-[#34443e] dark:bg-[#1a2925] sm:p-6">

        {/* Category Tabs */}
        <div className="mb-5 flex flex-wrap gap-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const active = category === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={active}
                className={`flex min-h-[68px] min-w-[130px] items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                  active
                    ? "border-orange-300 bg-orange-50 text-brand-orange shadow-sm dark:border-orange-700 dark:bg-[#38291e]"
                    : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-orange-200 hover:bg-orange-50 dark:border-[#34443e] dark:bg-[#101b19] dark:text-[#d6ded9] dark:hover:bg-[#29352c]"
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
              className="flex items-center gap-2 text-sm font-semibold text-neutral-800 dark:text-[#f5f1e8]"
            >
              <MapPin className="h-4 w-4" />
              Where to?
            </label>

            <select
              id="destination"
              required
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100 dark:border-[#34443e] dark:bg-[#101b19] dark:text-[#f5f1e8] dark:focus:ring-orange-900/30"
            >
              <option value="" disabled>
                e.g. Darjeeling, Kalimpong, Sikkim
              </option>

              {destinations.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}
          <div className="space-y-2">
            <label
              htmlFor="travel-date"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-800 dark:text-[#f5f1e8]"
            >
              <CalendarDays className="h-4 w-4" />
              Travel Dates
            </label>

            <input
              id="travel-date"
              type="date"
              required
              min={today || undefined}
              value={travelDate}
              onChange={(event) => setTravelDate(event.target.value)}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-700 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100 dark:border-[#34443e] dark:bg-[#101b19] dark:text-[#f5f1e8] dark:focus:ring-orange-900/30"
            />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-800 dark:text-[#f5f1e8]">
              <Users className="h-4 w-4" />
              Travelers
            </label>

            <details className="group relative">
              <summary className="flex h-12 cursor-pointer list-none items-center justify-between rounded-xl border border-neutral-200 px-3 text-sm text-neutral-800 transition hover:border-brand-orange dark:border-[#34443e] dark:text-[#f5f1e8] [&::-webkit-details-marker]:hidden">
                <span>{totalTravelers} Travelers</span>
                <Users className="h-4 w-4 text-neutral-500 dark:text-[#b5c0ba]" />
              </summary>

              <div className="absolute right-0 top-14 z-30 w-64 rounded-xl border border-neutral-200 bg-white p-4 text-neutral-900 shadow-xl dark:border-[#34443e] dark:bg-[#1a2925] dark:text-[#f5f1e8]">

                {/* Adults */}
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold">Adults</p>
                    {/* <p className="text-xs text-neutral-500 dark:text-[#b5c0ba]">
                      Age 12+
                    </p> */}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Remove adult"
                      disabled={adults <= 1}
                      onClick={() => setAdults((v) => Math.max(1, v - 1))}
                      className="rounded-full border border-neutral-200 p-1.5 transition hover:border-brand-orange disabled:opacity-30 dark:border-[#52665b]"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-4 text-center text-sm font-semibold">
                      {adults}
                    </span>

                    <button
                      type="button"
                      aria-label="Add adult"
                      onClick={() => setAdults((v) => v + 1)}
                      className="rounded-full border border-neutral-200 p-1.5 transition hover:border-brand-orange dark:border-[#52665b]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-[#34443e]" />

                {/* Children */}
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold">Children</p>
                    <p className="text-xs text-neutral-500 dark:text-[#b5c0ba]">
                      Age 0–6
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Remove child"
                      disabled={children <= 0}
                      onClick={() =>
                        setChildren((v) => Math.max(0, v - 1))
                      }
                      className="rounded-full border border-neutral-200 p-1.5 transition hover:border-brand-orange disabled:opacity-30 dark:border-[#52665b]"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-4 text-center text-sm font-semibold">
                      {children}
                    </span>

                    <button
                      type="button"
                      aria-label="Add child"
                      onClick={() => setChildren((v) => v + 1)}
                      className="rounded-full border border-neutral-200 p-1.5 transition hover:border-brand-orange dark:border-[#52665b]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <p className="border-t border-neutral-200 pt-3 text-xs text-neutral-500 dark:border-[#34443e] dark:text-[#b5c0ba]">
                  Total: {totalTravelers} travellers
                </p>
              </div>
            </details>
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            disabled={!today}
            className="h-12 w-full rounded-xl bg-brand-orange px-6 font-semibold text-white shadow-md transition-all hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60 md:min-w-[145px]"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Trips
          </Button>
        </form>

        {/* WhatsApp Information */}
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-xs text-green-800 dark:border-green-900/60 dark:bg-green-950/30 dark:text-green-300">
          <MessageCircle className="h-4 w-4 shrink-0" />
          Your travel enquiry will open directly in Travel with Limon&apos;s WhatsApp.
        </div>
      </div>
    </section>
  );
}
