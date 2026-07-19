"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  { q: "How does BypassAI actually work?", a: "We use a multi-language rewriting pipeline: your text goes through translation hops (e.g. EN → CN → JP → FI → EN for Academic mode), which strips out AI patterns while preserving meaning. Critical terms and citations are protected throughout." },
  { q: "Will my citations and technical terms be preserved?", a: "Yes. Academic mode uses our Guardrail system to lock in references like [12], (Smith et al., 2023) and technical terms like PCSK9, LDL-C. They're replaced with placeholders before rewriting and restored verbatim after." },
  { q: "Is the Free tier really free?", a: "Yes — 3 rewrites per day, up to 500 words each, no signup required. Output includes a watermark. For unlimited rewrites and longer text, upgrade to Pro or Academic." },
  { q: "Can I cancel anytime?", a: "Yes. All subscriptions are monthly and you can cancel from your account anytime. We don't lock you into annual contracts." },
  { q: "Do you store my text?", a: "No. Text is processed in real-time and discarded immediately after the humanized result is returned. We don't keep copies or train on your input." },
  { q: "What's your refund policy?", a: "30-day money-back guarantee. If you're not satisfied with a paid plan, email us within 30 days of your first charge for a full refund — no questions asked." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know before you start.</p>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} style={{ borderBottom: "1px solid var(--color-border)", background: isOpen ? "#fff" : "transparent", transition: "background .2s" }}>
                <button type="button" onClick={() => setOpenIdx(isOpen ? null : idx)} aria-expanded={isOpen} style={{ width: "100%", background: "transparent", border: "none", padding: "20px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, color: "var(--color-primary)", fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600 }}>
                  <span>{item.q}</span>
                  <span aria-hidden="true" style={{ display: "inline-block", width: 14, height: 14, borderRight: "2px solid var(--color-primary)", borderBottom: "2px solid var(--color-primary)", transform: isOpen ? "rotate(-45deg)" : "rotate(45deg)", transition: "transform .2s", flexShrink: 0 }} />
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 20, color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: ".95rem" }}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}