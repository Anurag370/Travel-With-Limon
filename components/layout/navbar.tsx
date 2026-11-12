"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

import {
  Menu,
  ChevronDown,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const SECTION_IDS = ["home", "destinations", "about", "contact"];

export function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { key: "home", href: "/#home", section: "home", match: "/" },
    { key: "destinations", href: "/#destinations", section: "destinations", match: "/destinations" },
    { key: "packages", href: "/packages", section: null, match: "/packages" },
    { key: "reviews", href: "/reviews", section: null, match: "/reviews" },
    { key: "about", href: "/#about", section: "about", match: "/about" },
    { key: "contact", href: "/#contact", section: "contact", match: "/contact" },
  ] as const;

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (item: (typeof navigation)[number]) => {
    if (pathname !== "/") {
      return item.match !== "/" && pathname.startsWith(item.match);
    }

    return item.section !== null && activeSection === item.section;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-[#fffdf8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Desktop Logo */}
        <Link href="/#home" className="flex shrink-0 items-center">
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt={t("brand")}
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>

          <span className="ml-2 font-heading text-xl font-bold text-neutral-900">
            {t("brand")}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-orange ${
                isActive(item)
                  ? "border-b-2 border-brand-orange py-5 text-brand-orange"
                  : "text-neutral-800"
              }`}
            >
              {t(item.key)}

              {item.key === "destinations" && (
                <ChevronDown size={14} />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />

          <Button
            nativeButton={false}
            render={<Link href="/#contact" />}
            className="rounded-full bg-brand-orange px-6 font-semibold text-white hover:bg-orange-700"
          >
            {t("bookNow")}
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("openMenu")}
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-brand-cream"
            >
              <SheetHeader className="border-b border-orange-100 pb-5">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => (
                  <SheetClose
                    key={item.key}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors hover:bg-orange-100 hover:text-brand-orange ${
                          isActive(item) ? "bg-orange-50 text-brand-orange" : ""
                        }`}
                      />
                    }
                  >
                    {t(item.key)}

                    {item.key === "destinations" && (
                      <ChevronDown size={16} />
                    )}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 space-y-4 border-t border-orange-100 pt-6">
                <LanguageSwitcher />

                <Button
                  nativeButton={false}
                  render={<Link href="/#contact" />}
                  className="w-full rounded-full bg-brand-orange text-white hover:bg-orange-700"
                >
                  {t("bookYourTrip")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
