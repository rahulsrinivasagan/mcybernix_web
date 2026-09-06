import styles from "./about.module.css";

export default function AboutProcess() {
  return (
    <section className={`${styles.section} ${styles.process}`} id="process">
      <div className={styles.container} data-about-section="process">
        <div className={styles.centerHead} data-about-process="head">
          <span className={styles.sectionLabel}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12c4-7 10-8 18-6-1 8-6 13-13 12 3-2 6-5 8-9-4 3-7 5-10 6-1 1-2 1-3 1Z" />
            </svg>
            How We Work
          </span>
          <h2 className={styles.sectionTitle}>Our Proven Process</h2>
        </div>
        <div className={styles.processGrid} data-about-process="grid">
          <article className={styles.step} data-about-step="1">
            <span className={styles.stepIcon} data-about-step-icon="1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="6" />
                <path d="m15 15 5 5" />
              </svg>
            </span>
            <span className={styles.stepNum} data-about-step-num="1">
              01
            </span>
            <h3 data-about-step-text="1">Discover</h3>
            <p data-about-step-text="1">
              We understand your goals, challenges and opportunities.
            </p>
          </article>

          <article className={styles.step} data-about-step="2">
            <span className={styles.stepIcon} data-about-step-icon="2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m4 20 4-1 11-11-3-3L5 16l-1 4ZM14 7l3 3" />
              </svg>
            </span>
            <span className={styles.stepNum} data-about-step-num="2">
              02
            </span>
            <h3 data-about-step-text="2">Design</h3>
            <p data-about-step-text="2">
              We craft user-centric designs and robust strategies.
            </p>
          </article>

          <article className={styles.step} data-about-step="3">
            <span className={styles.stepIcon} data-about-step-icon="3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18" />
              </svg>
            </span>
            <span className={styles.stepNum} data-about-step-num="3">
              03
            </span>
            <h3 data-about-step-text="3">Build</h3>
            <p data-about-step-text="3">
              We develop with clean code and cutting-edge technology.
            </p>
          </article>

          <article className={styles.step} data-about-step="4">
            <span className={styles.stepIcon} data-about-step-icon="4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 6c4-3 7-2 7-2s1 3-2 7l-4 4-6-6 5-3ZM9 9l-4 1-3 3 6 1M15 15l-1 6-3-3 1-4" />
                <path d="M5 17c-2 1-2 4-2 4s3 0 4-2" />
              </svg>
            </span>
            <span className={styles.stepNum} data-about-step-num="4">
              04
            </span>
            <h3 data-about-step-text="4">Launch</h3>
            <p data-about-step-text="4">
              We deliver, support and help you grow continuously.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
