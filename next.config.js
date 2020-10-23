// module.exports = (phase, { defaultConfig }) => {
//   return {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//       // Note: we provide webpack above so you should not `require` it
//       // Perform customizations to webpack config
//       if (!isServer) {
//         // defaultLoaders.babel.options.cache = false
//       }
//       return config
//     },
//   }
// }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})