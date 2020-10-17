const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

module.exports = {
  dark: 'class', // or 'class'
  experimental: "all",
  future: "all",
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
  tailwindcssinjs: {
    plugins:[
      function(objectStyle, composedClasses){
        const changeMedia = (objectStyle) => {
          const rules = []
          const atRules = {}
          for(const [key, value] of Object.entries(objectStyle)){
            if (key.startsWith("@")) {
              const atRule = key.split(" ")[0]
              atRules[atRule] = {
                ...atRules[atRule],
                [key.slice(atRule.length).trimStart()]: changeMedia(value)
              }
            } else {
              rules.push([key, value])
            }
          }
          return { ...Object.fromEntries(rules), ...atRules }
        }
        return changeMedia(objectStyle)
      }

    ]
  }
};
