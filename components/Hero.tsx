import Navbar from "./Navbar";

const TRUSTED_COMPANIES = [
  {
    name: "nextmove",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
      </svg>
    ),
  },
  {
    name: "visionary",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "PULSE",
    isPulse: true,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-6 4 3 5-8" />
      </svg>
    ),
  },
  {
    name: "Codelab",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    name: "InspireUI",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 12h6M12 9v6" />
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

      {/* Navigation Header */}
      <Navbar />

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
            Digital solutions for modern businesses
          </span>

          <h1 className="hero-title hero-el">
            Work <span className="hero-title-smarter">Smarter</span>
            <br />
            Together
          </h1>

          <p className="hero-subtitle hero-el">
            We build digital products, automate workflows, and create experiences
            that help startups and businesses grow faster.
          </p>

          <div className="hero-cta-group hero-el">
            <a href="#services" className="hero-btn-primary">
              Get Started
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
            <a href="#about" className="hero-btn-secondary">
              <span className="hero-play-icon" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              See How It Works
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="hero-cards-grid">
          <div className="hero-card hero-el">
            <span className="hero-card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
            </span>
            <div className="hero-card-body">
              <h3>01 / AI Powered</h3>
              <p>Intelligent automation for smarter operations.</p>
            </div>
          </div>

          <div className="hero-card hero-el">
            <span className="hero-card-icon" aria-hidden="true">
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
            </span>
            <div className="hero-card-body">
              <h3>02 / Collaborative</h3>
              <p>Real-time collaboration for modern teams.</p>
            </div>
          </div>

          <div className="hero-card hero-el">
            <span className="hero-card-icon" aria-hidden="true">
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
            </span>
            <div className="hero-card-body">
              <h3>03 / Scalable</h3>
              <p>Built to grow with your business.</p>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="hero-trusted hero-el">
          <p className="hero-trusted-label">Trusted by innovative companies</p>
          <div className="hero-marquee-shell">
            <div className="hero-marquee-track">
              <div className="hero-marquee-group">
                {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, index) => (
                  <span
                    key={`company-1-${index}`}
                    className={`hero-trusted-item ${company.isPulse ? "pulse-item" : ""}`}
                  >
                    {company.icon}
                    {company.name}
                  </span>
                ))}
              </div>
              <div className="hero-marquee-group" aria-hidden="true">
                {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, index) => (
                  <span
                    key={`company-2-${index}`}
                    className={`hero-trusted-item ${company.isPulse ? "pulse-item" : ""}`}
                  >
                    {company.icon}
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
