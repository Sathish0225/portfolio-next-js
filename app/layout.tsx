import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathishkumar Ranganathan | Portfolio",
  description:
    "Software Developer passionate about building scalable web apps and intelligent systems.",
  metadataBase: new URL("https://mithran.dev"),

  // Basic metadata
  applicationName: "Sathishkumar Ranganathan Portfolio",
  authors: [{ name: "Sathishkumar Ranganathan" }],
  keywords: [
    "Full Stack Developer",
    "Web3",
    "Next.js",
    "React",
    "React Native",
    "Flutter",
  ],

  openGraph: {
    type: "website",
    url: "https://mithran.dev",
    title: "Sathishkumar Ranganathan | Full Stack Developer",
    description:
      "Software Developer passionate about building scalable web apps and intelligent systems.",
    siteName: "Sathishkumar Ranganathan",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sathishkumar Ranganathan - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://mithran.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
