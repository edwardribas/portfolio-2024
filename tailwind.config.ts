import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: { scroll: "var(--removed-body-scroll-bar-size)" },

      gridTemplateRows: {
        'home': 'auto 300px',
      },

      gridTemplateColumns: {
        'desktop-portfolio': "1fr 1fr 1fr",
        'tablet-portfolio': "1fr 1fr",
        'mobile-portfolio': "1fr",
      },

      screens: {
        "xxsm": "380px",
        "xsm": "450px",
      },
      colors: {
        background: "#151515",
        border: "#2F2F2F",
        foreground: "#E8E8E8",
        "muted-foreground": "#767676",
        "ligher-background": "#171717",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
