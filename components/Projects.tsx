export default function Projects() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="head-row">
          <div>
            <span className="eyebrow reveal">
              <span className="dot"></span>Our Work
            </span>
            <h2 className="reveal" style={{ marginTop: "18px" }}>
              Some Of Our
              <br />
              Recent <span className="grad-text">Projects</span>
            </h2>
          </div>
          <a className="btn btn-light reveal" href="#contact">
            View All Projects <span className="ic">→</span>
          </a>
        </div>

        <div className="grid-3">
          <article className="proj reveal">
            <span className="tag">FinDash</span>
            <div className="proj-img">
              <img
                alt="Finance dashboard interface"
                height={768}
                loading="lazy"
                src="/images/proj-fin.jpg"
                width={1024}
              />
            </div>
            <div className="proj-foot">
              <div>
                <h4>FinDash</h4>
                <span>Finance Dashboard</span>
              </div>
              <span className="circ">→</span>
            </div>
          </article>

          <article className="proj reveal">
            <span className="tag">EduFlow</span>
            <div className="proj-img">
              <img
                alt="Learning platform interface"
                height={768}
                loading="lazy"
                src="/images/proj-edu.jpg"
                width={1024}
              />
            </div>
            <div className="proj-foot">
              <div>
                <h4>EduFlow</h4>
                <span>Learning Platform</span>
              </div>
              <span className="circ">→</span>
            </div>
          </article>

          <article className="proj reveal">
            <span className="tag">Shoply</span>
            <div className="proj-img">
              <img
                alt="E-commerce mobile app"
                height={768}
                loading="lazy"
                src="/images/proj-shop.jpg"
                width={1024}
              />
            </div>
            <div className="proj-foot">
              <div>
                <h4>Shoply</h4>
                <span>E-Commerce App</span>
              </div>
              <span className="circ">→</span>
            </div>
          </article>
        </div>

        <div className="dots">
          <i></i>
          <i></i>
          <i className="on"></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </section>
  );
}
