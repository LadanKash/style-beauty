export default function Badge({
  children,
  tone = "soft",
}: {
  children: React.ReactNode;
  tone?: "soft" | "outline" | "accent";
}) {
  const base =
    "inline-flex items-center rounded-full text-xs px-3 py-1 font-medium";

  const tones = {
    soft: "bg-[rgba(230,164,180,0.15)] text-[var(--text)]",
    outline:
      "border border-[rgba(var(--border))] text-[var(--muted)]",
    accent:
      "bg-[rgb(var(--accent))] text-white",
  };

  return <span className={`${base} ${tones[tone]}`}>{children}</span>;
}
