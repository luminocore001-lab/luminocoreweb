import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <ScrollReveal>
        <span className="eyebrow flex items-center gap-3 text-lime">
          <span className="h-px w-8 bg-lime" />
          {eyebrow}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </ScrollReveal>
    </div>
  );
}
