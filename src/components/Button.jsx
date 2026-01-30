import { cn } from "../lib/utils";

export function Button({ className = "", variant = "solid", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-500/40";
  const styles = {
    solid: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-soft",
    outline: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
  };
  return <button className={cn(base, styles[variant], className)} {...props} />;
}
