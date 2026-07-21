"use client";

import { useState, useCallback } from "react";
import type { ModeId } from "./ModeSelector";
import { API_URL } from "@/lib/config";

const MAX_WORDS_FREE = 500;

type LimitInfo = {
  limit: number;
  resetAt: string;
};

export function HumanizeInput({ mode }: { mode: ModeId }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    result: string;
    aiScore: string;
    originalWordCount: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [limitInfo, setLimitInfo] = useState<LimitInfo | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const overLimit = wordCount > MAX_WORDS_FREE;

  const modeLabel =
    mode === "academic"
      ? "Academic Mode · Guardrail enabled"
      : mode === "creative"
      ? "Creative Mode · High burstiness"
      : "Standard Mode · Balanced rewrite";

  const handleHumanize = useCallback(async () => {
    if (!text.trim() || loading || overLimit) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // 60s timeout per attempt — Academic mode can take ~30s
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      const fetchStart = Date.now();
      const res = await fetch(`${API_URL}/humanize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
        signal: controller.signal,
        keepalive: true,
      });
      clearTimeout(timeoutId);
      const fetchMs = Date.now() - fetchStart;
      console.log(`[humanize] fetch took ${fetchMs}ms, status=${res.status}`);

      if (res.status === 429) {
        // Daily free limit reached — show upgrade modal
        const body = await res.json().catch(() => ({}));
        setLimitInfo({
          limit: body.limit ?? 3,
          resetAt: body.resetAt ?? new Date(Date.now() + 86400000).toISOString(),
        });
        setShowUpgradeModal(true);
        return;
      }
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      // Auto-retry once on network failure (browser-specific transient)
      if (!e?.name?.includes("Abort") && (e?.message?.includes("Failed to fetch") || e?.message?.includes("Load failed"))) {
        console.warn(`[humanize] first attempt failed, retrying in 1s...`);
        await new Promise((r) => setTimeout(r, 1000));
        try {
          const controller2 = new AbortController();
          const timeoutId2 = setTimeout(() => controller2.abort(), 60000);
          const res = await fetch(`${API_URL}/humanize`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, mode }),
            signal: controller2.signal,
            keepalive: true,
          });
          clearTimeout(timeoutId2);
          console.log(`[humanize] retry fetch status=${res.status}`);
          if (res.status === 429) {
            const body = await res.json().catch(() => ({}));
            setLimitInfo({
              limit: body.limit ?? 3,
              resetAt: body.resetAt ?? new Date(Date.now() + 86400000).toISOString(),
            });
            setShowUpgradeModal(true);
            return;
          }
          if (res.ok) {
            const data = await res.json();
            setResult(data);
            return;
          }
        } catch (retryErr: any) {
          // fall through to error display
          e = retryErr;
        }
      }

      const isTimeout = e?.name === "AbortError";
      const isNetwork = e?.message?.includes("Failed to fetch") || e?.message?.includes("Load failed");
      const detail = isTimeout
        ? "Request timed out after 60s. Please try again."
        : isNetwork
        ? "Network error. Please try again — if it persists, use a VPN."
        : e?.message || "Humanization failed";
      console.error(`[humanize] ${isTimeout ? "TIMEOUT" : isNetwork ? "NETWORK" : "ERROR"}:`, e);
      setError(detail);
    } finally {
      setLoading(false);
    }
  }, [text, mode, loading, overLimit]);

  const handleUpgrade = (plan: "pro" | "academic") => {
    setShowUpgradeModal(false);
    fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.approvalUrl) window.location.href = data.approvalUrl;
        else alert("Could not start subscription. Please try again.");
      })
      .catch(() => alert("Network error. Please try again."));
  };

  return (
    <section className="humanize-section section" id="humanize">
      <div className="humanize-inner container">
        <div className="humanize-header">
          <h2 className="section-title">Humanize Your AI Text</h2>
          <p className="section-sub">
            Paste your AI-generated text, and get humanized output with an AI score report.
          </p>
        </div>

        <div className="humanize-box">
          <div className="humanize-topbar">
            <span className="humanize-mode-label">{modeLabel}</span>
            <span className="humanize-char-count">
              {wordCount} / {MAX_WORDS_FREE} words
            </span>
          </div>

          <textarea
            className="humanize-textarea"
            placeholder="Paste your AI-generated text here (up to 500 words for free tier)…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          />

          <div className="humanize-actions">
            <span className="humanize-file-hint">
              Tip: for files longer than 500 words, upgrade to Pro.
            </span>
            <button
              type="button"
              className="btn-humanize"
              onClick={handleHumanize}
              disabled={!text.trim() || loading || overLimit}
            >
              {loading ? "Humanizing…" : "Humanize →"}
            </button>
          </div>

          {overLimit && (
            <p
              className="humanize-limit"
              style={{
                color: "var(--color-danger)",
                fontSize: ".85rem",
                marginTop: 8,
              }}
            >
              Free tier supports up to {MAX_WORDS_FREE} words. Upgrade to Pro for longer text.
            </p>
          )}

          {error && (
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: "#fdf2f2",
                border: "1px solid var(--color-danger)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-danger)",
                fontSize: ".9rem",
              }}
            >
              {error}
            </div>
          )}

          {result && (
            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-primary)",
                    fontSize: "1.1rem",
                  }}
                >
                  Humanized Result
                </h3>
                <span
                  style={{
                    fontSize: ".85rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  AI Score:{" "}
                  <strong style={{ color: "var(--color-success)" }}>
                    {result.aiScore}
                  </strong>{" "}
                  · {result.originalWordCount} words
                </span>
              </div>
              <div
                style={{
                  padding: 16,
                  background: "var(--color-bg-alt)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.7,
                  fontSize: ".95rem",
                }}
              >
                {result.result}
              </div>
            </div>
          )}
        </div>
      </div>

      {showUpgradeModal && (
        <UpgradeModal
          limitInfo={limitInfo}
          onClose={() => setShowUpgradeModal(false)}
          onUpgrade={handleUpgrade}
        />
      )}
    </section>
  );
}

function UpgradeModal({
  limitInfo,
  onClose,
  onUpgrade,
}: {
  limitInfo: LimitInfo | null;
  onClose: () => void;
  onUpgrade: (plan: "pro" | "academic") => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-modal-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26, 58, 42, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 24,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 12,
          maxWidth: 480,
          width: "100%",
          padding: 32,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          position: "relative",
          borderTop: "4px solid var(--color-accent)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "transparent",
            border: "none",
            fontSize: 24,
            color: "var(--color-text-muted)",
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
        >
          ×
        </button>

        <div
          style={{
            width: 64,
            height: 64,
            background: "var(--color-accent)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            color: "#fff",
            fontSize: 32,
          }}
        >
          ⚡
        </div>

        <h2
          id="upgrade-modal-title"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-primary)",
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          You've used today's free rewrites
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            textAlign: "center",
            fontSize: ".95rem",
            marginBottom: 24,
            lineHeight: 1.6,
          }}
        >
          The free tier allows {limitInfo?.limit ?? 3} humanization requests per day.
          Upgrade to continue with unlimited rewrites, all 3 modes, and no watermark.
        </p>

        <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
          <PlanButton
            name="Pro"
            price="$15"
            period="month"
            features={["Unlimited rewrites", "Up to 5,000 words/rewrite", "All 3 modes", "No watermark"]}
            onClick={() => onUpgrade("pro")}
            highlight
          />
          <PlanButton
            name="Academic"
            price="$19"
            period="month"
            features={["Everything in Pro", "Unlimited words", "Academic + Guardrail", "Batch processing"]}
            onClick={() => onUpgrade("academic")}
          />
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            color: "var(--color-text-muted)",
            padding: 12,
            fontSize: ".9rem",
            cursor: "pointer",
          }}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

function PlanButton({
  name,
  price,
  period,
  features,
  onClick,
  highlight,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: highlight ? "var(--color-bg-alt)" : "#fff",
        border: highlight ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
        borderRadius: 10,
        padding: 16,
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        transition: "transform .1s",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.1rem", fontWeight: 700 }}>
          {name}
          {highlight && (
            <span
              style={{
                marginLeft: 8,
                background: "var(--color-accent)",
                color: "#fff",
                fontSize: ".65rem",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 3,
                letterSpacing: ".05em",
              }}
            >
              POPULAR
            </span>
          )}
        </span>
        <span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary)" }}>
            {price}
          </span>
          <span style={{ color: "var(--color-text-muted)", fontSize: ".85rem" }}>/{period}</span>
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: ".82rem", color: "var(--color-text-muted)" }}>
        {features.map((f) => (
          <li key={f} style={{ padding: "2px 0" }}>
            ✓ {f}
          </li>
        ))}
      </ul>
    </button>
  );
}