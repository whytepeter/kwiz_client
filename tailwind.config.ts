import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#171717",
        light: "#F3F3F9",
        background: "#FFFBF8",
        outline: "#E9E9E9",
        grey: "#D4D4D4",
        offwhite: "#fafbfb",

        primary: {
          DEFAULT: "#310A31",
        },

        secondary: {
          DEFAULT: "#AE4E09",
          dark: "#7D462A",
        },

        accent: {
          DEFAULT: "#FEF5EE",
          100: "#FEF5EE",
        },

        success: {
          DEFAULT: "#05B756",
          dark: "#037A39",
          light: "#E6F8EF",
        },

        info: {
          DEFAULT: "#2F80ED",
          dark: "#1F559E",
          light: "#EBF3FE",
        },

        error: {
          DEFAULT: "#D9453B",
          dark: "#9D231B",
          light: "#FDEBEA",
        },

        dark: {
          DEFAULT: "#2B2B2C",
          50: "#DFDFDF",
          100: "#A3A3A3",
          200: "#6C6C6C",
          300: "#4C4C4C",
        },
      },

      spacing: {
        90: "20rem",
        96: "24rem",
        98: "28rem",
        100: "30rem",
        128: "32rem",
        easispace: "11rem",
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
} satisfies Config;

export default config;
