import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic — Humanize Research Papers with Confidence",
  description: "Academic mode with Guardrail system protects citations and technical terms. Multi-language rewriting pipeline designed for serious research writing.",
};

const GUARDRAIL_LAYERS = [
  { n: "01", title: "Term Protection", body: "References like [12], (Smith et al., 2023) and technical terms like PCSK9, LDL-C are replaced with safe placeholders before any rewriting occurs." },
  { n: "02", title: "Multi-language Rewrite", body: "Your text travels through four languages (EN → CN → JP → FI → EN), each hop stripping out AI patterns while preserving meaning." },
  { n: "03", title: "Term Restoration", body: "After rewriting, all protected terms are restored verbatim — nothing lost, nothing invented." },
  { n: "04", title: "Score Verification", body: "The final output is checked against a public AI detector. You see the score before you submit." },
];

export default function AcademicPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <h1 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: 16 }}>
              Humanize Research Papers —<br />Without Losing Your Citations
            </h1>
            <p style={{ color: "var(--color-text-muted)", maxWidth: 640, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
              Academic mode is built for researchers. Our Guardrail system protects every citation, every technical term, every formula — while the multi-language pipeline strips out AI patterns that detectors flag.
            </p>
            <div style={{ background: "#faf5eb", border: "2px solid var(--color-accent)", borderRadius: "var(--radius-md)", padding: 20, marginBottom: 48 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1.1rem" }}>🛡 Guardrail System</h3>
              <p style={{ color: "var(--color-text)", fontSize: ".95rem", lineHeight: 1.65, margin: 0 }}>
                Before any rewriting begins, citations and technical terms are extracted and locked. After the multi-language pipeline completes, they're restored byte-for-byte. Your references stay accurate — always.
              </p>
            </div>
            <h2 className="section-title">The Four-Layer Pipeline</h2>
            <p className="section-sub">Why Academic mode is different from standard paraphrasing tools.</p>
            <div className="steps-grid">
              {GUARDRAIL_LAYERS.map((s) => (
                <div className="step-card" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1.1rem" }}>{s.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: ".92rem" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">Academic Use Cases</h2>
            <p className="section-sub">Built for the realities of academic writing.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { title: "Research papers", body: "Drafts that read like you wrote them — not like a language model wrote them." },
                { title: "Literature reviews", body: "Summarize dozens of papers without losing citation accuracy." },
                { title: "Grant proposals", body: "Compelling prose that survives reviewer scrutiny." },
                { title: "Thesis chapters", body: "Long-form rewriting with consistent voice across 50+ pages." },
              ].map((u) => (
                <div key={u.title} style={{ padding: 24, background: "#fff", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1.05rem" }}>{u.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: ".9rem", lineHeight: 1.65, margin: 0 }}>{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div style={{ background: "var(--color-bg-alt)", padding: 24, borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--color-warning)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1rem" }}>⚠ Academic Disclaimer</h3>
              <p style={{ color: "var(--color-text)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>
                BypassAI is a writing assistance tool. It does not condone academic dishonesty. Users are responsible for ensuring their use complies with their institution's academic integrity policies. Always disclose AI assistance where required.
              </p>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}