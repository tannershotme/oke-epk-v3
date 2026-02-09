import { cn } from "@/lib/cn";

type ChipProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Chip({
  children,
  variant = "default",
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-3 py-1 rounded-full",
        variant === "default" && "bg-white/10 text-zinc-300",
        variant === "accent" && "bg-indigo-500/20 text-indigo-300",
        className
      )}
    >
      {children}
    </span>
  );
}
