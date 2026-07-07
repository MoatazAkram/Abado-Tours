import Image from "next/image";
import { Tour } from "@/types";
import { buildWhatsappUrl } from "@/lib/site-config";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-white/40 shadow-sm ring-1 ring-limestone/60">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-nile-night/85 px-3 py-1 font-utility text-[0.65rem] uppercase tracking-[0.14em] text-gold-bright">
          {tour.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink">{tour.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {tour.summary}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-limestone/70 pt-4">
          {/* <span className="font-body text-sm font-semibold text-clay">
            {tour.price}
          </span> */}
          <a
            href={buildWhatsappUrl(
              `Hello! I'd like to book: ${tour.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-ink underline decoration-gold underline-offset-4 hover:text-clay"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
