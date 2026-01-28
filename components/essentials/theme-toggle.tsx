"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = async () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    // Check if View Transitions API is supported
    if (
      typeof document.startViewTransition !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Fallback: just change theme instantly
      setTheme(newTheme);
      return;
    }

    // Start the view transition - CSS handles the animation
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    // Wait for the transition to complete fully
    try {
      await transition.finished;
    } catch {
      // Transition was skipped
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      className="relative p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} theme`}
    >
      {resolvedTheme === "light" ? <Light /> : <Dark />}
    </button>
  );
};

const Dark = () => (
  <Image
    className="saturate-200"
    width={32}
    height={32}
    src={"/moon.svg"}
    alt="dark mode"
    priority
  />
);

const Light = () => (
  <Image
    className="saturate-200"
    width={32}
    height={32}
    src={"/sun.svg"}
    alt="light mode"
    priority
  />
);
