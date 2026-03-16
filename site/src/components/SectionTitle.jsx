export default function SectionTitle({
  label,
  title,
  description,
  tone = "default",
}) {
  const isDark = tone === "dark"

  return (
    <div className="max-w-3xl">
      {label ? <p className="section-label">{label}</p> : null}
      <h2
        className={`text-3xl leading-tight sm:text-4xl lg:text-[3rem] ${
          label ? "mt-5" : ""
        } ${isDark ? "text-[var(--paper)]" : "text-[var(--ink)]"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-8 ${
            isDark ? "text-[rgba(243,239,230,0.74)]" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
