import { SPEAKER_KIT } from "@/data/site";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function SpeakerKit() {
  return (
    <section
      id="speaker-kit"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
            Resources
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-4">
            Speaker Kit
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            {SPEAKER_KIT.description}
          </p>

          <PrimaryButton href="/Oke-Okaro-Speaker-Kit.pdf" className="mb-10">
            Download speaker kit
          </PrimaryButton>

          <div className="text-left max-w-md mx-auto">
            <p className="text-xs font-medium text-zinc-400 mb-3 uppercase tracking-wider">
              What&apos;s inside
            </p>
            <ul className="space-y-2">
              {SPEAKER_KIT.contents.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-zinc-500"
                >
                  <span className="text-zinc-700">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
