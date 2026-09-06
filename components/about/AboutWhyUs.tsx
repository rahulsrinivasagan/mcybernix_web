import styles from "./about.module.css";

export default function AboutWhyUs() {
  return (
    <section className={`${styles.section} ${styles.why}`} id="why">
      <div className={styles.container} data-about-section="why">
        <div className={styles.whyBox} data-about-why="box">
          <div className={styles.whyCopy}>
            <span className={styles.sectionLabel} data-about-why="item">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 12c4-7 10-8 18-6-1 8-6 13-13 12 3-2 6-5 8-9-4 3-7 5-10 6-1 1-2 1-3 1Z" />
              </svg>
              Why Choose Mcybernix
            </span>
            <h2 className={styles.sectionTitle} data-about-why="item">
              Your Vision.
              <br />
              Our Expertise.
              <br />
              Endless Possibilities.
            </h2>
            <p data-about-why="item">
              We bring together strategy, design, and technology to build
              digital experiences that create real business value. From
              startups to enterprises, we're the partner you can rely on.
            </p>
            <ul className={styles.checks}>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Experienced and passionate team
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Tailored solutions for your business
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Transparent communication
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                On-time delivery and support
              </li>
            </ul>
          </div>
          <div className={styles.whyImage} data-about-why="imgWrap">
            <img
              loading="lazy"
              src="/images/about/about-why.jpg"
              alt="Technology team collaborating in a modern workspace"
              data-about-why="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
