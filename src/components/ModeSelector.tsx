"use client";

const MODES = [
  {
    id: "standard",
    name: "Standard",
    description: "Balanced rewriting for everyday content",
    features: ["Daily writing", "Emails & messages", "Blog posts"],
    isCore: false,
  },
  {
    id: "academic",
    name: "Academic",
    description: "Citations preserved · deep multi-pass rewrite",
    features: ["Research papers", "Citations protected", "Guardrail system"],
    isCore: true,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Maximum burstiness for stories & marketing",
    features: ["Stories", "Marketing copy", "High creativity"],
    isCore: false,
  },
] as const;

export type ModeId = (typeof MODES)[number]["id"];

export function ModeSelector({
  selected,
  onChange,
}: {
  selected: ModeId;
  onChange: (m: ModeId) => void;
}) {
  return (
    <section className="mode-section section section-alt">
      <div className="container">
        <h2 className="section-title">Choose Your Humanization Mode</h2>
        <p className="section-sub">
          Three specialized rewriting pipelines — each tuned for a different writing context.
        </p>
        <div className="mode-cards">
          {MODES.map((m) => (
            <button
              type="button"
              key={m.id}
              className={`mode-card ${selected === m.id ? "selected" : ""}`}
              onClick={() => onChange(m.id)}
              aria-pressed={selected === m.id}
            >
              {m.isCore && <div className="mode-card-accent" aria-hidden="true" />}
              <div className="mode-card-header">
                <span className="mode-card-name">{m.name}</span>
                {m.isCore && <span className="mode-badge">Core Feature</span>}
              </div>
              <p className="mode-card-desc">{m.description}</p>
              <ul className="mode-card-features">
                {m.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: ".82rem",
            color: "var(--color-text-muted)",
            textAlign: "center",
            maxWidth: 600,
            margin: "32px auto 0",
            fontStyle: "italic",
          }}
        >
          🔒 Each mode runs a proprietary multi-pass rewriting algorithm. The underlying pipeline
          is intentionally not disclosed to protect the service from abuse.
        </p>
      </div>
    </section>
  );
}