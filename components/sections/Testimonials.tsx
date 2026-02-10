"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Subtle warm background shift */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionHeader
                    label="Testimonials"
                    title="What People Say"
                    align="center"
                />

                {/* Quote display */}
                <div className="min-h-[280px] flex items-center" data-animate>
                    <blockquote className="text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed italic">
                            &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                        </p>

                        <footer className="mt-8">
                            <p className="text-base text-white font-medium">
                                {TESTIMONIALS[active].name}
                            </p>
                            <p className="text-sm text-zinc-400 mt-1">
                                {TESTIMONIALS[active].title},{" "}
                                {TESTIMONIALS[active].company}
                            </p>
                        </footer>
                    </blockquote>
                </div>

                {/* Navigation dots */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    {TESTIMONIALS.map((t, i) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setActive(i)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                i === active
                                    ? "bg-indigo-400 w-8"
                                    : "bg-zinc-600 hover:bg-zinc-500"
                            )}
                            aria-label={`Show testimonial from ${t.name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
