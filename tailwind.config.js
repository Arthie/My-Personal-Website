const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", //'media' or 'class'
  experimental: "all",
  future: "all",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors,
      margin: {
        // "xzxx": "60px"
      },
    },
  },
  variants: {},
  plugins: [
    require("xwind/plugins/important"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  xwind: {
    mode: "classes",
    classes: {
      entry: "./src",
      output: "./src/styles/xwind.css",
    },
  },
};
