import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopProgress from "@/components/providers/top-progress";
import Navbar from "@/components/common/Navbar";
import Main from "../components/common/Main";
import { TanstackProvider } from "@/components/providers/tan-stack-provider";
import { BlurFade } from "@/components/layout/BlurFadeWrapper";
import { Analytics } from "@vercel/analytics/react";
import CommandPalette from "@/components/CommandPalette";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshuxyzz.vercel.app/"),
  title: {
    default: "himanshuxyzz | Developer Portfolio",
    template: "%s | himanshuxyzz",
  },
  description:
    "Engineer learning how to build and design scalable web applications with high performance and better user experience.",
  keywords: [
    "Himanshu",
    "himanshuxyzz",
    "Developer",
    "Portfolio",
    "Engineer",
    "React Native",
    "Next.js",
  ],
  authors: [{ name: "Himanshu" }],
  creator: "Himanshu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himanshuxyzz.vercel.app",
    title: "himanshuxyzz | Developer Portfolio",
    description:
      "Engineer learning how to build and design scalable web applications.",
    siteName: "himanshuxyzz",
    images: [
      {
        url: "https://himanshuxyzz.vercel.app/feature-preppy.webp",
        width: 1200,
        height: 630,
        alt: "himanshuxyzz portfolio",
      },
      {
        url: "https://himanshuxyzz.vercel.app/avatar.webp",
        width: 800,
        height: 800,
        alt: "himanshuxyzz avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "himanshuxyzz | Developer Portfolio",
    description:
      "Engineer learning how to build and design scalable web applications.",
    images: ["https://himanshuxyzz.vercel.app/feature-preppy.webp"],
    creator: "@himanshu_toppo",
    site: "@himanshu_toppo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#16191d",
  appleWebApp: {
    title: "himanshuxyzz",
    statusBarStyle: "default",
  },
};
const BLUR_FADE_DELAY = 0.05;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased scroll-smooth `}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
            storageKey="theme"
          >
            <TopProgress>
              <main className="min-h-dvh">
                <Navbar />
                <Main>
                  <BlurFade delay={BLUR_FADE_DELAY}>{children}</BlurFade>
                </Main>
              </main>
              <CommandPalette />
            </TopProgress>
          </ThemeProvider>
        </TanstackProvider>
        <Analytics />
      </body>
    </html>
  );
}
