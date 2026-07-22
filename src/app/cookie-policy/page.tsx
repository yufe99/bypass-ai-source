import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Bodyscore uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 24, fontFamily: "var(--font-serif)" }}>
        Cookie Policy
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
        Last updated: July 2026
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device by your web browser. They help websites
        remember your preferences and authentication state.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Cookies We Use</h2>

      <h3 style={{ marginTop: 24, marginBottom: 8 }}>Essential / Session Cookies</h3>
      <p>
        <strong>session</strong> — stores your signed-in session token (only if you sign in with Google).
        Expires after 30 days.
      </p>
      <p>
        <strong>cookie_consent</strong> — records that you have accepted our cookie notice. Expires
        after 1 year.
      </p>

      <h3 style={{ marginTop: 24, marginBottom: 8 }}>Analytics</h3>
      <p>
        We use <strong>Cloudflare Web Analytics</strong>, a privacy-first analytics service that does
        not use cookies or collect personal data. It collects anonymized page view counts and session
        duration data via a lightweight JavaScript beacon (<code>beacon.min.js</code>). Cloudflare Web
        Analytics does not track you across sites. See{" "}
        <a href="https://www.cloudflare.com/web-analytics/" target="_blank" rel="noopener noreferrer">
          Cloudflare Web Analytics
        </a>{" "}
        and{" "}
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
          Cloudflare Privacy Policy
        </a>
        .
      </p>

      <h3 style={{ marginTop: 24, marginBottom: 8 }}>Third-Party Cookies</h3>
      <p>
        We do not use third-party advertising, tracking, or social media cookies. Payment processors
        (Creem, PayPal) and Google Sign-In may set their own cookies when you interact with their
        services — these are governed by their respective privacy policies.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Managing Cookies</h2>
      <p>
        Most browsers allow you to control cookies through their settings. Note that blocking essential
        cookies may prevent you from signing in. To opt out of Cloudflare Web Analytics, you can
        block the script at <code>https://static.cloudflareinsights.com/beacon.min.js</code> in your
        browser or ad blocker.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href="mailto:privacy@bodyscore.me">privacy@bodyscore.me</a>.
      </p>
    </article>
  );
}