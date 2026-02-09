import { CREDIBILITY_LOGOS } from "@/data/logos";

export function CredibilityStrip() {
  return (
    <section className="py-16 border-y border-white/5" data-animate>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-zinc-500 text-center mb-10">
          Experience across global product and media organizations, including:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CREDIBILITY_LOGOS.map((logo) => (
            <span
              key={logo.name}
              className="text-lg font-semibold text-zinc-600 tracking-tight hover:text-zinc-400 transition-colors duration-300"
              aria-label={logo.alt}
            >
              {logo.name}
            </span>
          ))}
        </div>
        <p className="text-[10px] text-zinc-700 text-center mt-8">
          Logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}
