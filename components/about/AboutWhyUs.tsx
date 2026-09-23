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
              WHY MCYBERNIX
            </span>
            <h2 className={styles.sectionTitle} data-about-why="item">
              Your Vision.
              <br />
              Our Engineering.
              <br />
              Scalable Results.
            </h2>
            <ul className={styles.checks}>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                End-to-End Capabilities (AI, Web &amp; Mobile)
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Agile, Deadline-Driven Execution
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Scalable Architecture Built for High Traffic
              </li>
              <li data-about-why="checkItem">
                <span className={styles.check} data-about-why="checkIcon" aria-hidden="true">
                  ✓
                </span>
                Dedicated Post-Launch Support &amp; Maintenance
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
