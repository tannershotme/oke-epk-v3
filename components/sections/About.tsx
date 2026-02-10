"use client";

import { useState } from "react";
import Image from "next/image";
import { ABOUT } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Background" title="About Oke" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Photo column */}
          <div className="lg:col-span-2" data-animate>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/oke-speaking.png"
                alt="Oke Okaro speaking at a live event"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3" data-animate data-animate-delay="1">
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {ABOUT.paragraph}
            </p>

            <ul className="space-y-3 mb-8">
              {ABOUT.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-300">
                  <span className="text-indigo-400 shrink-0 mt-0.5">&bull;</span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Read full bio"}
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                expanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-zinc-400 leading-relaxed">
                {ABOUT.expandedBio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
