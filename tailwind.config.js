/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "link-bg": "var(--bg-link-fill)",
        "text-1": "var(--text-1)",
      },
      spacing: {
        feature: "var(--width)",
        content: "calc(var(--width)*0.84)",
        avatar: "var(--avatar)",
      },
      minHeight: {
        "half-avatar": "calc(var(--avatar)*0.5)",
      },
      fontSize: {
        "fluid--1": "var(--text-fluid-1)",
        "fluid--3": "var(--text-fluid-3)",
        "heading-fluid-1": "var(--text-heading-1)",
      },
      typography: {
        dark: {
          css: {
            p: {
              color: "#F1F3F5",
            },
            h2: {
              color: "#F1F3F5",
            },
            a: {
              color: "#de1d8d",
            },
            strong: {
              color: "#F1F3F5",
            },
          },
        },
        light: {
          css: {
            p: {
              color: "#030507",
            },
            h2: {
              color: "#030507",
            },
            a: {
              color: "#de1d8d",
            },
            strong: {
              color: "#030507",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: { typography: ["dark", "light"] },
  },

  plugins: [require("@tailwindcss/typography")],
};
