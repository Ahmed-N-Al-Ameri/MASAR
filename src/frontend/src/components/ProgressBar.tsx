import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function ProgressBar({
  value,
  showLabel = true,
  className,
  size = "md",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const barColor =
    clamped >= 70
      ? "bg-primary"
      : clamped >= 40
        ? "bg-amber-500"
        : "bg-red-500";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "flex-1 bg-muted rounded-full overflow-hidden",
          size === "sm" ? "h-1.5" : "h-2",
        )}
      >
        <div
          className={cn("h-full rounded-full transition-smooth", barColor)}
          style={{ width: `${clamped}%` }}
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-muted-foreground w-8 text-start">
          {clamped}%
        </span>
      )}
    </div>
  );
}
