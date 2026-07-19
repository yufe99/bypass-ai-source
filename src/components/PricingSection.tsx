const PLANS = [
  { id: "free", name: "Free", price: "$0", period: "/month", desc: "For trying out BypassAI and occasional rewrites", features: ["3 rewrites per day", "Up to 500 words per rewrite", "Standard mode only", "Basic AI Score (pass/fail)", "Output with watermark", "No account required"], cta: "Get Started Free", href: "#humanize", accent: false, ctaClass: "btn-outline-sm" },
  { id: "pro", name: "Pro", price: "$15", period: "/month", desc: "For content creators and power users", features: ["Unlimited rewrites", "Up to 5,000 words per rewrite", "All 3 modes (Standard / Academic / Creative)", "Detailed AI Score report", "No watermark on output", "Priority processing speed"], cta: "Upgrade to Pro — $15/mo", href: "/api/checkout/paypal?plan=pro", accent: true, ctaClass: "btn-accent" },
  { id: "academic", name: "Academic", price: "$19", period: "/month", desc: "For students and researchers with serious volume needs", features: ["Everything in Pro", "Unlimited words per rewrite", "Academic mode with Guardrail", "Batch processing (up to 10 files)", "Academic usage disclaimer", "Priority email support"], cta: "Get Academic Plan — $19/mo", href: "/api/checkout/paypal?plan=academic", accent: false, ctaClass: "btn-outline" },
];

export function PricingSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        {heading && (
          <>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-sub">Start free. Upgrade when you need more. Cancel anytime — no contracts.</p>
          </>
        )}
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div className={`pricing-card ${p.accent ? "pricing-popular" : ""}`} key={p.id} style={p.accent ? { borderColor: "var(--color-accent)", transform: "scale(1.02)", boxShadow: "var(--shadow-md)" } : {}}>
              {p.accent && <div className="pricing-badge" style={{ position: "absolute", top: -10, left: 20, background: "var(--color-accent)", color: "#fff", padding: "2px 10px", borderRadius: 3, fontSize: ".68rem", fontWeight: 700, letterSpacing: ".06em" }}>POPULAR</div>}
              <div className="pricing-header">
                <div className="pricing-name" style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.2rem", fontWeight: 700 }}>{p.name}</div>
                <div className="pricing-price" style={{ marginTop: 8 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 700, color: "var(--color-primary)" }}>{p.price}</span>
                  <span style={{ color: "var(--color-text-muted)", fontSize: ".95rem", marginLeft: 4 }}>{p.period}</span>
                </div>
                <p className="pricing-desc" style={{ color: "var(--color-text-muted)", fontSize: ".88rem", marginTop: 8 }}>{p.desc}</p>
              </div>
              <ul className="pricing-features" style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ padding: "6px 0", fontSize: ".9rem", color: "var(--color-text)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--color-success)", fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={p.href} className={`pricing-cta ${p.ctaClass}`} style={{ display: "block", textAlign: "center", padding: "12px 20px", borderRadius: "var(--radius-sm)", fontWeight: 600, textDecoration: "none" }}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}