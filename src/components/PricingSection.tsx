"use client";

import { useState } from "react";
import { API_URL } from "@/lib/config";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "For trying out BypassAI and occasional rewrites",
    features: [
      "3 rewrites per day",
      "Up to 500 words per rewrite",
      "Standard mode only",
      "Basic AI Score (pass/fail)",
      "Output with watermark",
      "No account required",
    ],
    cta: "Get Started Free",
    href: "#humanize",
    accent: false,
    ctaClass: "btn-outline-sm",
    planKey: null,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$15",
    period: "/month",
    desc: "For content creators and power users",
    features: [
      "Unlimited rewrites",
      "Up to 5,000 words per rewrite",
      "All 3 modes (Standard / Academic / Creative)",
      "Detailed AI Score report",
      "No watermark on output",
      "Priority processing speed",
    ],
    cta: "Upgrade to Pro — $15/mo",
    href: "#subscribe-pro",
    accent: true,
    ctaClass: "btn-accent",
    planKey: "pro",
  },
  {
    id: "academic",
    name: "Academic",
    price: "$19",
    period: "/month",
    desc: "For students and researchers with serious volume needs",
    features: [
      "Everything in Pro",
      "Unlimited words per rewrite",
      "Academic mode with Guardrail",
      "Batch processing (up to 10 files)",
      "Academic usage disclaimer",
      "Priority email support",
    ],
    cta: "Get Academic Plan — $19/mo",
    href: "#subscribe-academic",
    accent: false,
    ctaClass: "btn-outline",
    planKey: "academic",
  },
];

export function PricingSection({ heading = true }: { heading?: boolean }) {
  const [provider, setProvider] = useState<"creem" | "paypal">("creem");

  const handleSubscribe = async (planKey: string, p?: "creem" | "paypal") => {
    const useProvider = p ?? provider;
    try {
      const endpoint = useProvider === "paypal" ? "/subscribe" : "/subscribe/creem";
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
        alert(`Subscription failed: ${err.error || res.status}`);
        return;
      }
      const data = await res.json();
      const url = data.checkoutUrl || data.approvalUrl;
      if (url) {
        window.location.href = url;
      }
    } catch (e: any) {
      alert(`Could not reach billing server: ${e.message || "unknown error"}`);
    }
  };

  // 选 toggle → 立即跳到对应支付方式（不再需要再点 Upgrade 按钮）
  const handleProviderSelect = (
    planKey: string | undefined,
    newProvider: "creem" | "paypal"
  ) => {
    setProvider(newProvider);
    if (planKey) {
      handleSubscribe(planKey, newProvider);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, plan: typeof PLANS[number]) => {
    if (!plan.planKey) return; // Free plan uses regular href
    e.preventDefault();
    handleSubscribe(plan.planKey);
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        {heading && (
          <>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-sub">
              Start free. Upgrade when you need more. Cancel anytime — no contracts.
            </p>
          </>
        )}
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div
              className={`pricing-card ${p.accent ? "pricing-popular" : ""}`}
              key={p.id}
              style={p.accent ? { borderColor: "var(--color-accent)", transform: "scale(1.02)", boxShadow: "var(--shadow-md)" } : {}}
            >
              {p.accent && (
                <div
                  className="pricing-badge"
                  style={{
                    position: "absolute",
                    top: -10,
                    left: 20,
                    background: "var(--color-accent)",
                    color: "#fff",
                    padding: "2px 10px",
                    borderRadius: 3,
                    fontSize: ".68rem",
                    fontWeight: 700,
                    letterSpacing: ".06em",
                  }}
                >
                  POPULAR
                </div>
              )}
              <div className="pricing-header">
                <div className="pricing-name" style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.2rem", fontWeight: 700 }}>
                  {p.name}
                </div>
                <div className="pricing-price" style={{ marginTop: 8 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 700, color: "var(--color-primary)" }}>
                    {p.price}
                  </span>
                  <span style={{ color: "var(--color-text-muted)", fontSize: ".95rem", marginLeft: 4 }}>{p.period}</span>
                </div>
                <p className="pricing-desc" style={{ color: "var(--color-text-muted)", fontSize: ".88rem", marginTop: 8 }}>
                  {p.desc}
                </p>
              </div>
              <ul className="pricing-features" style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ padding: "6px 0", fontSize: ".9rem", color: "var(--color-text)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--color-success)", fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Payment provider toggle — only for paid plans */}
              {p.planKey && (
                <div
                  style={{
                    display: "flex",
                    gap: 0,
                    marginBottom: 12,
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    background: "var(--color-bg-alt)",
                  }}
                  role="radiogroup"
                  aria-label="Payment provider"
                >
                  <button
                    type="button"
                    onClick={() => handleProviderSelect(p.planKey, "creem")}
                    aria-pressed={provider === "creem"}
                    style={{
                      flex: 1,
                      padding: "10px 8px",
                      background: provider === "creem" ? "var(--color-primary)" : "transparent",
                      color: provider === "creem" ? "#fff" : "var(--color-text-muted)",
                      border: "none",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background .15s",
                    }}
                  >
                    Creem
                  </button>
                  <button
                    type="button"
                    onClick={() => handleProviderSelect(p.planKey, "paypal")}
                    aria-pressed={provider === "paypal"}
                    style={{
                      flex: 1,
                      padding: "10px 8px",
                      background: provider === "paypal" ? "var(--color-primary)" : "transparent",
                      color: provider === "paypal" ? "#fff" : "var(--color-text-muted)",
                      border: "none",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background .15s",
                    }}
                  >
                    PayPal
                  </button>
                </div>
              )}

              <a
                href={p.href}
                className={`pricing-cta ${p.ctaClass}`}
                onClick={(e) => handleClick(e, p)}
                style={{ display: "block", textAlign: "center", padding: "12px 20px", borderRadius: "var(--radius-sm)", fontWeight: 600, textDecoration: "none", cursor: "pointer" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}