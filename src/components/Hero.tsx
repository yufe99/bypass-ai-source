import { AIDetector } from "./AIDetector";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Professional AI Text Humanizer —<br />Write with Confidence</h1>
          <p>Instantly humanize AI text to sound naturally written. Includes free AI score verification — so you know exactly how your text will perform before you submit.</p>
          <div className="hero-actions">
            <a href="#humanize" className="btn-primary">Start Humanizing Free →</a>
            <a href="/pricing" className="btn-outline-sm">See Pricing</a>
          </div>
        </div>
        <div>
          <AIDetector />
        </div>
      </div>
    </section>
  );
}