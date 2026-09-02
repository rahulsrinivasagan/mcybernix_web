export default function CTA() {
  return (
    <section id="contact" style={{ padding: "20px 0 90px" }}>
      <div className="wrap">
        <div className="cta reveal">
          <span className="glow g1"></span>
          <span className="glow g2"></span>
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              Ready to build something
              <br />
              amazing together?
            </h2>
            <p>Let's turn your ideas into powerful digital solutions.</p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@mcybernix.com">
            Let's Talk <span className="ic">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
