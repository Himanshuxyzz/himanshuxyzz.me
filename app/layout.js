import { Outfit } from "next/font/google";
import "@/styles/css/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/common/Navbar";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import Main from "../components/common/Main";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "himanshuxyzz",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <main>
            <Navbar />
            <SmoothScroll>
              <Main>
                <Suspense fallback={<Loading />}>
                  {children}
                  </Suspense>
                <Footer />
              </Main>
            </SmoothScroll>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
