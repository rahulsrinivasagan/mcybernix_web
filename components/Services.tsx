import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="sec" id="services" style={{ scrollMarginTop: "80px" }}>
      <div className="wrap wwd">
        <div className="wwd-left">
          <span className="eyebrow reveal">
            <span className="dot"></span>OUR EXPERTISE
          </span>
          <h2 className="reveal">
            Intelligent Solutions
            <br />
            To Supercharge
            <br />
            <span className="grad-text">Your Growth</span>
          </h2>
          <div className="rule reveal"></div>
          <p className="lead reveal" style={{ maxWidth: "400px" }}>
            From custom web applications to automated AI workflows, we deliver end-to-end technology solutions tailored to expand your business footprint.
          </p>

          <div className="wwd-benefits">
            <div className="benefit reveal">
              <div className="bi">⚙</div>
              <div>
                <h4>Future-Proof Engineering</h4>
                <p>
                  Built with modern standards to keep your software ahead of tech shifts.
                </p>
              </div>
            </div>

            <div className="benefit reveal">
              <div className="bi">🛡</div>
              <div>
                <h4>Reliable &amp; Scalable</h4>
                <p>
                  Systems crafted to handle growing traffic and business workload effortlessly.
                </p>
              </div>
            </div>

            <div className="benefit reveal">
              <div className="bi">◎</div>
              <div>
                <h4>Goal-Driven Execution</h4>
                <p>
                  Transparent communication and agile sprints aligned with your milestones.
                </p>
              </div>
            </div>
          </div>

          <a
            className="btn btn-primary reveal wwd-btn"
            href="/contact"
          >
            Explore All Services <span className="ic">→</span>
          </a>
        </div>

        <div className="stack-outer" id="stackOuter">
          <ServiceCard
            id="svc1"
            num="01"
            title="Web Development"
            description="Fast, responsive, and User Friendly web applications tailored to deliver flawless user experiences and drive conversion."
            imageSrc="/images/svc-web.jpg"
            imageAlt="Floating browser window illustration"
          />
          <ServiceCard
            id="svc2"
            num="02"
            title="AI & Workflow Automation"
            description="Custom AI integrations and automated pipelines that replace repetitive tasks, cut costs, and accelerate productivity."
            imageSrc="/images/svc-ai.jpg"
            imageAlt="Friendly AI robot illustration"
          />
          <ServiceCard
            id="svc3"
            num="03"
            title="Mobile App Development"
            description="Native and cross-platform mobile apps engineered for seamless UX, high engagement, and performance across iOS and Android."
            imageSrc="/images/svc-app.jpg"
            imageAlt="Mobile app dashboard mockup"
          />
        </div>
      </div>
    </section>
  );
}
