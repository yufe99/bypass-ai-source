import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bodyscore handles your data, text inputs, and account information.",
};

export default function PrivacyPage() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 24, fontFamily: "var(--font-serif)" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
        Last updated: July 2026
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>What we collect</h2>
      <p>
        <strong>For anonymous users (Free tier):</strong> We process your text on the server to generate
        the rewrite and AI score. We do not log the text content. We use Cloudflare's edge network, which
        records IP addresses and request metadata for abuse prevention and rate limiting, but we do not
        associate these with the text content you submitted.
      </p>
      <p>
        <strong>For signed-in users (Google OAuth):</strong> We store your Google profile (name, email,
        profile picture) so we can display your account state across visits. If you subscribe, we store
        your subscription status and payment provider's subscription ID (Creem or PayPal) so the app knows
        you're a Pro/Academic user.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>What we don't do</h2>
      <ul>
        <li>We don't train any AI model on your text.</li>
        <li>We don't sell or share your text or profile data with third parties.</li>
        <li>We don't read your text after the rewrite request completes.</li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Cookies and session</h2>
      <p>
        Signed-in users receive an HTTP-only session cookie that expires after 30 days. We don't use
        third-party tracking cookies or analytics that follow you across sites.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Payment data</h2>
      <p>
        We use Creem and PayPal to process payments. We never see or store your credit card number, CVV,
        or bank account. We only receive a subscription ID from the payment processor to track whether
        your account is active.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Data deletion</h2>
      <p>
        You can request deletion of your account at any time by emailing{" "}
        <a href="mailto:privacy@bodyscore.me">privacy@bodyscore.me</a>. We'll delete your profile and
        subscription records within 7 days.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Third-party services</h2>
      <ul>
        <li>
          <strong>Google OAuth</strong> — for sign-in. Governed by{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Creem</strong> — for payment processing. Governed by{" "}
          <a href="https://creem.io/privacy" target="_blank" rel="noopener noreferrer">
            Creem's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>PayPal</strong> — for payment processing. Governed by{" "}
          <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer">
            PayPal's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Cloudflare</strong> — for hosting and edge networking. Governed by{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            Cloudflare's Privacy Policy
          </a>
          .
        </li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:privacy@bodyscore.me">privacy@bodyscore.me</a>.
      </p>
    </article>
  );
}