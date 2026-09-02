export default function Insights() {
  return (
    <section className="sec" id="blog" style={{ paddingTop: "0" }}>
      <div className="wrap">
        <div className="head-row">
          <div>
            <span className="eyebrow reveal">
              <span className="dot"></span>Insights
            </span>
            <h2 className="reveal" style={{ marginTop: "18px" }}>
              Latest Articles
              <br />
              &amp; <span className="grad-text">Insights</span>
            </h2>
          </div>
          <a className="btn btn-light reveal" href="#blog">
            Explore All Articles <span className="ic">→</span>
          </a>
        </div>

        <div className="grid-3">
          <article className="post reveal">
            <div className="post-img">
              <span className="tag">Web Development</span>
              <img
                alt="Misty mountain lake at dusk"
                height={768}
                loading="lazy"
                src="/images/blog-1.jpg"
                width={1024}
              />
            </div>
            <div className="post-body">
              <h4>10 Best Practices for Building Scalable Web Applications</h4>
              <div className="meta">
                <span>May 12, 2025</span>
                <span>5 min read</span>
              </div>
            </div>
          </article>

          <article className="post reveal">
            <div className="post-img">
              <span className="tag">AI Automation</span>
              <img
                alt="Aurora over a mountain ridge"
                height={768}
                loading="lazy"
                src="/images/blog-2.jpg"
                width={1024}
              />
            </div>
            <div className="post-body">
              <h4>How AI Automation Can Transform Your Business</h4>
              <div className="meta">
                <span>May 5, 2025</span>
                <span>6 min read</span>
              </div>
            </div>
          </article>

          <article className="post reveal">
            <div className="post-img">
              <span className="tag">Productivity</span>
              <img
                alt="Soft sunset above the clouds"
                height={768}
                loading="lazy"
                src="/images/blog-3.jpg"
                width={1024}
              />
            </div>
            <div className="post-body">
              <h4>Top Tools That Boost Team Productivity in 2025</h4>
              <div className="meta">
                <span>Apr 28, 2025</span>
                <span>4 min read</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
