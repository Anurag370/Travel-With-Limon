
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

import {
  Menu,
  Phone,
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


const navigation = [
  { name: "Home", href: "/", active: true },
  { name: "Destinations", href: "/#destinations" },
  { name: "About Us", href: "/#about" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-[#fffdf8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Desktop Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Travel with Limon"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>

          <span className="ml-2 font-heading text-xl font-bold text-neutral-900">
            Travel with Limon
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-orange ${
                item.active
                  ? "border-b-2 border-brand-orange py-5 text-brand-orange"
                  : "text-neutral-800"
              }`}
            >
              {item.name}

              {item.name === "Destinations" && (
                <ChevronDown size={14} />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+918001242166"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 transition-colors hover:text-brand-orange"
          >
            <Phone size={16} />
            +91 80012 42166
          </a>

          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="rounded-full bg-brand-orange px-6 font-semibold text-white hover:bg-orange-700"
          >
            Book Now
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
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
                    key={item.name}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors hover:bg-orange-100 hover:text-brand-orange"
                      />
                    }
                  >
                    {item.name}

                    {item.name === "Destinations" && (
                      <ChevronDown size={16} />
                    )}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 space-y-4 border-t border-orange-100 pt-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 px-4 text-sm font-medium"
                >
                  <Phone
                    size={18}
                    className="text-brand-orange"
                  />
                  +91 98765 43210
                </a>

                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  className="w-full rounded-full bg-brand-orange text-white hover:bg-orange-700"
                >
                  Book Your Trip
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
