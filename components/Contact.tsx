"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-radial-fade opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <ScrollReveal>
              <h2 className="font-display text-5xl font-medium uppercase leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Have an idea?
                <br />
                <span className="text-gradient-lime">Let&rsquo;s build it.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                Have a project, idea, or crazy concept? Let&rsquo;s turn it
                into something real.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href="#contact-form"
                className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-void transition-shadow hover:shadow-[0_0_40px_rgba(198,255,61,0.35)]"
              >
                Start a Project <span aria-hidden="true">→</span>
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@luminocore.studio"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-white/40"
              >
                Contact Gokulakrishnan <span aria-hidden="true">→</span>
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="mt-14 flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-all hover:border-lime/40 hover:text-lime"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass flex flex-col gap-5 rounded-3xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink-faint">
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="rounded-xl border border-line bg-void/60 px-4 py-3 text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-lime"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-faint">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="rounded-xl border border-line bg-void/60 px-4 py-3 text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-lime"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-ink-faint">
                Project
                <input
                  type="text"
                  name="project"
                  placeholder="What are we building?"
                  className="rounded-xl border border-line bg-void/60 px-4 py-3 text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-lime"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-ink-faint">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your idea..."
                  className="resize-none rounded-xl border border-line bg-void/60 px-4 py-3 text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-lime"
                />
              </label>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="mt-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-void transition-shadow hover:shadow-[0_0_40px_rgba(198,255,61,0.35)]"
              >
                {status === "sent" ? "Message Sent ✓" : "Send Message"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
