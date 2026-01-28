"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ThemeInput } from "react-activity-calendar";

// Custom theme with better visibility for both modes
const customTheme: ThemeInput = {
  light: [
    "#ebedf0", // empty/level 0
    "#9be9a8", // level 1
    "#40c463", // level 2
    "#30a14e", // level 3
    "#216e39", // level 4
  ],
  dark: [
    "#161b22", // empty/level 0
    "#0e4429", // level 1
    "#006d32", // level 2
    "#26a641", // level 3
    "#39d353", // level 4
  ],
};

export default function GitHubCalendarWidget() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-28 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse" />
    );
  }

  return (
    <div className="w-full max-w-full overflow-x-auto">
      <GitHubCalendar
        username="himanshuxyzz"
        theme={customTheme}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        blockSize={9}
        blockMargin={3}
        fontSize={11}
        style={{
          maxWidth: "100%",
        }}
        labels={{
          totalCount: "{{count}} contributions this year",
        }}
      />
    </div>
  );
}
