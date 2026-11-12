import { getTranslations } from "next-intl/server";
import { ArrowUpRight, CalendarDays, IndianRupee } from "lucide-react";

import type { TravelPackage } from "@/data/packages";
import { getPackageDetails } from "@/lib/package-utils";

interface PackagePanelProps {
  pkg: TravelPackage;
}

export async function PackagePanel({ pkg }: PackagePanelProps) {
  const t = await getTranslations("Packages");
  const { price, duration, whatsappUrl } = await getPackageDetails(pkg);

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto -mt-10 max-w-[1200px] rounded-3xl border border-orange-100 bg-white p-5 shadow-xl shadow-emerald-950/10 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <div>
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                <IndianRupee size={13} className="text-brand-orange" />
                {t("priceApprox")}
              </p>

              <p className="mt-1 font-heading text-2xl font-bold text-brand-green">
                {t("fromPrice", { price })}
              </p>

              <p className="text-xs text-neutral-500">{t("perPerson")}</p>
            </div>

            <div className="hidden h-12 w-px bg-orange-100 sm:block" />

            <div>
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                <CalendarDays size={13} className="text-brand-orange" />
                {t("durationLabel")}
              </p>

              <p className="mt-2 text-sm font-semibold text-brand-green">
                {duration}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
            >
              {t("enquire")}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <p className="mt-4 border-t border-orange-100 pt-3 text-xs leading-5 text-neutral-500">
          {t("approxNote")}
        </p>
      </div>
    </section>
  );
}
