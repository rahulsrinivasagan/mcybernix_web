"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const val1Ref = useRef<HTMLSpanElement>(null);
  const val2Ref = useRef<HTMLSpanElement>(null);
  const val3Ref = useRef<HTMLSpanElement>(null);
  const val4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const statsEl = containerRef.current;
    if (!statsEl) return;

    const items = [
      { ref: val1Ref, target: 50, suffix: "+" },
      { ref: val2Ref, target: 30, suffix: "+" },
      { ref: val3Ref, target: 95, suffix: "%" },
      { ref: val4Ref, target: 5, suffix: "+" },
    ];

    const animateCounters = () => {
      items.forEach((item, index) => {
        if (!item.ref.current) return;
        const counter = { val: 0 };
        item.ref.current.textContent = `0${item.suffix}`;

        gsap.to(counter, {
          val: item.target,
          duration: 2.2,
          delay: index * 0.08,
          ease: "power2.out",
          onUpdate: () => {
            if (item.ref.current) {
              item.ref.current.textContent = `${Math.round(counter.val)}${item.suffix}`;
            }
          },
        });
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: statsEl,
      start: "top 78%",
      once: true,
      onEnter: () => animateCounters(),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section style={{ padding: "10px 0 20px" }}>
      <div className="wrap">
        <div className="stats reveal" ref={containerRef}>
          <div className="stat">
            <div className="sh">
              <span className="si">◳</span>
              <span className="sv" ref={val1Ref} data-count="50" data-suffix="+">
                0+
              </span>
            </div>
            <div className="sl">Projects Delivered</div>
          </div>

          <div className="stat">
            <div className="sh">
              <span className="si">☺</span>
              <span className="sv" ref={val2Ref} data-count="30" data-suffix="+">
                0+
              </span>
            </div>
            <div className="sl">Happy Clients</div>
          </div>

          <div className="stat">
            <div className="sh">
              <span className="si">★</span>
              <span className="sv" ref={val3Ref} data-count="95" data-suffix="%">
                0%
              </span>
            </div>
            <div className="sl">Client Satisfaction</div>
          </div>

          <div className="stat">
            <div className="sh">
              <span className="si">⌚</span>
              <span className="sv" ref={val4Ref} data-count="5" data-suffix="+">
                0+
              </span>
            </div>
            <div className="sl">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
