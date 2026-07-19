const STEPS = [
  { n: "01", title: "Paste your text", body: "Drop in AI-generated content from any source — ChatGPT, Claude, Gemini, or your own draft." },
  { n: "02", title: "Pick a mode", body: "Standard for everyday writing, Academic for papers, or Creative for stories and marketing." },
  { n: "03", title: "Get humanized output", body: "We run your text through our multi-language rewriting pipeline and return natural-sounding prose — with an AI score report." },
];

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-sub">Three steps from AI-generated to human-quality writing.</p>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: 8, fontSize: "1.15rem" }}>{s.title}</h3>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: ".95rem" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}