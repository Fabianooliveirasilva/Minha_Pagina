type SectionHeadingProps = {
  number: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({
  number,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 flex items-end gap-4 ${align === "center" ? "justify-center text-center" : "justify-start"}`}
    >
      <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
        {number}
      </span>
      <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
