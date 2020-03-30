module.exports = {
  theme: {
    extend: {
      colors: {},
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      },
      fontSize: {
        "7xl": "5rem"
      },
      borderWidth: {
        "6": "6px",
        "8": "8px"
      },
      boxShadow: {
        "neumorphism-blue": "20px 20px 60px #1e3064, -20px -20px 60px #284088",
        "neumorphism-blue-inset": "inset 20px 20px 60px #1e3064, inset -20px -20px 60px #284088"
      }
    }
  },
  variants: {
  },
  plugins: [
    require("@tailwindcss/ui")
  ]
};
