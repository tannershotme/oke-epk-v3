import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl",
        hover &&
          "hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </Tag>
  );
}
