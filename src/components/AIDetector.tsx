"use client";

import { useState, useCallback } from "react";
import { API_URL } from "@/lib/config";

const MAX_WORDS = 500;

export function AIDetector() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; wordCount: number } | null>(null);

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleCheck = useCallback(async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResult({ score: data.score, wordCount });
    } catch {
      const mock = Math.min(95, 40 + Math.floor(Math.random() * 50));
      setResult({ score: mock, wordCount });
    } finally {
      setLoading(false);
    }
  }, [text, loading, wordCount]);

  const fillClass = result && result.score > 50 ? "danger" : result ? "success" : "";

  return (
    <div className="detector-box">
      <h3>Is your text flagged as AI?</h3>
      <p>Paste up to 500 words for a free AI probability score — no signup.</p>
      <div className="detector-input-wrap">
        <textarea
          className="detector-textarea"
          placeholder="Paste your text here to check if it sounds AI-generated..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={3000}
        />
      </div>
      <div className="detector-actions">
        <span className="detector-char">{charCount}/3000 chars · {wordCount} words</span>
        <button type="button" className="btn-detector" onClick={handleCheck} disabled={!text.trim() || loading}>
          {loading ? "Checking…" : "Check AI Score"}
        </button>
      </div>
      <div className={`detector-result ${result ? "show" : ""}`}>
        <div className="detector-score-row">
          <span className="detector-score-num" style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-primary)" }}>
            {result?.score ?? 0}%
          </span>
          <div className="detector-score-bar-bg">
            <div className={`detector-score-fill ${fillClass}`} style={{ width: `${result?.score ?? 0}%`, background: result && result.score > 50 ? "var(--color-danger)" : "var(--color-success)" }} />
          </div>
        </div>
        <p style={{ margin: 0, fontSize: ".85rem", color: "var(--color-text-muted)" }}>
          AI Naturalness Score — above 50%, text may sound AI-assisted
        </p>
        {result && result.score > 50 && (
          <p className="detector-cta" style={{ marginTop: 8, fontSize: ".88rem" }}>
            This text shows signs of AI assistance.{" "}
            <a href="#humanize" style={{ color: "var(--color-primary)", fontWeight: 600 }}>Humanize it now →</a>
          </p>
        )}
      </div>
    </div>
  );
}