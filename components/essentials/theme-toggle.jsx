"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (selectedTheme) => {
    // it checks if theme is system then set theme to system else it is not system then it sets theme with the value which is passed in argument
    if (selectedTheme === "system") {
      setTheme("system");
    } else {
      setTheme(selectedTheme);
    }
  };

  return (
    <>
      <button
        onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Light /> : <Dark />}
      </button>
    </>
  );
};

const Dark = () => (
  <Image
    className="saturate-200"
    width={40}
    height={40}
    src={"/moon.svg"}
    alt="dark mode"
  />
);

const Light = () => (
  <Image
    className="saturate-200"
    width={40}
    height={40}
    src={"/sun.svg"}
    alt="light mode"
  />
);
