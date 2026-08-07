import { Navbar } from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";

import type { Metadata } from "next";

import {
  Inter,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://apex-omega-gilt.vercel.app"
  ),

  title: {
    default:
      "APEX • Formula One Analytics Platform",
    template: "%s | APEX",
  },

  description:
    "APEX is a premium Formula One analytics platform featuring live timing, race calendar, driver and constructor standings, circuit insights, weather intelligence, race analytics, and the latest F1 news.",

  keywords: [
    "Formula 1",
    "F1",
    "Formula One",
    "F1 Dashboard",
    "F1 Analytics",
    "F1 Statistics",
    "Race Calendar",
    "Driver Standings",
    "Constructor Standings",
    "Circuits",
    "Telemetry",
    "Motorsport",
  ],

  authors: [
    {
      name: "Raghav Swarnkar",
    },
  ],

  creator: "Raghav Swarnkar",

  publisher: "APEX",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "APEX • Formula One Analytics Platform",

    description:
      "Live Formula One analytics, driver standings, constructor standings, circuits, weather intelligence and race insights.",

    url: "https://apex-omega-gilt.vercel.app",

    siteName: "APEX",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APEX Formula One Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "APEX • Formula One Analytics Platform",

    description:
      "Premium Formula One dashboard with analytics, standings, telemetry and circuits.",

    images: [
      "/images/og-image.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${inter.variable} ${playfair.variable} ${mono.variable}`}
      >
        <Background />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}