/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d6fe",
          300: "#a4bcfc",
          400: "#7d99fa",
          500: "#5b7bf7",
          600: "#4d6bfe",
          700: "#3f56d9",
          800: "#3548ae",
          900: "#2f4089",
        },
        navy: {
          950: "#0b1220",
          900: "#0f1a2b",
          800: "#12314f",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcd7ff",
          300: "#8ebbff",
          400: "#5993fc",
          500: "#3670f2",
          600: "#2050e6",
          700: "#1a3ecf",
          800: "#1c35a7",
          900: "#1c3184",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
