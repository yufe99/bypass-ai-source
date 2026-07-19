import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Subscription Confirmed — Welcome to BypassAI Pro",
  robots: { index: false, follow: false },
};

export default function BillingSuccessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: 640, textAlign: "center", paddingTop: 48, paddingBottom: 48 }}>
            <div
              style={{
                width: 80,
                height: 80,
                margin: "0 auto 24px",
                background: "var(--color-success)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "2.5rem",
              }}
              aria-hidden="true"
            >
              ✓
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-primary)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                marginBottom: 16,
              }}
            >
              Subscription Confirmed
            </h1>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Welcome to BypassAI. Your subscription is now active and you have access to all the
              features of your plan. You can manage your subscription anytime from your account.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/#humanize"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Start Humanizing →
              </Link>
              <Link
                href="/"
                className="btn-outline-sm"
                style={{ textDecoration: "none" }}
              >
                Back to Home
              </Link>
            </div>
            <p
              style={{
                marginTop: 32,
                padding: 16,
                background: "var(--color-bg-alt)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-text-muted)",
                fontSize: ".9rem",
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: "var(--color-text)" }}>A receipt has been sent to your PayPal email.</strong>
              {" "}If you have any questions, reach out to us at support@bypass-ai.online.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}