import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { AboutUs } from "@/components/home/aboutus";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
    </>
  );
}
