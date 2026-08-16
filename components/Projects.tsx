"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    title: "LUMINOCORE OS",
    category: "Web Experience",
    year: "2026",
    description: "A futuristic web-based operating system experience.",
    gradient: "from-lime/25 via-void to-void",
  },
  {
    title: "Digital Experience",
    category: "Interactive Website",
    year: "2026",
    description: "An immersive interactive website concept.",
    gradient: "from-cyan/25 via-void to-void",
  },
  {
    title: "AI Innovation",
    category: "AI Solution",
    year: "2025",
    description: "An experimental AI-powered digital solution.",
    gradient: "from-lime/20 via-void to-void",
  },
  {
    title: "Creative 3D",
    category: "3D / WebGL",
    year: "2025",
    description: "A browser-based interactive 3D experience.",
    gradient: "from-cyan/20 via-void to-void",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.08 * i}>
              <a
                href="#contact"
                className="group relative block overflow-hidden rounded-3xl border border-line bg-panel/40"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.08] transition-transform duration-700 group-hover:scale-110" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                  >
                    <span className="font-display text-5xl font-medium uppercase tracking-tight text-ink/10 transition-all duration-500 group-hover:scale-105 group-hover:text-ink/[0.15] sm:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* hover distortion sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
                </div>

                <div className="flex items-center justify-between gap-4 p-7">
                  <div>
                    <div className="eyebrow mb-2 flex items-center gap-3 text-ink-faint">
                      <span>{project.category}</span>
                      <span className="h-1 w-1 rounded-full bg-ink-faint" />
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-faint">
                      {project.description}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-ink transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-void">
                    ↗
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
