import { createCss } from '@stitches/core';
export const css = createCss({
  showFriendlyClassnames: true, breakpoints: {
    "sm": (rule) => `@media (min-width: 640px) { ${rule} }`,
    "md": (rule) => `@media (min-width: 768px) { ${rule} }`,
    "lg": (rule) => `@media (min-width: 1024px) { ${rule} }`,
    "xl": (rule) => `@media (min-width: 1280px) { ${rule} }`,
  }
})
export default css