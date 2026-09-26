interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`flex items-center gap-2.5 font-mono text-caption uppercase tracking-wide text-copper-400 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className="h-px w-6 bg-copper-400" />
          {eyebrow}
          {align === "center" && <span aria-hidden="true" className="h-px w-6 bg-copper-400" />}
        </span>
      )}
      <h2 className="text-h2-mobile md:text-h2 text-paper-50">{title}</h2>
      {description && (
        <p className="max-w-prose text-body-lg-mobile md:text-body-lg text-ash-400">
          {description}
        </p>
      )}
    </div>
  );
}
