import { FORMATS } from "@/data/formats";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EngagementFormats() {
  return (
    <section id="formats" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Formats"
          title="Engagement Formats"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FORMATS.map((format) => (
            <GlassCard key={format.id} className="p-6 md:p-8 flex flex-col">
              <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                {format.name}
              </h3>
              <p className="text-sm text-indigo-400 font-medium mb-4">
                {format.duration}
              </p>

              <p className="text-xs text-zinc-500 mb-6">
                <span className="font-medium text-zinc-400">
                  Works well for:{" "}
                </span>
                {format.worksWellFor}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-medium text-zinc-300 mb-3">
                  What you&apos;ll get:
                </p>
                <ul className="space-y-2">
                  {format.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="text-zinc-600 shrink-0">&bull;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
