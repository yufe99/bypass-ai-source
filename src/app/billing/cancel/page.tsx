import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Subscription Cancelled",
  robots: { index: false, follow: false },
};

export default function BillingCancelPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: 640, textAlign: "center", paddingTop: 48, paddingBottom: 48 }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-primary)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                marginBottom: 16,
              }}
            >
              Subscription Cancelled
            </h1>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              No worries — your free tier is still active, and you can subscribe anytime.
              We hope to see you back when you need more.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/pricing"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Try Again
              </Link>
              <Link
                href="/#humanize"
                className="btn-outline-sm"
                style={{ textDecoration: "none" }}
              >
                Continue with Free
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}