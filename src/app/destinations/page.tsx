import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Destinations — Giza, Cairo, Alexandria & Fayoum Tours",
  description:
    "Private day tours across Egypt's most iconic destinations: the Pyramids of Giza, historic Cairo, coastal Alexandria and the desert oasis of Fayoum.",
  alternates: { canonical: `${siteConfig.url}/destinations` },
};

export default function DestinationsPage() {
  return (
    <div className="pt-28">
      <Container className="pb-6 pt-8 text-center">
        <SectionHeading
          eyebrow="All destinations"
          title="Egypt, one region at a time"
          description="From the pyramids on Giza's desert edge to the waterfalls of Fayoum, every tour below is private and built around your dates."
        />
      </Container>
      <DestinationsGrid showHeading={false} />
    </div>
  );
}
