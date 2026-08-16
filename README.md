# LUMINOCORE

Premium, cinematic website for **LUMINOCORE** — a creative technology studio founded by **Gokulakrishnan**.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started (Visual Studio Code)

1. Unzip this project and open the folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/                Next.js App Router (layout, page, global styles)
components/          All UI sections (Hero, About, Services, Projects, Founder, Process, TechStack, Contact, Footer, etc.)
lib/                 Shared utilities
tailwind.config.ts   Design tokens (colors, fonts, animations)
```

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google` — an internet connection is required the first time you build/run so Next.js can fetch them.
- The hero's particle field and cursor glow are canvas/DOM-based (no external 3D library needed), keeping the bundle lightweight while still feeling cinematic.
- Project and founder visuals use generated gradient/geometric placeholders rather than stock imagery — swap in real photography or renders in `components/Projects.tsx` and `components/Founder.tsx` when ready.
- Reduced-motion preferences are respected across animations.
