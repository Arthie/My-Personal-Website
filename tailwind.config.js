module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#6200ee",
        onPrimary: "#ffffff",
        secondary: "#018786",
        onSecondary: "#ffffff",
        error: "#b00020",
        onError: "#ffffff",
        surface: "#ffffff",
        onSurface: "#000000",
        background: "#ffffff"
      },
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
        bpsm: "640px",
        bpmd: "768px",
        bplg: "1024px",
        bpxl: "1280px"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
