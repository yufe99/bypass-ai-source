import Link from "next/link";

export function Header() {
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
          <Link href="/#humanize" className="nav-cta">Start Free</Link>
        </nav>
      </div>
    </header>
  );
}