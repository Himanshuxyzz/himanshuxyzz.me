import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopProgress from "@/components/providers/top-progress";
import Navbar from "@/components/common/Navbar";
import Main from "../components/common/Main";

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
      <body className={`${outfit.className} antialiased`}>
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
              {/* {children} */}
            </main>
          </TopProgress>
        </ThemeProvider>
      </body>
    </html>
  );
}
