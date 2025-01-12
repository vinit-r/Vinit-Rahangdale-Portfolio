/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noople: ["Noopla", "sans-serif"],
        Courgette: ["Kaushan Script", "cursive"],
        MoonWalk: ["MoonWalk", "sans-serif"],
      },
      colors: {
        blackCover: "rgba(0,0,0,0.4)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
