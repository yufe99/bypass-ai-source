import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "How to request a refund for your Bodyscore subscription.",
};

export default function RefundPolicyPage() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 24, fontFamily: "var(--font-serif)" }}>
        Refund Policy
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
        Last updated: July 2026
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>7-Day Money-Back Guarantee</h2>
      <p>
        If you're not satisfied with Bodyscore for any reason, you can request a full refund within{" "}
        <strong>7 days of your first charge</strong>. No questions asked. Email{" "}
        <a href="mailto:refunds@bodyscore.me">refunds@bodyscore.me</a> with your account email and we'll
        process the refund within 3–5 business days.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>After 7 Days</h2>
      <p>
        We don't offer refunds after the 7-day window for monthly subscriptions, but you can cancel at
        any time to prevent future charges. Your access continues until the end of the current billing
        period.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>How Cancellations Work</h2>
      <p>
        Cancel from your payment provider's dashboard:
      </p>
      <ul>
        <li>
          <strong>PayPal</strong>: Settings → Payments → Manage automatic payments → find Bodyscore →
          Cancel
        </li>
        <li>
          <strong>Creem</strong>: Customer Portal (link in your subscription confirmation email) →
          Cancel subscription
        </li>
      </ul>
      <p>
        Your access remains active until the end of the current billing period, then your subscription
        ends automatically.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Disputes</h2>
      <p>
        If you dispute a charge through your payment provider before contacting us, your account may be
        suspended pending resolution. We process disputes fairly — reach out first and we'll work
        something out.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
      <p>
        Refund requests: <a href="mailto:refunds@bodyscore.me">refunds@bodyscore.me</a>
        <br />
        General billing questions:{" "}
        <a href="mailto:billing@bodyscore.me">billing@bodyscore.me</a>
      </p>
    </article>
  );
}