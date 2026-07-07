export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          className={`font-utility text-xs uppercase tracking-[0.3em] ${
            dark ? "text-gold-bright" : "text-clay"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${
          dark ? "text-papyrus" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-papyrus/75" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
