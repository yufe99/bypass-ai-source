import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Bodyscore rewrites AI-generated text into naturally human-sounding prose in three steps — paste, pick a mode, get humanized output.",
};

export default function HowItWorksPage() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16, fontFamily: "var(--font-serif)" }}>
        How Bodyscore Works
      </h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", marginBottom: 40 }}>
        A specialized rewriting engine that turns AI-generated text into prose that reads naturally — without
        changing your meaning or losing your citations.
      </p>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>The Problem</h2>
      <p>
        AI-generated text often has tell-tale patterns: predictable sentence lengths, recycled vocabulary, and
        the same tired transitions ("Furthermore," "Additionally," "In conclusion"). Most AI detectors are
        trained to spot these patterns. If your text looks AI-generated, it may be flagged by your professor,
        editor, or platform — even if your ideas are entirely your own.
      </p>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>The Solution</h2>
      <p>
        Bodyscore uses a proprietary multi-pass rewriting pipeline that injects natural variation into your
        text — varied sentence rhythm, surprising word choices, and the kinds of small imperfections that
        make human writing feel human. Citations, technical terms, and reference markers are protected by
        a guardrail layer and pass through byte-for-byte unchanged.
      </p>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>Three Steps</h2>

      <h3 style={{ marginTop: 32, marginBottom: 8 }}>1. Paste your text</h3>
      <p>
        Drop in content from ChatGPT, Claude, Gemini, or your own draft. Free tier supports up to 500 words;
        Pro and Academic tiers handle longer documents.
      </p>

      <h3 style={{ marginTop: 32, marginBottom: 8 }}>2. Pick a mode</h3>
      <p>
        <strong>Standard</strong> for everyday writing — emails, blog posts, marketing copy.
        <br />
        <strong>Academic</strong> for research papers — citations and references stay intact while the
        surrounding prose is rewritten to clear AI detection.
        <br />
        <strong>Creative</strong> for stories and essays — maximum voice and rhythm variation.
      </p>

      <h3 style={{ marginTop: 32, marginBottom: 8 }}>3. Get humanized output</h3>
      <p>
        Each rewrite comes with an AI score report from a public AI detector (RoBERTa-based) so you can see
        exactly how your text scores before you submit it.
      </p>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>What gets preserved</h2>
      <ul>
        <li>Citation markers like <code>[12]</code> and <code>(Smith et al., 2023)</code></li>
        <li>Technical terms and abbreviations (PCSK9, LDL-C, ASCVD, etc.)</li>
        <li>Numbers, units, and equations</li>
        <li>Quoted material</li>
      </ul>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>How long does it take?</h2>
      <p>
        Most rewrites finish in 2–6 seconds. The Academic mode runs a deeper rewrite pass and may take up
        to 10 seconds for longer documents.
      </p>

      <h2 style={{ marginTop: 48, marginBottom: 12 }}>Do you store my text?</h2>
      <p>
        No. Your text is processed server-side and never stored beyond the lifetime of the request. We don't
        log, train on, or share your inputs.
      </p>

      <p style={{ marginTop: 48 }}>
        <a href="/#humanize" className="btn-accent" style={{ display: "inline-block", padding: "12px 24px", borderRadius: "var(--radius-sm)", textDecoration: "none", fontWeight: 600 }}>
          Try it free →
        </a>
      </p>
    </article>
  );
}