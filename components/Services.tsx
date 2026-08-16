"use client";

import { Code2, Palette, Box, Cpu, Terminal, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const SERVICES = [
  {
    index: "01",
    icon: Code2,
    title: "Web Development",
    description: "Modern, fast, responsive and immersive websites.",
  },
  {
    index: "02",
    icon: Palette,
    title: "UI/UX Design",
    description: "User-focused interfaces designed for modern digital products.",
  },
  {
    index: "03",
    icon: Box,
    title: "3D & Interactive Experiences",
    description: "WebGL, Three.js and interactive 3D experiences.",
  },
  {
    index: "04",
    icon: Cpu,
    title: "AI & Automation",
    description: "AI-powered tools, intelligent workflows and automation.",
  },
  {
    index: "05",
    icon: Terminal,
    title: "Software Development",
    description: "Custom applications and technology solutions.",
  },
  {
    index: "06",
    icon: Sparkles,
    title: "Creative Technology",
    description:
      "Experimental digital experiences combining technology and creativity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What We Create" title="Capabilities" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.06 * i}>
              <TiltCard className="h-full p-8">
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-ink-faint">
                      {service.index}
                    </span>
                    <service.icon
                      className="h-6 w-6 text-lime transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-faint">
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
