import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Logo() {
  const t = useTranslations("Logo");

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logo.png"
          alt={t("brand")}
          fill
          priority
          sizes="44px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <span className="font-heading text-xl font-bold leading-tight text-neutral-950">
          {t("brand")}
        </span>

        <span className="text-[9px] font-medium tracking-tight text-neutral-600">
          {t("tagline")}
        </span>
      </div>
    </Link>
  );
}
