"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Languages } from "lucide-react";

const LOCALES = [
  { value: "en", label: "English" },
  { value: "bn", label: "বাংলা" },
] as const;

export function LanguageSwitcher() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <label className="flex items-center gap-2">
      <Languages size={16} className="hidden text-brand-orange lg:block" aria-hidden="true" />
      <span className="sr-only">{t("language")}</span>
      <select
        value={locale}
        onChange={(event) => handleChange(event.target.value)}
        aria-label={t("language")}
        className="h-9 cursor-pointer rounded-full border border-orange-200 bg-white px-3 text-xs font-semibold text-neutral-800 outline-none transition hover:border-brand-orange focus-visible:border-brand-orange sm:text-sm"
      >
        {LOCALES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
