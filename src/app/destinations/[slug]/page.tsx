import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TourCard from "@/components/home/TourCard";
import SunDivider from "@/components/ui/SunDivider";
import { destinations, getDestination } from "@/lib/destinations";
import { toursForDestination } from "@/lib/tours";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};

  const title = `${destination.name} Tours — ${destination.tagline}`;
  return {
    title,
    description: destination.description,
    alternates: { canonical: `${siteConfig.url}/destinations/${destination.slug}` },
    openGraph: {
      title,
      description: destination.description,
      images: [{ url: destination.image }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const relatedTours = toursForDestination(destination.slug);

  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-nile-night pt-28">
        <Image
          src={destination.image}
          alt={`${destination.name} — ${destination.tagline}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nile-night via-nile-night/30 to-transparent" />
        <Container className="relative z-10 pb-16">
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-gold-bright">
            {destination.arabicName}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-papyrus sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-xl text-base text-papyrus/80">
            {destination.tagline}
          </p>
        </Container>
      </section>

      <section className="bg-papyrus py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="About this destination"
              title={`Why travelers come to ${destination.name}`}
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
              {destination.longDescription}
            </p>
          </div>

          <div className="rounded-sm border border-limestone bg-white/50 p-7">
            <h3 className="font-display text-lg text-ink">
              What&rsquo;s included
            </h3>
            <ul className="mt-4 space-y-3">
              {destination.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <Button
              href={buildWhatsappUrl(
                `Hello! I'd like to know more about ${destination.name} tours.`
              )}
              variant="primary"
              className="mt-7 w-full"
            >
              Ask about {destination.name}
            </Button>
          </div>
        </Container>
      </section>

      <SunDivider />

      {relatedTours.length > 0 && (
        <section className="bg-limestone/25 py-20">
          <Container>
            <SectionHeading
              align="left"
              eyebrow="Tours here"
              title={`${destination.name} tours you can book today`}
            />
            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-papyrus py-16">
        <Container className="text-center">
          <Link
            href="/destinations"
            className="font-body text-sm uppercase tracking-[0.14em] text-clay underline decoration-gold underline-offset-4"
          >
            ← Back to all destinations
          </Link>
        </Container>
      </section>
    </div>
  );
}
