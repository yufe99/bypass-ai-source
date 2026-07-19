const FEATURES = [
  { icon: "✍️", title: "Natural sentence rhythm", body: "We mix short punchy sentences with longer flowing ones — the hallmark of human writing." },
  { icon: "🎯", title: "Vocabulary diversity", body: "Avoids AI clichés like 'delve', 'testament', 'comprehensive'. Uses varied, precise word choices." },
  { icon: "🔬", title: "Academic Guardrail", body: "Citations and technical terms like PCSK9, LDL-C, [12] are protected — never altered or lost." },
  { icon: "📊", title: "Free AI score check", body: "Every humanized text comes with a probability score from a public AI detector model." },
  { icon: "🌐", title: "Multi-mode pipelines", body: "Three specialized rewriting paths tuned for standard, academic, and creative writing." },
  { icon: "⚡", title: "No signup required", body: "Start humanizing in seconds. Your text is processed server-side and never stored." },
];

export function Features() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Why BypassAI Works</h2>
        <p className="section-sub">A specialized rewriting engine — not a synonym swap, not a paraphrase trick.</p>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1.05rem" }}>{f.title}</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: ".9rem", lineHeight: 1.65 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}