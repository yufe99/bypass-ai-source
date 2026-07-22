import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer" style={{ background: "var(--color-primary)", color: "#fff", padding: "48px 24px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>
              bodyscore.me
            </div>
            <p style={{ color: "#a8c4b0", fontSize: ".9rem", lineHeight: 1.6 }}>
              Professional AI text humanization. Write with confidence.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", marginBottom: 12, fontSize: "1rem" }}>Product</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Home</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/pricing" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Pricing</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/academic" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Academic</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/blog/bypass-gptzero" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", marginBottom: 12, fontSize: "1rem" }}>Legal</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: 8 }}><Link href="/privacy/" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/terms/" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Terms of Service</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/refund-policy/" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Refund Policy</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/cookie-policy/" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Cookie Policy</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/privacy/#ccpa" style={{ color: "#a8c4b0", fontSize: ".9rem" }}>Do Not Sell or Share My Personal Information</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #2d5a42", paddingTop: 24, color: "#a8c4b0", fontSize: ".85rem", textAlign: "center" }}>
          © {new Date().getFullYear()} bodyscore.me · All rights reserved.
        </div>
      </div>
    </footer>
  );
}