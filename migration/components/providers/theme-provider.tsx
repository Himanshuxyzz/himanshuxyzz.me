"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps as NextThemesProviderProps } from "next-themes/dist/types";

type ThemeProviderProps = {
  children: React.ReactNode;
} & Omit<NextThemesProviderProps, "children">;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
