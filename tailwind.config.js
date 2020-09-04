const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
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
  plugin(function ({ addVariant }) {
    addVariant('important', ({ container }) => {
      container.walkRules(rule => {
        rule.selector = `.\\!${rule.selector.slice(1)}`
        rule.walkDecls(decl => {
          decl.important = true
        })
      })
    })
  })
  ],
  dark: 'media', // or 'class'
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    darkModeVariant: true,
  },
  tailwindcssinjs: {
    plugins: [
      require("@tailwindcssinjs/macro/lib/plugins/removeFallbacks").default,
      require("./src/config/stichesplugin").default
    ]
  }
};
