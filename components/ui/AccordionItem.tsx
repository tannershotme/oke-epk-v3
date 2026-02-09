"use client";

import { cn } from "@/lib/cn";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
};

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: AccordionItemProps) {
  const panelId = `${id}-panel`;
  const triggerId = `${id}-trigger`;

  return (
    <div className="border-b border-white/10">
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <span className="text-base font-medium text-zinc-200 pr-4">
          {question}
        </span>
        <svg
          className={cn(
            "h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300",
            isOpen && "rotate-45"
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "overflow-hidden transition-all duration-350 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-zinc-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
