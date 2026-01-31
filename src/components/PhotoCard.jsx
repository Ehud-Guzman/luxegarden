import { Search, ArrowRight, Sparkles } from "lucide-react";

export function PhotoCard({
  src,
  tag,
  title,
  subtitle,
  className = "",
  onClick,
}) {
  const isClickable = typeof onClick === "function";

  return (
    <div
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!isClickable) return;
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
      className={[
        "group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white",
        "shadow-[0_10px_30px_rgba(2,6,23,0.06)]",
        "transition-all duration-300 ease-out",
        isClickable ? "cursor-pointer" : "",
        "hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(2,6,23,0.12)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={title || ""}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />

        {/* Premium gradient (subtle) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70" />

        {/* Tag */}
        {tag && (
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-200" />
              {tag}
            </span>
          </div>
        )}

        {/* View icon */}
        <div className="absolute right-4 top-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur">
            <Search className="h-5 w-5" />
          </div>
        </div>

        {/* Soft border highlight */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="relative p-5 lg:p-6">
        {title && (
          <div className="text-base lg:text-lg font-bold tracking-tight text-slate-900">
            {title}
          </div>
        )}

        {subtitle && (
          <div className="mt-2 text-sm leading-relaxed text-slate-600">
            {subtitle}
          </div>
        )}

        {/* Learn more */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="text-sm font-semibold text-emerald-700">
            Learn more
          </div>

          <ArrowRight className="h-4 w-4 text-emerald-700 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Corner accent (very subtle) */}
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-emerald-100/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}
