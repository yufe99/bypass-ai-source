import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent Plans",
  description: "Start free with 3 rewrites per day. Upgrade to Pro ($15/mo) or Academic ($19/mo) for unlimited rewrites, all modes, and priority processing.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}