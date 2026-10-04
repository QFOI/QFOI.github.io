import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const title = "Siyu Lin — Research in Intelligent Systems";
const description =
  "Siyu Lin is a Computer Science and Applied Mathematics student at Peking University studying scientific reasoning, agent systems, reinforcement learning, and long-horizon tasks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qfoi.github.io"),
  title,
  description,
  icons: {
    icon: "/images/profile.jpg",
    shortcut: "/images/profile.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://qfoi.github.io/",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Siyu Lin research portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} notranslate`}>
        {children}
      </body>
    </html>
  );
}
