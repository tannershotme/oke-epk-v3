import { FORMATS } from "@/data/formats";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

function FormatIcon({ name }: { name: string }) {
  const className = "w-8 h-8 text-indigo-400";

  switch (name.toLowerCase()) {
    case "keynote":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      );
    case "fireside chat":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "workshop (interactive)":
    case "workshop":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      );
  }
}

export function EngagementFormats() {
  return (
    <section id="formats" className="py-24 lg:py-32 section-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Formats"
          title="Engagement Formats"
          description="Flexible delivery designed for your event's needs."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FORMATS.map((format, i) => (
            <GlassCard
              key={format.id}
              className="p-6 md:p-8"
              data-animate
              data-animate-delay={String(i + 1)}
            >
              <div className="mb-4">
                <FormatIcon name={format.name} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {format.name}
              </h3>
              <p className="text-sm text-indigo-400 font-medium mb-4 font-mono">
                {format.duration}
              </p>

              <p className="text-xs text-zinc-500 mb-4">
                <span className="text-zinc-400 font-medium">
                  Works well for:{" "}
                </span>
                {format.worksWellFor}
              </p>

              <ul className="space-y-2">
                {format.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-zinc-400"
                  >
                    <span className="text-indigo-400 shrink-0">&bull;</span>
                    {b}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
