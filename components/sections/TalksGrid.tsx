import { TALKS } from "@/data/talks";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TalksGrid() {
  return (
    <section id="talks" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Sessions"
          title="Talks & Sessions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TALKS.map((talk, i) => (
            <GlassCard
              key={talk.id}
              as="article"
              className="p-6 md:p-8"
              data-animate
              data-animate-delay={String(i + 1)}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 mb-2">
                {talk.microLine}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                {talk.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                {talk.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {talk.formats.map((f) => (
                  <Chip key={f}>{f}</Chip>
                ))}
              </div>

              <p className="text-xs text-zinc-500 mb-2">
                <span className="text-zinc-400 font-medium">Audience: </span>
                {talk.audience}
              </p>
              <p className="text-xs text-zinc-500">
                <span className="text-zinc-400 font-medium">Outcome: </span>
                {talk.outcome}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
