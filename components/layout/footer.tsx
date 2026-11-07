import React from 'react'
import Link from 'next/link'

import { SocialLinks } from '../shared/socials'

const Footer = () => {
  return (
      <footer className="bg-[#00382f] px-5 pb-5 pt-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-white">
                Travel <span className="text-brand-orange">with Limon</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
              Discover India with curated tours, local experiences, and
              unforgettable journeys.
            </p>

            <div className="mt-5">
              <SocialLinks footer />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <Link className="transition hover:text-orange-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-orange-300"
                  href="/#destinations"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-orange-300" href="/#about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-orange-300" href="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white">Destinations</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "Kalimpong",
                "Darjeeling",
                "North sikkim",
                "East sikkim",
                "Darjeeling offbeat",
                "Kalimpong offbeat",
              ].map((place) => (
                <li key={place}>
                  <Link
                    className="transition hover:text-orange-300"
                    href="/#destinations"
                  >
                    {place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

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
                <span>Falakata, Alipurduar, West Bengal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/20 pt-4 text-center text-xs text-white/65">
          © 2026 Travel With Limon. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer
