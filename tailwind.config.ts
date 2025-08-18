import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",   // primary
          600: "#2563eb",
          700: "#1d4ed8",   // header/nav
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          500: "#f59e0b",   // callouts/CTAs
          600: "#d97706",
        }
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 6%), 0 8px 24px rgb(0 0 0 / 4%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
