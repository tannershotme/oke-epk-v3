import { cn } from "@/lib/cn";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export function PrimaryButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "bg-white text-black font-semibold rounded-full",
    "px-8 py-3 text-sm",
    "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    "hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
    "hover:-translate-y-0.5",
    "active:scale-[0.97]",
    "transition-all duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
