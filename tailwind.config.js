const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'media', // or 'class'
  experimental: "all",
  future: "all",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // gridTemplateRows: {
      //   header: "auto 1fr",
      // },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"),
  plugin(function ({ addBase, addUtilities, e, theme, variants }) {
    const keyframesConfig = theme('keyframes')
    const keyframesStyles = Object.fromEntries(
      Object.entries(keyframesConfig).map(([name, keyframes]) => {
        return [`@keyframes ${name}`, keyframes]
      })
    )
    addBase(keyframesStyles)
  }),
  plugin(function ({ addVariant, addComponents, e, prefix, config }) {
    addVariant("important", ({ container }) => {
      container.walkRules((rule) => {
        rule.selector = `.important\\${config().separator}${rule.selector.slice(1)}`
        rule.walkDecls((decl) => {
          decl.important = true;
        });
      });
    });
  }),
  ]
};
