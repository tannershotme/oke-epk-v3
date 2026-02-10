import Image from "next/image";
import { HERO } from "@/data/site";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Chip } from "@/components/ui/Chip";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-indigo-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div data-animate>
            <Chip variant="accent" className="mb-6">
              {HERO.eyebrow}
            </Chip>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              {HERO.name}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 mt-6 max-w-lg font-light leading-relaxed">
              {HERO.positioning}
            </p>

            <p className="text-sm text-zinc-400 mt-4 max-w-lg">
              {HERO.support}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <PrimaryButton href="#booking">
                Check availability
              </PrimaryButton>
              <SecondaryButton href="#speaker-kit">
                Download speaker kit
              </SecondaryButton>
            </div>

            <p className="text-xs text-zinc-500 mt-4 max-w-md">
              {HERO.microcopy}
            </p>
          </div>

          {/* Right column — Portrait */}
          <div className="relative" data-animate data-animate-delay="2">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/oke-headshot.avif"
                alt="Oke Okaro — Keynote speaker and strategic advisor"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover"
              />
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
                      <span className="text-sm font-bold text-white font-mono">
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
