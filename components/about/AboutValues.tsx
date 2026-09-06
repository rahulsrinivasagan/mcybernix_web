import styles from "./about.module.css";

export default function AboutValues() {
  return (
    <section className={`${styles.section} ${styles.values}`} id="values">
      <div className={styles.container} data-about-section="values">
        <div className={styles.centerHead} data-about-values="head">
          <span className={styles.sectionLabel}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12c4-7 10-8 18-6-1 8-6 13-13 12 3-2 6-5 8-9-4 3-7 5-10 6-1 1-2 1-3 1Z" />
            </svg>
            What Drives Us
          </span>
          <h2 className={styles.sectionTitle}>
            The Values That Guide Everything We Do
          </h2>
        </div>
        <div className={styles.cards}>
          <article className={styles.valueCard} data-about-val-card="1">
            <div className={styles.cardTop}>
              <span className={styles.miniIcon} data-about-val-icon="1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M9 18h6M10 22h4M8 14c-4-5 0-11 5-10 5 1 6 7 3 10-1 1-2 2-2 4h-4c0-2-1-3-2-4Z" />
                  <path d="M12 1v2M4 5l2 2M20 5l-2 2" />
                </svg>
              </span>
              <h3>Innovation</h3>
            </div>
            <p>
              We constantly explore new ideas and technologies to build
              future-ready solutions.
            </p>
          </article>

          <article className={styles.valueCard} data-about-val-card="2">
            <div className={styles.cardTop}>
              <span className={styles.miniIcon} data-about-val-icon="2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="17" cy="8" r="3" />
                  <path d="M2 20v-2c0-3 3-5 6-5s6 2 6 5v2M14 14c4-2 8 1 8 5v1" />
                </svg>
              </span>
              <h3>Collaboration</h3>
            </div>
            <p>
              We work closely with our clients as partners, not just service
              providers.
            </p>
          </article>

          <article className={styles.valueCard} data-about-val-card="3">
            <div className={styles.cardTop}>
              <span className={styles.miniIcon} data-about-val-icon="3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 20V10M10 20V6M16 20V3M3 4l5-2 5 3 8-4" />
                </svg>
              </span>
              <h3>Growth</h3>
            </div>
            <p>
              We are committed to helping businesses grow through scalable and
              sustainable solutions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
