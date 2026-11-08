import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/home/contact";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}
