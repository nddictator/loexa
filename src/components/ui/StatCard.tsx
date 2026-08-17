import type { LucideIcon } from "lucide-react";
import { IconCircle } from "./IconCircle";

export function StatCard({
  icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-md shadow-navy/5">
      <IconCircle icon={icon} tone="navy" size="sm" />
      <p className="font-heading text-3xl font-bold text-navy">{value}</p>
      <p className="text-sm text-slate">{label}</p>
    </div>
  );
}
