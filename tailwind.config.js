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
      maxWidth: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
