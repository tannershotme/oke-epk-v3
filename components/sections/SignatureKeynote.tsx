import { SIGNATURE_KEYNOTE } from "@/data/talks";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SignatureKeynote() {
  const talk = SIGNATURE_KEYNOTE;

  return (
    <section id="speaking" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Featured" title="Signature Keynote" />

        <GlassCard className="p-8 md:p-12 relative overflow-hidden" hover={false}>
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400 mb-3">
              {talk.microLine}
            </p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white mb-4">
              {talk.title}
            </h3>
            <p className="text-zinc-400 text-lg max-w-3xl mb-6 leading-relaxed">
              {talk.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {talk.formats.map((f) => (
                <Chip key={f}>{f}</Chip>
              ))}
            </div>

            <p className="text-sm text-zinc-500 mb-6">
              <span className="text-zinc-400 font-medium">Audience: </span>
              {talk.audience}
            </p>

            {talk.outcomes && (
              <div>
                <p className="text-sm font-medium text-zinc-300 mb-3">
                  What your audience will take away:
                </p>
                <ul className="space-y-2">
                  {talk.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-indigo-400 shrink-0 mt-0.5">
                        &bull;
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
