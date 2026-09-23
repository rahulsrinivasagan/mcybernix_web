const HERO_FEATURE_CARDS = [
  {
    tag: "01 / AI Automation",
    title: "Work 10x Faster",
    desc: "Save hundreds of operational hours through smart business process automation and AI tools.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    tag: "02 / Web Development",
    title: "Convert & Scale",
    desc: "Custom web applications engineered for seamless performance, security, and exponential growth.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    tag: "03 / App Development",
    title: "Mobile-First Reach",
    desc: "Engaging iOS and Android applications tailored to keep your audience connected anytime, anywhere.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative Arcs */}
      <div
        className="arc"
        style={{ width: 1600, height: 1600, top: -600, right: -400 }}
        aria-hidden="true"
      />
      <div
        className="arc"
        style={{ width: 1300, height: 1300, top: -450, right: -250 }}
        aria-hidden="true"
      />
      <div
        className="arc"
        style={{ width: 1400, height: 1400, bottom: -900, left: -500 }}
        aria-hidden="true"
      />
      <div
        className="arc"
        style={{ width: 1100, height: 1100, bottom: -700, left: -320 }}
        aria-hidden="true"
      />

      {/* Dotted Decorative Pattern */}
      <div className="dots" aria-hidden="true" />

      {/* Floating Team Avatars */}
      <div className="hero-avatars" aria-hidden="true">
        <div className="avatar avatar-1 float-med hero-avatar-el">
          <img
            src="/images/avatars/avatar-1.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
        <div className="avatar avatar-2 float-fast hero-avatar-el">
          <img
            src="/images/avatars/avatar-2.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
        <div className="avatar avatar-3 float-slow hero-avatar-el">
          <img
            src="/images/avatars/avatar-3.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
        <div className="avatar avatar-4 float-slow hero-avatar-el">
          <img
            src="/images/avatars/avatar-4.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
        <div className="avatar avatar-5 float-med hero-avatar-el">
          <img
            src="/images/avatars/avatar-5.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
        <div className="avatar avatar-6 float-fast hero-avatar-el">
          <img
            src="/images/avatars/avatar-6.jpg"
            alt="Team member"
            loading="eager"
          />
        </div>
      </div>

      {/* Hero Main Content */}
      <div className="hero-body">
        <div className="hero-content">
          <span className="hero-eyebrow hero-el">
            <span className="hero-eyebrow-dot" aria-hidden="true"></span>
            INTELLIGENT DIGITAL SOLUTIONS
          </span>

          <h1 className="hero-title hero-el">
            We Build, Automate, and Scale <span className="hero-title-smarter">Your Next Digital Advantage.</span>
          </h1>

          <p className="hero-subtitle hero-el">
            From custom web and app development to AI-driven workflow automation, MCybernix Solutions helps forward-thinking companies work smarter and grow faster.
          </p>

          <div className="hero-cta-group hero-el">
            <a href="/contact" className="hero-btn-primary">
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Feature Cards Continuous Marquee */}
        <div className="hero-cards-marquee-section hero-el">
          <div className="hero-cards-marquee-shell">
            <div className="hero-cards-marquee-track">
              <div className="hero-cards-marquee-group">
                {HERO_FEATURE_CARDS.map((card, index) => (
                  <div key={`card-1-${index}`} className="hero-card hero-marquee-card">
                    <span className="hero-card-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <div className="hero-card-body">
                      <span className="hero-card-tag" style={{ fontSize: "11px", fontWeight: 700, color: "#4f46e5", letterSpacing: "0.04em", display: "block", marginBottom: "2px" }}>
                        {card.tag}
                      </span>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-cards-marquee-group" aria-hidden="true">
                {HERO_FEATURE_CARDS.map((card, index) => (
                  <div key={`card-2-${index}`} className="hero-card hero-marquee-card">
                    <span className="hero-card-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <div className="hero-card-body">
                      <span className="hero-card-tag" style={{ fontSize: "11px", fontWeight: 700, color: "#4f46e5", letterSpacing: "0.04em", display: "block", marginBottom: "2px" }}>
                        {card.tag}
                      </span>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-cards-marquee-group" aria-hidden="true">
                {HERO_FEATURE_CARDS.map((card, index) => (
                  <div key={`card-3-${index}`} className="hero-card hero-marquee-card">
                    <span className="hero-card-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <div className="hero-card-body">
                      <span className="hero-card-tag" style={{ fontSize: "11px", fontWeight: 700, color: "#4f46e5", letterSpacing: "0.04em", display: "block", marginBottom: "2px" }}>
                        {card.tag}
                      </span>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
