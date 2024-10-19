import { Outfit } from "next/font/google";
import "@/styles/css/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/common/Navbar";
import Main from "../components/common/Main";
import TopProgress from "@/components/providers/top-progress";

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
          <TopProgress>
            <main>
              <Navbar />
              <Main>{children}</Main>
            </main>
          </TopProgress>
        </ThemeProvider>
      </body>
    </html>
  );
}
