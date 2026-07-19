"use client";

import { useState, useCallback } from "react";
import type { ModeId } from "./ModeSelector";
import { API_URL } from "@/lib/config";

const MAX_WORDS_FREE = 500;

export function HumanizeInput({ mode }: { mode: ModeId }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ result: string; aiScore: string; originalWordCount: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const overLimit = wordCount > MAX_WORDS_FREE;

  const modeLabel =
    mode === "academic" ? "Academic Mode · Guardrail enabled" :
    mode === "creative" ? "Creative Mode · High burstiness" :
    "Standard Mode · EN ↔ CN";

  const handleHumanize = useCallback(async () => {
    if (!text.trim() || loading || overLimit) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/humanize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setError(e.message?.includes("Failed to fetch") ? "Could not reach the humanization server. Please try again." : e.message || "Humanization failed");
    } finally {
      setLoading(false);
    }
  }, [text, mode, loading, overLimit]);

  return (
    <section className="humanize-section section" id="humanize">
      <div className="humanize-inner container">
        <div className="humanize-header">
          <h2 className="section-title">Humanize Your AI Text</h2>
          <p className="section-sub">Paste your AI-generated text, and get humanized output with an AI score report.</p>
        </div>

        <div className="humanize-box">
          <div className="humanize-topbar">
            <span className="humanize-mode-label">{modeLabel}</span>
            <span className="humanize-char-count">{wordCount} / {MAX_WORDS_FREE} words</span>
          </div>

          <textarea
            className="humanize-textarea"
            placeholder="Paste your AI-generated text here (up to 500 words for free tier)…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          />

          <div className="humanize-actions">
            <span className="humanize-file-hint">Tip: for files longer than 500 words, upgrade to Pro.</span>
            <button type="button" className="btn-humanize" onClick={handleHumanize} disabled={!text.trim() || loading || overLimit}>
              {loading ? "Humanizing…" : "Humanize →"}
            </button>
          </div>

          {overLimit && (
            <p className="humanize-limit" style={{ color: "var(--color-danger)", fontSize: ".85rem", marginTop: 8 }}>
              Free tier supports up to {MAX_WORDS_FREE} words. Upgrade to Pro for longer text.
            </p>
          )}

          {error && (
            <div style={{ marginTop: 16, padding: 12, background: "#fdf2f2", border: "1px solid var(--color-danger)", borderRadius: "var(--radius-sm)", color: "var(--color-danger)", fontSize: ".9rem" }}>
              {error}
            </div>
          )}

          {result && (
            <div style={{ marginTop: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.1rem" }}>Humanized Result</h3>
                <span style={{ fontSize: ".85rem", color: "var(--color-text-muted)" }}>
                  AI Score: <strong style={{ color: "var(--color-success)" }}>{result.aiScore}</strong> · {result.originalWordCount} words
                </span>
              </div>
              <div style={{ padding: 16, background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", whiteSpace: "pre-wrap", lineHeight: 1.7, fontSize: ".95rem" }}>
                {result.result}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}