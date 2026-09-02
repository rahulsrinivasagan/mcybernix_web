import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-bg" id="heroBg">
        <img
          alt="Abstract blue and purple mountain landscape at dusk"
          height="1088"
          src="/images/hero.png"
          width="1920"
        />
      </div>
      <div className="hero-veil"></div>
      <div className="hero-inner">
        <Navbar />
        <div className="hero-content wrap">
          <span className="eyebrow hero-el">
            <span className="dot"></span>Digital Solutions For Modern Businesses
          </span>
          <h1 className="hero-el">
            Work <span className="grad-text">Smarter</span> Together
          </h1>
          <p className="sub hero-el">
            We build digital products, automate workflows, and create
            experiences that help startups and businesses grow faster.
          </p>
          <div className="hero-cta hero-el">
            <a className="btn btn-primary" href="#services">
              Get Started <span className="ic">→</span>
            </a>
            <a className="btn btn-ghost" href="#about">
              <span
                className="ic"
                style={{ background: "#fff", color: "var(--navy)" }}
              >
                ▶
              </span>{" "}
              See How It Works
            </a>
          </div>
          <div className="feat-cards">
            <div className="feat hero-el">
              <div className="fi">✦</div>
              <h3>AI Powered</h3>
              <p>Intelligent automation for smarter operations.</p>
            </div>
            <div className="feat hero-el">
              <div className="fi">◎</div>
              <h3>Collaborative</h3>
              <p>Real-time collaboration for modern teams.</p>
            </div>
            <div className="feat hero-el">
              <div className="fi">↗</div>
              <h3>Scalable</h3>
              <p>Built to grow with your business.</p>
            </div>
          </div>
        </div>

        <div className="trusted">
          <div className="tl hero-el">Trusted by innovative companies</div>
          <div className="marquee-shell hero-el">
            <div className="marquee-track">
              <div className="logos">
                <div>◈ nextmove</div>
                <div>◍ visionary</div>
                <div>⌁ PULSE</div>
                <div>◇ Codelab</div>
                <div>❖ inspireUI</div>
                <div>▲ ApexLab</div>
                <div>⬡ CloudFlow</div>
                <div>✦ Vertex</div>
              </div>
              <div className="logos" aria-hidden="true">
                <div>◈ nextmove</div>
                <div>◍ visionary</div>
                <div>⌁ PULSE</div>
                <div>◇ Codelab</div>
                <div>❖ inspireUI</div>
                <div>▲ ApexLab</div>
                <div>⬡ CloudFlow</div>
                <div>✦ Vertex</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
