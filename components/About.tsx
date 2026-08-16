"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Technologies" },
  { value: null, display: "∞", label: "Ideas" },
  { value: null, display: "24/7", label: "Innovation" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <SectionHeading eyebrow="About the Studio" title="We build what's next." />

          <ScrollReveal delay={0.15} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-ink-muted">
              LUMINOCORE is a creative technology studio founded by{" "}
              <span className="text-ink">Gokulakrishnan</span>. We combine
              design, development, creativity, and emerging technologies to
              create digital experiences that feel ahead of their time.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.2 + i * 0.08}>
                <div className="flex flex-col gap-1 border-l border-line pl-4">
                  <span className="font-display text-3xl font-medium text-lime sm:text-4xl">
                    {stat.value !== null ? (
                      <Counter value={stat.value} suffix={stat.suffix ?? ""} />
                    ) : (
                      stat.display
                    )}
                  </span>
                  <span className="eyebrow text-ink-faint">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* animated core visual */}
        <ScrollReveal delay={0.2} className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-radial-fade opacity-70 blur-2xl" />
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-lime/20"
                style={{
                  inset: `${ring * 14}%`,
                }}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 22 + ring * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_16px_4px_rgba(198,255,61,0.6)]" />
              </motion.div>
            ))}
            <div className="absolute inset-[36%] flex items-center justify-center rounded-full border border-cyan/30 bg-panel/60 backdrop-blur-sm">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-cyan">
                Core
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
