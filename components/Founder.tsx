"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Founder() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <ScrollReveal className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2rem] border border-line bg-panel/60" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-cyan/10" />
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.06]" />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-lime/15"
                style={{
                  width: `${60 - i * 12}%`,
                  height: `${60 - i * 12}%`,
                  left: `${20 + i * 6}%`,
                  top: `${20 + i * 6}%`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 30 + i * 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8">
              <span className="font-display text-6xl font-medium text-ink/10">
                GK
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-line bg-void/90 px-4 py-3 backdrop-blur">
            <p className="eyebrow leading-tight text-lime">
              LUMINOCORE
              <br />
              <span className="text-ink-faint">Founder</span>
            </p>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <span className="eyebrow flex items-center gap-3 text-lime">
              <span className="h-px w-8 bg-lime" />
              The Person Behind It
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Gokulakrishnan
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan">
              Founder · Developer · Creator
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              I&rsquo;m Gokulakrishnan, a developer and creative technologist
              passionate about building digital experiences, experimenting
              with emerging technologies, and turning ambitious ideas into
              reality.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
