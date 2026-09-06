import styles from "./about.module.css";

export default function AboutStory() {
  return (
    <section className={styles.section} id="story">
      <div className={`${styles.container} ${styles.storyGrid}`} data-about-section="story">
        <div className={styles.storyImage} data-about-story="imgWrap">
          <img
            loading="lazy"
            src="/images/about/about-story.jpg"
            alt="Product designers planning a digital experience"
            data-about-story="img"
          />
        </div>
        <div className={styles.storyCopy} data-about-story="copy">
          <span className={styles.sectionLabel} data-about-story="item">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12c4-7 10-8 18-6-1 8-6 13-13 12 3-2 6-5 8-9-4 3-7 5-10 6-1 1-2 1-3 1Z" />
            </svg>
            About Mcybernix
          </span>
          <h2 className={styles.sectionTitle} data-about-story="item">
            Our Story
          </h2>
          <p data-about-story="item">
            Mcybernix Solutions was founded with a simple belief — technology
            should solve real problems and create meaningful impact.
          </p>
          <p data-about-story="item">
            We started as a small team of passionate developers and designers
            and have grown into a digital solutions company trusted by businesses
            across the globe.
          </p>
          <p data-about-story="item">
            Our journey is built on values of transparency, innovation,
            collaboration, and a commitment to delivering excellence.
          </p>
          <p data-about-story="item">
            We don't just build software, we build partnerships.
          </p>
          <div data-about-story="item">
            <a className={styles.btn} href="#values">
              Learn more about us <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
