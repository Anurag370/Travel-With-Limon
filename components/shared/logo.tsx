import Link from "next/link";
import { Mountain } from "lucide-react";

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
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