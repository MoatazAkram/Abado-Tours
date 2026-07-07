export default function SunDivider({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const line = tone === "light" ? "var(--color-limestone)" : "rgba(246,239,221,0.18)";
  const sun = "var(--color-gold)";

  return (
    <div
      aria-hidden="true"
      className="mx-auto flex w-full max-w-7xl items-center px-5 sm:px-8 lg:px-12"
    >
      <span className="h-px flex-1" style={{ backgroundColor: line }} />
      <svg width="46" height="24" viewBox="0 0 46 24" className="mx-4 shrink-0">
        <line x1="0" y1="22" x2="46" y2="22" stroke={line} strokeWidth="1" />
        <circle cx="23" cy="14" r="7" fill="none" stroke={sun} strokeWidth="1.4" />
        <circle cx="23" cy="14" r="2.2" fill={sun} />
      </svg>
      <span className="h-px flex-1" style={{ backgroundColor: line }} />
    </div>
  );
}
