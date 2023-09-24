/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        robo: ["var(--font-roboto)"],
      },
      colors: {
        "dark-1": "#000000",
        "dark-2": "#2a2c2d",
        "dark-3": "#abb1b5",
        "dark-4": "#1D1F23",
        "light-1": "#FFFFFF",
        "light-2": "#d6cbcb",
        "primary-1": "#1A8CD8",
        "primary-2": "#1f7ab7",
      },
      rotate: {
        "210": "180deg",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
