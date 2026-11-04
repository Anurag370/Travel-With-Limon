import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

import type { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={destination.href}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200 shadow-md"
    >
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.state}`}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/90" />

      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-orange">
        <ArrowUpRight size={18} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">

        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/80">
          <MapPin size={13} />
          {destination.state}
        </div>

        <h3 className="font-heading text-2xl font-bold sm:text-3xl">
          {destination.name}
        </h3>

        <p className="mt-1 text-sm text-white/80">
          {destination.description}
        </p>

        <div className="mt-4 h-px w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}