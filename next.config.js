const withTreat = require("next-treat")(
  {
    outputCSS: false,
  } /* Extra TreatPlugin options */
);

module.exports = withTreat(/* Additional Next.js configuration */);
