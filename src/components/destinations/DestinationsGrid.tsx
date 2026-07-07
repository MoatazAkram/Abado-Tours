import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/lib/destinations";

export default function DestinationsGrid({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [first, ...rest] = destinations;

  return (
    <section className="bg-papyrus py-24 sm:py-28">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Where we go"
            title="Four destinations, one desert-to-sea stretch of Egypt"
            description="Every tour is private and built around your dates — pick one destination or combine them into a full week."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3 ">
            <DestinationCard destination={first} size="large" priority />
          </div>
          {rest.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </Container>
    </section>
  );
}
