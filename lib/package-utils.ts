import { getFormatter, getTranslations } from "next-intl/server";

import type { TravelPackage } from "@/data/packages";

export const PACKAGE_WHATSAPP_NUMBER = "918768790090";

export async function getPackageDetails(pkg: TravelPackage) {
  const t = await getTranslations("Packages");
  const tDestinations = await getTranslations("destinations");
  const format = await getFormatter();

  const name = tDestinations(`${pkg.destinationSlug}.name`);
  const state = tDestinations(`${pkg.destinationSlug}.state`);

  const price = format.number(pkg.priceFrom, {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const duration = t("duration", {
    days: pkg.durationDays,
    nights: pkg.durationNights,
  });

  const enquiryMessage = t("enquiryMessage", {
    destination: name,
    price,
  });

  const whatsappUrl = `https://wa.me/${PACKAGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    enquiryMessage,
  )}`;

  return { name, state, price, duration, whatsappUrl };
}
