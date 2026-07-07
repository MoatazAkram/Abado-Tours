import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SunDivider from "@/components/ui/SunDivider";
import BookWithConfidence from "@/components/home/BookWithConfidence";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";
import { img } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Abado Pyramids & Sphinx Tours is a Giza-based, Egyptian-run tour company offering private, licensed-guide day tours across Giza, Cairo, Alexandria and Fayoum.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="bg-papyrus py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title="Egypt, explained by the people who call it home"
              description="Abado Pyramids & Sphinx Tours began on the Giza plateau, showing visiting friends around properly instead of rushing them past a monument list. That's still the whole idea: fewer stops, better explained, at a pace that respects your time and the history itself."
            />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/65">
              Today we run private day tours across Giza, Cairo, Alexandria
              and Fayoum with a small team of licensed Egyptologist guides.
              No call centers, no reseller markup — you message the same
              small team that will meet you on the day.
            </p>
            <Button href={buildWhatsappUrl()} variant="primary" className="mt-8">
              Chat with our team
            </Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={"/images/giza-pyramids.jpeg"}
              alt="The Great Pyramids of Giza"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <SunDivider />

      <section className="bg-limestone/25 py-20">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xl text-ink">Our promise</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Licensed guides, transparent pricing, and tours built around
              your schedule rather than a fixed bus timetable.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink">Our team</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              A small group of Cairo and Giza-based Egyptologists and
              drivers, most of whom have worked together for years.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink">Our reach</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Giza, Cairo, Alexandria and Fayoum today, with more of Egypt
              on the way as our team grows.
            </p>
          </div>
        </Container>
      </section>

      <BookWithConfidence />
    </div>
  );
}
