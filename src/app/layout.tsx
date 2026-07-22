import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://bodyscore.me"),
  title: {
    default: "Bodyscore — AI Text Humanizer for Academic & Professional Writing",
    template: "%s | Bodyscore",
  },
  description:
    "Instantly humanize AI-generated text to sound naturally written. Includes free AI score verification, citation-safe rewriting for academic papers, and multi-mode rewriting pipelines. No signup required.",
  openGraph: {
    title: "Bodyscore — AI Text Humanizer",
    description:
      "Instantly humanize AI-generated text to sound naturally written. Free AI score verification, citation-safe rewriting for academic papers.",
    locale: "en_US",
    type: "website",
    url: "https://bodyscore.me",
    siteName: "Bodyscore",
  },
  twitter: {
    card: "summary",
    title: "Bodyscore — AI Text Humanizer",
    description:
      "Instantly humanize AI-generated text to sound naturally written. Free AI score verification, citation-safe rewriting.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect / DNS prefetch to backend — speeds up first request */}
        <link rel="preconnect" href="https://bypass-ai-api.yufe99.workers.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bypass-ai-api.yufe99.workers.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body>{children}<CookieConsent /></body>
    </html>
  );
}