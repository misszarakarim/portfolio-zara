/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      colors: {
        coral: "#FF6F61",
        mintgreen: "#CCFFD6",
        blue: "#6BB5FF",
      },
      fontFamily: {
        scree: ["Sree Krushnadevaraya"],
        sans: ["Open Sans"],
      },
    },
  },
};
