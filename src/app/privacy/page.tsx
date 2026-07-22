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
        Signed-in users receive an HTTP-only session cookie that expires after 30 days. We also use
        <strong> Cloudflare Web Analytics</strong> to collect anonymous usage data (page views,
        referrer, device type, geographic region) at the edge — no client-side cookies are set by
        this analytics tool. We do not use third-party tracking cookies or analytics that follow you
        across sites. See our{" "}
        <a href="/cookie-policy/">Cookie Policy</a> for full details.
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

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Analytics</h2>
      <p>
        We use <strong>Cloudflare Web Analytics</strong>, a privacy-first analytics service that
        collects anonymized page view counts and session duration data via a lightweight JavaScript
        beacon (<code>beacon.min.js</code>). No cookies are set by Cloudflare Web Analytics and no
        personal data is collected. The data is processed on Cloudflare's edge network and is governed
        by{" "}
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
          Cloudflare's Privacy Policy
        </a>
        . You can opt out by blocking <code>https://static.cloudflareinsights.com/beacon.min.js</code>
        in your browser or ad blocker.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>AI Detector</h2>
      <p>
        The free AI score check uses a public <strong>RoBERTa-based AI text detector</strong> model
        hosted on Hugging Face (Hello-SimpleAI/chatgpt-detector-roberta). When you run an AI score
        check, the input text is sent to Hugging Face's inference API for processing. We do not send
        your text to GPTZero, Originality.ai, or any proprietary detector. The model's use is governed
        by{" "}
        <a href="https://huggingface.co/terms" target="_blank" rel="noopener noreferrer">
          Hugging Face's Terms
        </a>
        .
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
          <strong>Cloudflare</strong> — for hosting, edge networking, and Cloudflare Web Analytics
          (anonymous usage data). Governed by{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            Cloudflare's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Hugging Face</strong> — for AI text detection model inference (RoBERTa). Governed by{" "}
          <a href="https://huggingface.co/terms" target="_blank" rel="noopener noreferrer">
            Hugging Face's Terms
          </a>
          .
        </li>
      </ul>

      <h2 id="ccpa" style={{ marginTop: 32, marginBottom: 12 }}>Your California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act (CCPA) grants you the
        following rights regarding your personal information:
      </p>
      <ul>
        <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific
        pieces of personal information we have collected about you.</li>
        <li><strong>Right to Delete:</strong> You may request deletion of personal information we have
        collected about you, subject to certain exceptions.</li>
        <li><strong>Right to Opt Out:</strong> You have the right to opt out of the sale or sharing of
        your personal information. We do not sell your personal information. If this policy changes,
        you will be notified and given the opportunity to opt out.</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for
        exercising any of your CCPA rights.</li>
      </ul>
      <p>
        To exercise your CCPA rights, email{" "}
        <a href="mailto:privacy@bodyscore.me">privacy@bodyscore.me</a> with "CCPA Request" in the
        subject line. We will verify your identity and respond within 45 days.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:privacy@bodyscore.me">privacy@bodyscore.me</a>.
      </p>
    </article>
  );
}