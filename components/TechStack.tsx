"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Three.js",
  "Node.js",
  "Python",
  "AI",
  "WebGL",
  "GitHub",
];

const OFFSETS = [0, 14, -10, 8, -18, 6, -6, 16, -12, 4];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Powered By Technology"
          title="Our Toolkit"
          align="center"
        />
      </div>

      <div className="relative mt-16 flex flex-wrap items-center justify-center gap-4 px-6 md:mt-24 md:gap-6">
        {TECH.map((tech, i) => (
          <ScrollReveal key={tech} delay={0.04 * i}>
            <motion.div
              animate={{ y: [0, OFFSETS[i % OFFSETS.length], 0] }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className="card-border rounded-full bg-panel/50 px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-lime/40 hover:text-lime"
            >
              {tech}
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
