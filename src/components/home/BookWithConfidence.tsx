import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    title: "24/7 Support",
    body: "A real person answers your WhatsApp messages, day or night, before and during your trip.",
  },
  {
    title: "Private Tour Guide",
    body: "A dedicated, licensed Egyptologist guide for your group — never merged into a stranger's bus tour.",
  },
  {
    title: "Money Value",
    body: "Transparent, fair pricing with no hidden add-ons at checkout, because there is no checkout.",
  },
  {
    title: "Flexible Payment",
    body: "Pay in cash on the day, or secure your date with a simple deposit — your choice.",
  },
];

export default function BookWithConfidence() {
  return (
    <section className="bg-nile-night py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Book with confidence"
          title="What every Abado tour includes, by default"
          dark
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-papyrus/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="bg-nile-night-light p-8">
              <h3 className="font-display text-lg text-gold-bright">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-papyrus/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
