import { stylex } from "./stylex";

const styles = stylex.create({
  base: stylex.tw("leading-none font-semibold uppercase inline-flex rounded", {
    focus: "outline-none"
  }),
  icon: stylex.tw("fill-current w-4 h-4 mx-1"),
  baseDense: stylex.tw("p-2"),
  dense: stylex.tw("py-1 px-2"),
  disabled: stylex.tw("opacity-50 cursor-not-allowed"),
  //variants
  text: stylex.tw("text-teal-800", {
    hover: "bg-teal-300",
    active: "bg-teal-400"
  }),
  outlined: stylex.tw("text-teal-900 bg-transparent border border-teal-900", {
    hover: "bg-teal-700",
    active: "bg-teal-900"
  }),
  contained: stylex.tw("text-white bg-teal-800 shadow", {
    hover: "bg-teal-700 shadow-lg",
    focus: "bg-teal-700 shadow-outline",
    active: "bg-teal-900 shadow-lg"
  })
});

export default styles;

console.log(styles());
