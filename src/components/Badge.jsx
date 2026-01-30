import { cn } from "../lib/utils";

export function Badge({ className = "", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
