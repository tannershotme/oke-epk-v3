"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              id={`faq-${i}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
