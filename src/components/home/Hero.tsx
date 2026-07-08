import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { buildWhatsappUrl } from "@/lib/site-config";
import { img } from "@/lib/destinations";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-nile-night">
      <Image
        src="/images/sphinx.jpeg"
        alt="The Great Sphinx and the Pyramids of Giza at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nile-night via-nile-night/40 to-nile-night/70" />

      <Container className="relative z-10 pt-24">
        <p className="font-utility text-xs uppercase tracking-[0.35em] text-gold-bright">
          Giza · Cairo · Alexandria · Fayoum
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-3xl leading-[1.08] text-papyrus sm:text-6xl">
          Four thousand years of Egypt, guided by people who actually live here.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-papyrus/80 sm:text-lg">
          Private day tours to the Pyramids, the Sphinx, and beyond — booked in
          a two-minute WhatsApp chat, led by licensed Egyptologist guides, no
          rushed group buses.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={buildWhatsappUrl()} variant="primary">
            Chat with us on WhatsApp
          </Button>
          <Button href="/destinations" variant="secondary">
            Discover the tours
          </Button>
        </div>
      </Container>

      {/* <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-papyrus/50">
        <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true">
          <rect
            x="1"
            y="1"
            width="16"
            height="26"
            rx="8"
            fill="none"
            stroke="currentColor"
          />
          <circle cx="9" cy="8" r="2" fill="currentColor" />
        </svg>
      </div> */}
    </section>
  );
}
