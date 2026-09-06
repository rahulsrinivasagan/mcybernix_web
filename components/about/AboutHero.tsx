import styles from "./about.module.css";

export default function AboutHero() {
  return (
    <section className={styles.container} id="about-hero">
      <div className={styles.hero} data-about-hero="container">
        <div className={styles.heroImgWrap} data-about-hero="imgWrap">
          <img
            src="/images/about/about-hero.jpg"
            alt="Software developers collaborating in a modern office"
            className={styles.heroImg}
            data-about-hero="img"
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.sectionLabel} data-about-hero="label">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12c4-7 10-8 18-6-1 8-6 13-13 12 3-2 6-5 8-9-4 3-7 5-10 6-1 1-2 1-3 1Z" />
            </svg>
            About Us
          </span>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingLine}>
              <span className={styles.heroHeadingInner} data-about-hero="line">
                Building Digital
              </span>
            </span>
            <span className={styles.heroHeadingLine}>
              <span className={styles.heroHeadingInner} data-about-hero="line">
                Experiences That
              </span>
            </span>
            <span className={styles.heroHeadingLine}>
              <span className={styles.heroHeadingInner} data-about-hero="line">
                Move Businesses
              </span>
            </span>
            <span className={styles.heroHeadingLine}>
              <span className={styles.heroHeadingInner} data-about-hero="line">
                Forward.
              </span>
            </span>
          </h1>
          <p data-about-hero="paragraph">
            At Mcybernix Solutions, we combine creativity, technology, and
            strategy to build digital products that help startups and
            businesses grow, scale, and lead in their industries.
          </p>
          <div data-about-hero="cta">
            <a className={styles.btn} href="#contact">
              Get in touch <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
