import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-zinc-400 mt-4 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
