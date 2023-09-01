/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgMidnight: "#192230",
        bgApache: "#fff8f1",
      },
      spacing: {
        13: "3.25rem",
      },
      rotate: {
        "-0.25": "-0.25deg",
        "-0.5": "-0.5deg",
      },
      lineHeight: {
        0.75: "0.75",
      },
      height: {
        124: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
