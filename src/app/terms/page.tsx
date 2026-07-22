import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Bodyscore.",
};

export default function TermsPage() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 24, fontFamily: "var(--font-serif)" }}>
        Terms of Service
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
        Last updated: July 2026
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Bodyscore ("the Service") at bodyscore.me, you agree to be bound by these
        Terms of Service. If you disagree with any part of these terms, you may not use the Service.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>2. Description of Service</h2>
      <p>
        Bodyscore is a writing tool that rewrites AI-generated text to sound more naturally human. The
        Service includes a free tier with limited usage and paid tiers (Pro, Academic) with unlimited
        usage and additional features.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>3. Acceptable Use</h2>
      <p>You agree NOT to use the Service to:</p>
      <ul>
        <li>
          Submit content that you do not have the right to use, or that infringes on others' intellectual
          property.
        </li>
        <li>
          Submit content containing illegal material, hate speech, or content that targets or harasses
          others.
        </li>
        <li>
          Submit malware, exploits, or content designed to attack or compromise the Service.
        </li>
        <li>
          Attempt to bypass rate limits or access controls (including by creating multiple free accounts).
        </li>
        <li>
          Resell or redistribute the Service without written permission.
        </li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>4. Educational Integrity</h2>
      <p>
        Bodyscore is a writing tool. It is intended to help you edit and refine drafts that represent your
        own ideas and work. You are responsible for how you use the output. We do not condone using the
        Service to fabricate work that you then submit as your own original creation in an academic,
        professional, or creative context where such fabrication would violate an honor code or terms of
        service.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>5. Subscriptions and Billing</h2>
      <p>
        Paid subscriptions are billed monthly via Creem or PayPal. By subscribing, you authorize recurring
        charges until you cancel. You can cancel at any time from your payment provider's dashboard — your
        access continues until the end of the current billing period.
      </p>
      <p>
        Prices are listed in USD and may change with 30 days' notice for existing subscribers.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>6. Refunds</h2>
      <p>
        See our{" "}
        <a href="/refund-policy">Refund Policy</a> for details. Short version: full refund within 7 days
        of first charge, no questions asked.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>7. Availability</h2>
      <p>
        We aim for high availability but do not guarantee uninterrupted access. We may perform maintenance,
        updates, or experience outages. Free-tier users may be deprioritized during high-traffic periods.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>8. Limitation of Liability</h2>
      <p>
        The Service is provided "as is" without warranties of any kind. We are not liable for any damages
        arising from your use of the Service, including but not limited to: loss of data, loss of revenue,
        academic or professional consequences from how you use the output, or service interruptions.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>9. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access at any time, with or without notice, for
        conduct that violates these Terms or is otherwise harmful to other users or the Service.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>10. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated by email (if you
        have an account) or by a notice on the website.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>11. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:legal@bodyscore.me">legal@bodyscore.me</a>.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 12 }}>12. DMCA Copyright Notice</h2>
      <p>
        If you believe content on Bodyscore infringes your copyright, send a DMCA notice to our
        designated agent:
      </p>
      <p>
        Email: <a href="mailto:dmca@bodyscore.me">dmca@bodyscore.me</a>
        <br />
        Subject: "DMCA Notice"
      </p>
      <p>
        Your notice must include: (1) identification of the copyrighted work claimed to be infringed;
        (2) identification of the infringing material and its location; (3) your name, address,
        phone number, and email; (4) a statement of good faith belief that use is not authorized;
        (5) a statement under penalty of perjury that the information is accurate; and (6) your
        physical or electronic signature.
      </p>
      <p>
        We will respond to valid DMCA notices and may remove or disable access to the allegedly
        infringing material.
      </p>
    </article>
  );
}