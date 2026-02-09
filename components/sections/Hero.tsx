import { HERO } from "@/data/site";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Chip } from "@/components/ui/Chip";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div data-animate>
            <Chip variant="accent" className="mb-6">
              {HERO.eyebrow}
            </Chip>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              {HERO.name}
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mt-6 max-w-lg font-light leading-relaxed">
              {HERO.positioning}
            </p>

            <p className="text-base text-zinc-500 mt-4 max-w-lg">
              {HERO.support}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <PrimaryButton href="#booking">
                Check availability
              </PrimaryButton>
              <SecondaryButton href="#speaker-kit" download>
                Download speaker kit
              </SecondaryButton>
            </div>

            <p className="text-xs text-zinc-600 mt-4 max-w-md">
              {HERO.microcopy}
            </p>
          </div>

          {/* Right column */}
          <div className="relative" data-animate data-animate-delay="2">
            {/* Portrait placeholder */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
                <span className="text-6xl font-bold text-zinc-700 tracking-tighter">
                  OO
                </span>
              </div>
            </div>

            {/* Proof card */}
            <div className="absolute -bottom-6 left-0 lg:-left-8 right-0 lg:right-8 mx-4 lg:mx-0">
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="flex flex-wrap justify-center gap-3">
                  {HERO.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"
                    >
                      <span className="text-sm font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
