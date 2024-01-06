import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "himanshuxyzz",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <main className="h-full">
            <Navbar />
            <SmoothScroll>{children}</SmoothScroll>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
