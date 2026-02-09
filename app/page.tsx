import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { SignatureKeynote } from "@/components/sections/SignatureKeynote";
import { TalksGrid } from "@/components/sections/TalksGrid";
import { EngagementFormats } from "@/components/sections/EngagementFormats";
import { ProofOfImpact } from "@/components/sections/ProofOfImpact";
import { About } from "@/components/sections/About";
import { SpeakerKit } from "@/components/sections/SpeakerKit";
import { FAQ } from "@/components/sections/FAQ";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <CredibilityStrip />
        <SignatureKeynote />
        <TalksGrid />
        <EngagementFormats />
        <ProofOfImpact />
        <About />
        <SpeakerKit />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <ScrollAnimationProvider />
    </>
  );
}
