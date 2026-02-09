import { BOOKING } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ui/ContactForm";

export function Booking() {
  return (
    <section id="booking" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
              Book
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-6">
              {BOOKING.sectionTitle}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
              {BOOKING.body}
            </p>
          </div>

          {/* Right column — contact form */}
          <GlassCard className="p-6 md:p-8" hover={false}>
            <ContactForm />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
