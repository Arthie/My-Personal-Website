const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
      },
      boxShadow: {
        "neumorphism-blue": "20px 20px 60px #1e3064, -20px -20px 60px #284088",
        "neumorphism-blue-inset":
          "inset 20px 20px 60px #1e3064, inset -20px -20px 60px #284088",
      },
      gridTemplateRows: {
        header: "auto 1fr",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
