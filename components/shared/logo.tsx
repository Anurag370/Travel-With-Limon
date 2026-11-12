import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logo.png"
          alt="Travel with Limon"
          fill
          priority
          sizes="44px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-heading text-xl font-bold leading-tight ${
            light ? "text-white" : "text-neutral-950"
          }`}
        >
          Travel with Limon
        </span>

        <span
          className={`text-[9px] font-medium tracking-tight ${
            light ? "text-white/80" : "text-neutral-600"
          }`}
        >
          Travel · Explore · Experience India
        </span>
      </div>
    </Link>
  );
}
