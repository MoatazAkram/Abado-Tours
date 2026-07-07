import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TourCard from "./TourCard";
import { tours } from "@/lib/tours";

export default function FeaturedTours() {
  const featured = tours.slice(0, 6);

  return (
    <section className="bg-limestone/25 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Popular right now"
          title="Start with the Pyramids, Memphis or a full day in Cairo"
          description="These are the three tours most first-time visitors book. Every one of them can be adjusted to your schedule and combined with the others."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </Container>
    </section>
  );
}
