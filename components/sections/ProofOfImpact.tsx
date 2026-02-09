import { IMPACT_METRICS } from "@/data/impact";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProofOfImpact() {
  return (
    <section id="impact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Results"
          title="Proof of Measurable Impact"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((m) => (
            <GlassCard key={m.id} className="p-6 md:p-8">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 mb-4">
                {m.organization}
              </p>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">
                {m.title}
              </h3>
              <p className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                {m.metric}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {m.context}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
