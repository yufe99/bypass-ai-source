"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/config";

interface AuthUser {
  sub: string;
  email: string;
  name: string;
  picture?: string;
}

export function Header() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Check for session token in URL (OAuth callback redirect)
    const params = new URLSearchParams(window.location.search);
    const sessionToken = params.get("session");
    if (sessionToken) {
      // Store session token as cookie on bodyscore.me domain
      const d = new Date();
      d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
      document.cookie = `session=${sessionToken}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
      // Clean URL without reload
      window.history.replaceState({}, "", window.location.pathname);
    }

    // Get session token from local cookie (set above or existing)
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
      return match?.[1] || "";
    };
    const localSession = getCookie("session");
    const query = localSession ? `?token=${encodeURIComponent(localSession)}` : "";

    fetch(`${API_URL}/auth/me${query}`, { credentials: "omit" })
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) setUser(data.user);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSignIn = () => {
    // Redirect to Worker OAuth endpoint
    window.location.href = `${API_URL}/auth/google/login`;
  };

  const handleSignOut = async () => {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
      redirect: "manual", // don't follow 302
    });
    setUser(null);
    setShowMenu(false);
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M8 1L2 5l6 4 6-4-6-4zM2 11l6 4 6-4M2 8l6 4 6-4" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          BypassAI
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/academic">Academic</Link>
          <Link href="/blog/bypass-gptzero">Blog</Link>

          {!loading && user ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px 6px 6px",
                  borderRadius: "999px",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-alt)",
                  color: "var(--color-text)",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
                aria-label="User menu"
                aria-expanded={showMenu}
              >
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt=""
                    style={{ width: 24, height: 24, borderRadius: "50%" }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      color: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </span>
                )}
                <span style={{ maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {user.name?.split(" ")[0] || "Account"}
                </span>
              </button>
              {showMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    minWidth: 200,
                    background: "white",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    padding: 8,
                    zIndex: 100,
                  }}
                >
                  <div style={{ padding: "8px 12px", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    {user.email}
                  </div>
                  <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", margin: "4px 0" }} />
                  <button
                    onClick={handleSignOut}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      border: "none",
                      background: "transparent",
                      color: "var(--color-danger, #c00)",
                      cursor: "pointer",
                      borderRadius: 4,
                      fontSize: "0.875rem",
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="nav-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}