import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const points = [
  {
    title: "Egyptian-run, Egyptian-guided",
    body: "Founded and operated in Giza by people who grew up in the shadow of the pyramids — not a booking platform reselling someone else's tour.",
  },
  {
    title: "Small groups, real attention",
    body: "We keep tours private or small-group by default, so your guide is actually answering your questions, not managing a bus of forty.",
  },
  {
    title: "Straightforward booking",
    body: "No accounts, no long checkout forms. You message us on WhatsApp, we confirm the details, you show up.",
  },
];

export default function AboutSummary() {
  return (
    <section className="bg-papyrus py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Who we are"
          title="A local tour company built around the Giza plateau"
          description="Abado Pyramids &amp; Sphinx Tours started as a single guide's habit of walking friends-of-friends through Giza properly. It's grown into a small, dedicated team covering Cairo, Alexandria and Fayoum — but the habit never changed: no rushing, no scripted stops, just Egypt explained well."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 100}>
              <svg width="28" height="16" viewBox="0 0 46 24" aria-hidden="true">
                <line x1="0" y1="22" x2="46" y2="22" stroke="var(--color-limestone)" strokeWidth="1" />
                <circle cx="23" cy="14" r="7" fill="none" stroke="var(--color-gold)" strokeWidth="1.4" />
                <circle cx="23" cy="14" r="2.2" fill="var(--color-gold)" />
              </svg>
              <h3 className="mt-3 font-display text-xl text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {point.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
