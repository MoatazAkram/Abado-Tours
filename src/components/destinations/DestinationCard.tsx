import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types";

export default function DestinationCard({
  destination,
  size = "normal",
  priority = false,
}: {
  destination: Destination;
  size?: "normal" | "large";
  priority?: boolean;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group relative block overflow-hidden rounded-sm ${
        size === "large" ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/5]"
      }`}
    >
      <Image
        src={destination.image}
        alt={`${destination.name} — ${destination.tagline}`}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nile-night/90 via-nile-night/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-gold-bright">
          {destination.arabicName}
        </p>
        <h3 className="mt-1 font-display text-2xl text-papyrus sm:text-3xl">
          {destination.name}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-papyrus/75">
          {destination.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.16em] text-papyrus underline decoration-gold underline-offset-4 transition-colors group-hover:text-gold-bright">
          Explore {destination.name}
        </span>
      </div>
    </Link>
  );
}
