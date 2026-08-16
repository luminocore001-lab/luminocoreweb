"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const TITLE = "LUMINOCORE";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 1.9 },
  },
};

const letter = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-void pt-32"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade animate-pulse-glow" />
      <ParticleField />

      {/* rotating geometric object */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-60 md:block lg:right-[-40px]"
      >
        <div className="relative h-full w-full animate-spin-slow [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-full border border-cyan/30" />
          <div className="absolute inset-8 rounded-full border border-lime/20" />
          <div className="absolute inset-16 rotate-45 rounded-full border border-white/10" />
          <div className="absolute inset-24 -rotate-45 rounded-full border border-lime/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-lime shadow-[0_0_30px_8px_rgba(198,255,61,0.5)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="eyebrow mb-6 flex items-center gap-3 text-ink-faint"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(198,255,61,0.7)]" />
          Creative Technology Studio
        </motion.div>

        <h1 className="font-display text-[15vw] font-medium uppercase leading-[0.92] tracking-tight text-ink sm:text-[10vw] lg:text-[7.2rem]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex overflow-hidden"
          >
            {TITLE.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl font-display text-xl text-ink-muted sm:text-2xl"
        >
          Innovating digital experiences.{" "}
          <span className="text-ink">Building the future.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-ink-faint sm:text-base"
        >
          We design and build immersive digital experiences, intelligent
          software, and future-ready technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-void transition-shadow hover:shadow-[0_0_40px_rgba(198,255,61,0.35)]"
          >
            Explore Our Work <span aria-hidden="true">→</span>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-white/40"
          >
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="eyebrow">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-white/10">
          <motion.div
            className="h-1/2 w-full bg-lime"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
