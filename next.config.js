const xwind = require("xwind/next")

// next.config.js
module.exports = xwind()({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
})

