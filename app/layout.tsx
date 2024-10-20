import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopProgress from "@/components/providers/top-progress";
import Navbar from "@/components/common/Navbar";
import Main from "../components/common/Main";
import { TanstackProvider } from "@/components/providers/tan-stack-provider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "himanshuxyzz",
  description: "portfolio",
};

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
            disableTransitionOnChange
            storageKey="theme"
          >
            <TopProgress>
              <main>
                <Navbar />
                <Main>{children}</Main>
              </main>
            </TopProgress>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
