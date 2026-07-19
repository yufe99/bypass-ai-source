"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ModeSelector, type ModeId } from "@/components/ModeSelector";
import { HumanizeInput } from "@/components/HumanizeInput";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { AIScorePreview } from "@/components/AIScorePreview";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  const [mode, setMode] = useState<ModeId>("standard");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ModeSelector selected={mode} onChange={setMode} />
        <HumanizeInput mode={mode} />
        <HowItWorks />
        <Features />
        <AIScorePreview />
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}