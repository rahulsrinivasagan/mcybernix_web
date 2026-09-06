import styles from "./about.module.css";

export default function AboutStats() {
  return (
    <section className={styles.container} id="about-stats">
      <div className={styles.stats} data-about-section="stats">
        <article className={styles.stat} data-about-stat-card="1">
          <span className={styles.statIcon} data-about-stat-icon="1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M7 17c-4-4-2-10 4-11 4-1 7-3 8-4 1 8-1 15-8 16" />
              <path d="M5 21c2-6 6-9 11-12" />
            </svg>
          </span>
          <div>
            <strong data-about-stat-num data-target="50" data-suffix="+">
              50+
            </strong>
            <b>Projects Completed</b>
            <p>Delivering digital solutions across industries.</p>
          </div>
        </article>

        <article className={styles.stat} data-about-stat-card="2">
          <span className={styles.statIcon} data-about-stat-icon="2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2" />
              <path d="M3 20v-2a6 6 0 0 1 12 0v2M15 14a5 5 0 0 1 6 5v1" />
            </svg>
          </span>
          <div>
            <strong data-about-stat-num data-target="30" data-suffix="+">
              30+
            </strong>
            <b>Happy Clients</b>
            <p>Trusted by startups and enterprises worldwide.</p>
          </div>
        </article>

        <article className={styles.stat} data-about-stat-card="3">
          <span className={styles.statIcon} data-about-stat-icon="3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6a5.5 5.5 0 0 0 1-8.8Z" />
            </svg>
          </span>
          <div>
            <strong data-about-stat-num data-target="95" data-suffix="%">
              95%
            </strong>
            <b>Client Satisfaction</b>
            <p>Focused on quality, reliability and long-term relationships.</p>
          </div>
        </article>

        <article className={styles.stat} data-about-stat-card="4">
          <span className={styles.statIcon} data-about-stat-icon="4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          <div>
            <strong data-about-stat-num data-target="5" data-suffix="+">
              5+
            </strong>
            <b>Years of Experience</b>
            <p>Building dependable technology for ambitious teams.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
