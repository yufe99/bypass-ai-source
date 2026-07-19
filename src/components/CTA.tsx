export function CTA() {
  return (
    <section className="section" style={{ background: "var(--color-primary)", color: "#fff", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", marginBottom: 16 }}>Ready to write with confidence?</h2>
        <p style={{ color: "#a8c4b0", maxWidth: 540, margin: "0 auto 28px", fontSize: "1.05rem", lineHeight: 1.7 }}>Start free — no signup, no credit card. Upgrade only when you need more.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#humanize" className="btn-detector" style={{ textDecoration: "none", padding: "12px 28px" }}>Start Humanizing Free</a>
          <a href="/pricing" style={{ background: "transparent", color: "#fff", border: "2px solid #fff", borderRadius: "var(--radius-sm)", padding: "10px 26px", fontWeight: 600, fontSize: ".95rem", textDecoration: "none" }}>See Pricing</a>
        </div>
      </div>
    </section>
  );
}