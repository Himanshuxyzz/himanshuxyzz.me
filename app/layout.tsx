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
  title: "himanshuxyzz",
  description: "portfolio",
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
