import type { Config } from "tailwindcss"
import { Breadcrumb } from "./components/ui/breadcrumb"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
  center: true,
  padding: {
    DEFAULT: "1rem", // 16px en móviles
    sm: "1.5rem",    // 24px en tablets
    lg: "2rem",      // 32px en desktop
    xl: "3rem",      // 48px
  },
  screens: {
    "2xl": "1300px",
  },
},

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#e91e63",
        secondary: "#2c3e50",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        breadcrumb: {
          DEFAULT: "hsl(var(--breadcrumb))",
          foreground: "hsl(var(--breadcrumb-foreground))",
        },
        primary2: {
          DEFAULT: "hsl(var(--primary2))",
          foreground: "hsl(var(--primary2-foreground))",
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
