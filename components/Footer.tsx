import { Instagram, Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-2xl font-medium uppercase tracking-tight text-ink">
              LUMINO<span className="text-lime">CORE</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-faint">
              Innovating digital experiences. Building the future.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink-faint">Founder</p>
            <p className="mt-1 font-display text-lg text-ink">Gokulakrishnan</p>
          </div>

          <div className="flex gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-all hover:border-lime/40 hover:text-lime"
              >
                <link.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-ink-faint md:flex-row md:items-center">
          <span>© 2026 LUMINOCORE. All rights reserved.</span>
          <span className="font-mono">Designed &amp; built for the future.</span>
        </div>
      </div>
    </footer>
  );
}
