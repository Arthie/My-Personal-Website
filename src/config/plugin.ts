import { StyleObject } from "@tailwindcssinjs/tailwindcss-data/lib/transformers";
import buildMediaQuery from "tailwindcss/lib/util/buildMediaQuery";

const getMediaScreens = () => {
  const screens = Object.entries({
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  });
  const buildScreens = screens.map(([key, value]): [string, string] => [
    buildMediaQuery(value), key,
  ]);
  return Object.fromEntries(buildScreens);
};

export default function swapBreakpoints(styleObject: StyleObject): StyleObject {
  const screens = getMediaScreens()
  const rules = Object.entries(styleObject).map(([key, value]) => {
    if (typeof value === "string") {
      return [key, value];
    }
    if (Array.isArray(value)) {
      return [key, value];
    } else {
      if (key.startsWith("@media")) {
        return [screens[key], swapBreakpoints(value)]
      }
      return [key, swapBreakpoints(value)];
    }
  });
  return Object.fromEntries(rules);
}