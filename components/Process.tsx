"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const STAGES = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the problem and vision.",
  },
  {
    step: "02",
    title: "Design",
    description: "Create the visual direction and experience.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the product using modern technologies.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, optimize and polish every detail.",
  },
  {
    step: "05",
    title: "Launch",
    description: "Deliver a fast, scalable and memorable experience.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="From Idea → Reality" title="Our Process" />

        <div ref={ref} className="relative mt-20 pl-10 sm:pl-14">
          <div className="absolute left-0 top-0 h-full w-px bg-white/10 sm:left-1" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-lime to-cyan sm:left-1"
          />

          <div className="flex flex-col gap-16">
            {STAGES.map((stage, i) => (
              <ScrollReveal key={stage.step} delay={0.05 * i} className="relative">
                <span className="absolute -left-10 top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center sm:-left-14">
                  <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_14px_4px_rgba(198,255,61,0.5)]" />
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-mono text-sm text-ink-faint">
                    {stage.step}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-md text-ink-faint">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
