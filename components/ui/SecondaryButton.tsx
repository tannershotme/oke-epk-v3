import { cn } from "@/lib/cn";

type SecondaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
};

export function SecondaryButton({
  children,
  href,
  onClick,
  className,
  download,
}: SecondaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "border border-white/20 text-white font-medium rounded-full",
    "px-8 py-3 text-sm",
    "hover:bg-white/5 hover:border-white/40",
    "hover:-translate-y-0.5",
    "active:scale-[0.97]",
    "transition-all duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} download={download || undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
