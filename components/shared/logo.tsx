import { Mountain } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  const t = useTranslations("Logo");

  return (
    <Link href="/" className="flex items-center gap-2">
      <Mountain
        className="h-9 w-9 text-brand-orange"
        strokeWidth={2.5}
      />

      <div className="flex flex-col">
        <span
          className={`font-heading text-xl font-bold leading-tight ${
            light ? "text-white" : "text-neutral-950"
          }`}
        >
          {t("brand")}
        </span>

        <span
          className={`text-[9px] font-medium tracking-tight ${
            light ? "text-white/80" : "text-neutral-600"
          }`}
        >
          {t("tagline")}
        </span>
      </div>
    </Link>
  );
}
