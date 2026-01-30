export function SectionTitle({ kicker, title, subtitle, align = "center" }) {
  const a = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  return (
    <div className={"max-w-2xl " + a}>
      {kicker ? (
        <div className="mb-2 text-xs font-semibold tracking-widest text-emerald-700">
          {kicker.toUpperCase()}
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
