import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="sec" id="about">
      <div className="wrap wwd">
        <div className="wwd-left">
          <span className="eyebrow reveal">
            <span className="dot"></span>What We Do
          </span>
          <h2 className="reveal">
            Powerful Solutions
            <br />
            To Accelerate
            <br />
            <span className="grad-text">Your Business</span>
          </h2>
          <div className="rule reveal"></div>
          <p className="lead reveal" style={{ maxWidth: "400px" }}>
            We build, automate, and scale digital products that help startups and
            businesses work smarter, grow faster, and stay ahead of the
            competition.
          </p>

          <div style={{ marginTop: "30px" }}>
            <div className="benefit reveal">
              <div className="bi">⚙</div>
              <div>
                <h4>Modern Technology</h4>
                <p>
                  We use cutting-edge technologies to build future-ready digital
                  solutions.
                </p>
              </div>
            </div>

            <div className="benefit reveal">
              <div className="bi">🛡</div>
              <div>
                <h4>Scalable &amp; Secure</h4>
                <p>
                  Our solutions are scalable, secure, and built to grow with
                  your business.
                </p>
              </div>
            </div>

            <div className="benefit reveal">
              <div className="bi">◎</div>
              <div>
                <h4>Client Focused</h4>
                <p>
                  We prioritize your goals and work as an extension of your team.
                </p>
              </div>
            </div>
          </div>

          <a
            className="btn btn-primary reveal"
            href="#services"
            style={{ marginTop: "30px" }}
          >
            Explore All Services <span className="ic">→</span>
          </a>
        </div>

        <div className="stack-outer" id="stackOuter">
          <ServiceCard
            id="svc1"
            num="01"
            title="Web Development"
            description="We build fast, responsive, and scalable websites that deliver exceptional user experiences and drive business growth."
            imageSrc="/images/svc-web.jpg"
            imageAlt="Floating browser window illustration"
          />
          <ServiceCard
            id="svc2"
            num="02"
            title="AI Automation"
            description="We automate workflows and integrate AI solutions to save time, reduce costs, and boost productivity."
            imageSrc="/images/svc-ai.jpg"
            imageAlt="Friendly AI robot illustration"
          />
          <ServiceCard
            id="svc3"
            num="03"
            title="App Development"
            description="We create powerful mobile applications that engage users, solve real problems, and accelerate your growth."
            imageSrc="/images/svc-app.jpg"
            imageAlt="Mobile app dashboard mockup"
          />
        </div>
      </div>
    </section>
  );
}
