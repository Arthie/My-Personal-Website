"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const buildMediaQuery_1 = __importDefault(
  require("tailwindcss/lib/util/buildMediaQuery")
);
const getMediaScreens = () => {
  const screens = Object.entries({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  });
  const buildScreens = screens.map(([key, value]) => [
    buildMediaQuery_1.default(value),
    key,
  ]);
  return Object.fromEntries(buildScreens);
};
function swapBreakpoints(styleObject) {
  const screens = getMediaScreens();
  const rules = Object.entries(styleObject).map(([key, value]) => {
    if (typeof value === "string") {
      return [key, value];
    }
    if (Array.isArray(value)) {
      return [key, value];
    } else {
      if (key.includes("@media")) {
        return [screens[key.replace("@media ", "")], swapBreakpoints(value)];
      }
      return [key, swapBreakpoints(value)];
    }
  });
  return Object.fromEntries(rules);
}
exports.default = swapBreakpoints;
//# sourceMappingURL=plugin.js.map
