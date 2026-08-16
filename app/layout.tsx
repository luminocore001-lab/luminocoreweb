import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMINOCORE — Innovating Digital Experiences. Building the Future.",
  description:
    "LUMINOCORE is a creative technology studio founded by Gokulakrishnan, building modern websites, digital experiences, software, and AI-powered solutions.",
  keywords: [
    "LUMINOCORE",
    "Gokulakrishnan",
    "creative technology studio",
    "web development",
    "UI/UX design",
    "3D web experiences",
    "AI automation",
  ],
  openGraph: {
    title: "LUMINOCORE — Innovating Digital Experiences. Building the Future.",
    description:
      "A creative technology studio building modern websites, digital experiences, software, and AI-powered solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-void text-ink antialiased selection:bg-lime selection:text-void">
        <div className="grain-overlay" aria-hidden="true" />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
