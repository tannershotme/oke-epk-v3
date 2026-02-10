import Image from "next/image";
import { CREDIBILITY_LOGOS } from "@/data/logos";

export function CredibilityStrip() {
  return (
    <section className="py-16 lg:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-zinc-500 text-center mb-10 tracking-wide uppercase">
          Trusted by teams at
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16"
          data-animate
        >
          {CREDIBILITY_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="relative h-6 md:h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale invert"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={28}
                width={120}
                className="h-full w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
