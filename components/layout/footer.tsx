import React from 'react'
import { getTranslations } from 'next-intl/server'

import { SocialLinks } from '../shared/socials'
import { Link } from '@/i18n/navigation'
import { destinations } from '@/data/destinations'

const Footer = async () => {
  const t = await getTranslations("Footer");
  const tDestinations = await getTranslations("destinations");

  return (
      <footer className="bg-[#00382f] px-5 pb-5 pt-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/#home" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-white">
                Travel <span className="text-brand-orange">with Limon</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
              {t("tagline")}
              <span className="block mt-2 text-sm text-brand-orange">
              Udyam id: <span className=" text-white/50">UDYAM-WB-01-0039508</span>
            </span>
            </p>
            <div className="mt-5">
              <SocialLinks footer />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">{t("quickLinks")}</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <Link className="transition hover:text-orange-300" href="/">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-orange-300"
                  href="/#destinations"
                >
                  {t("destinations")}
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-orange-300" href="/packages">
                  {t("packages")}
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-orange-300" href="/#about">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-orange-300" href="/#contact">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white">{t("destinations")}</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {destinations.map((place) => (
                <li key={place.slug}>
                  <Link
                    className="transition hover:text-orange-300"
                    href={place.href}
                  >
                    {tDestinations(`${place.slug}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-white">{t("getInTouch")}</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a
                  className="transition hover:text-orange-300"
                  href="tel:+918001242166"
                >
                  ☎ +91 80012 42166
                </a>
              </li>

              <li>
                <a
                  className="break-all transition hover:text-orange-300"
                  href="mailto:travelwithlimon58@gmail.com"
                >
                  ✉ travelwithlimon58@gmail.com
                </a>
              </li>

              <li className="flex gap-2">
                <span>📍</span>
                <span>{t("location")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/20 pt-4 text-center text-xs text-white/65">
          {t("copyright")}
        </div>
      </footer>
  )
}

export default Footer
