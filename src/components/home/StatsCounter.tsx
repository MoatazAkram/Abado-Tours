"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: 25, suffix: "+", label: "Years in the field of tourism" },
  { value: 50000, suffix: "+", label: "Satisfied travelers worldwide" },
  { value: 500, suffix: "+", label: "Excellent reviews on TripAdvisor" },
  { value: 100, suffix: "%", label: "Private & flexible bespoke tours" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({ value, suffix, label }: (typeof stats)[number]) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, active);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl text-gold-bright sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-papyrus/70">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-nile-night-light py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Track record"
          title="The elements of our success in the infinite world of tourism"
          dark
        />

        <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
