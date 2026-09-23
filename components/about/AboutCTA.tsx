import styles from "./about.module.css";

export default function AboutCTA() {
  return (
    <section className={`${styles.container} ${styles.ctaWrap}`} id="contact">
      <div className={styles.cta} data-about-section="cta" data-about-cta="card">
        <div>
          <h2 data-about-cta="title">Ready to Automate &amp; Scale Your Business?</h2>
          <p data-about-cta="text">Let's collaborate and bring your ideas to life.</p>
        </div>
        <div data-about-cta="btn">
          <a className={styles.btn} href="mailto:mcybernixsolutions@gmail.com">
            Let's Talk <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
