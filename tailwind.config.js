const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

function xwindTransformer(content) {
  //example use proper parser like SWC for prod!
  return content.match(/\/\*tw\*\/[^"]+"[^"]+"/g)?.toString() ?? "";
}

module.exports = {
  content: {
    files: ["./app/**/*.tsx"],
    transform: {
      tsx: xwindTransformer,
    },
  },

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),

    plugin(function ({ addVariant, addComponents, e, prefix, config }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.important\\${
            config().separator
          }${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
