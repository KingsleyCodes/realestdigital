/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}", // Added in case your code lives in a /src folder
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8243",
          "orange-hover": "#E06B2E",
          dark: "#0F0F11",   // Dark obsidian background
          surface: "#18181B", // Dark card background
          border: "#27272A",  // Subtle dark borders
        },
      },
    },
  },
  plugins: [],
};