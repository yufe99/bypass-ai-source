"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner if user hasn't consented yet
    const consented = document.cookie.includes("cookie_consent=true");
    if (!consented) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
    document.cookie = `cookie_consent=true; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#1a1f2e",
        color: "#f0f0f0",
        padding: "16px 24px",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.2)",
        fontSize: "0.875rem",
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 12,
        }}
      >
        <p style={{ flex: 1, minWidth: 260, margin: 0 }}>
          This site uses essential cookies for authentication and session management.
          We do not use tracking cookies.{" "}
          <Link href="/privacy/" style={{ color: "#5b9bff", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/privacy/#cookies" style={{ color: "#5b9bff", textDecoration: "underline" }}>
            Cookie Info
          </Link>
        </p>
        <button
          onClick={accept}
          style={{
            padding: "10px 24px",
            border: "none",
            borderRadius: 6,
            background: "#2d7d46",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontSize: "0.875rem",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}