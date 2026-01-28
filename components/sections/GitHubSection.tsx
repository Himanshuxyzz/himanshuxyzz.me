"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ThemeInput } from "react-activity-calendar";

// Custom theme with better visibility for both modes
// Using vibrant colors that work well on light and dark backgrounds
const customTheme: ThemeInput = {
  light: [
    "#ebedf0", // empty/level 0 - neutral gray (visible on light bg)
    "#9be9a8", // level 1 - light green
    "#40c463", // level 2 - medium green
    "#30a14e", // level 3 - darker green
    "#216e39", // level 4 - dark green (high contrast)
  ],
  dark: [
    "#161b22", // empty/level 0 - dark bg
    "#0e4429", // level 1
    "#006d32", // level 2
    "#26a641", // level 3
    "#39d353", // level 4 - bright green
  ],
};

export default function GitHubSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <section id="github" className="py-8">
        <h2 className="text-2xl font-bold mb-6">GitHub Contributions</h2>
        <div className="w-full h-32 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse" />
      </section>
    );
  }

  return (
    <section id="github" className="py-8">
      <h2 className="text-2xl font-bold mb-6">GitHub Contributions</h2>
      <div className="overflow-x-auto pb-2">
        <GitHubCalendar
          username="himanshuxyzz"
          theme={customTheme}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          style={{
            width: "100%",
          }}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        My open source contributions on{" "}
        <a
          href="https://github.com/himanshuxyzz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link-bg hover:underline"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
