import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bypass-ai.pages.dev"),
  title: {
    default: "Professional AI Text Humanizer — Write with Confidence | BypassAI.online",
    template: "%s | BypassAI.online",
  },
  description:
    "Instantly humanize AI text to sound naturally written. Free AI score verification. No signup required. Works for academic, professional & creative writing.",
  openGraph: {
    title: "Professional AI Text Humanizer — BypassAI.online",
    description:
      "Instantly humanize AI text to sound naturally written. Free AI score verification. No signup required.",
    locale: "en_US",
    type: "website",
    url: "https://bypass-ai.pages.dev",
    siteName: "BypassAI.online",
  },
  twitter: {
    card: "summary",
    title: "Professional AI Text Humanizer — BypassAI.online",
    description:
      "Instantly humanize AI text to sound naturally written. Free AI score verification. No signup required.",
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
      <body>{children}</body>
    </html>
  );
}