export function AIScorePreview() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">See It In Action</h2>
        <p className="section-sub">Real before / after scores from public AI detectors.</p>
        <div className="ai-score-preview score-demo" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24 }}>
          <div className="score-before score-card" style={{ padding: 24, background: "var(--color-bg-alt)", borderRadius: "var(--radius-md)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span className="score-label" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-muted)", fontSize: ".85rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Before</span>
              <span className="score-number" style={{ fontFamily: "var(--font-serif)", color: "var(--color-danger)", fontSize: "1.6rem", fontWeight: 700 }}>87%</span>
            </div>
            <div className="score-bar-bg" style={{ background: "var(--color-bg)", borderRadius: 4, height: 8, overflow: "hidden", marginBottom: 16 }}>
              <div className="score-bar-fill" style={{ width: "87%", height: "100%", background: "var(--color-danger)", borderRadius: 4 }} />
            </div>
            <p className="score-sample-text" style={{ color: "var(--color-text)", fontSize: ".92rem", lineHeight: 1.6, fontStyle: "italic" }}>
              "It is important to note that artificial intelligence has significantly impacted various industries. Furthermore, the implications are far-reaching and multifaceted."
            </p>
          </div>
          <div className="score-after score-card" style={{ padding: 24, background: "var(--color-bg-alt)", borderRadius: "var(--radius-md)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span className="score-label" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-muted)", fontSize: ".85rem", textTransform: "uppercase", letterSpacing: ".05em" }}>After BypassAI</span>
              <span className="score-number success" style={{ fontFamily: "var(--font-serif)", color: "var(--color-success)", fontSize: "1.6rem", fontWeight: 700 }}>12%</span>
            </div>
            <div className="score-bar-bg" style={{ background: "var(--color-bg)", borderRadius: 4, height: 8, overflow: "hidden", marginBottom: 16 }}>
              <div className="score-bar-fill" style={{ width: "12%", height: "100%", background: "var(--color-success)", borderRadius: 4 }} />
            </div>
            <p className="score-sample-text" style={{ color: "var(--color-text)", fontSize: ".92rem", lineHeight: 1.6 }}>
              "AI has reshaped nearly every industry it's touched. Some companies bet on automation early; others scrambled to catch up. Either way, the way we work has changed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}