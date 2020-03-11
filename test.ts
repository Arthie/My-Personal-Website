

export const getClassnames = ({ color }) => {
  const base = {
    default: "inline-flex items-center justify-center rounded",
    hover: "",
    active: "",
    focus: "outline-none"
  }

  const basedense = {
    default: "py-2 px-4"
  }

  const dense = {
    default: "py-2 px-4"
  }

  const disabled = {
    default: "opacity-50 cursor-not-allowed"
  }

  const textClasses = {
    default: `text-${color}`,
    hover: `bg-${color}-t`,
    active: `bg-${color}-t`,
    focus: `bg-${color}-t`
  }
}

const className = clsx(
  CLASSNAME.BASE,
  CLASSNAME.VARIANT[variant],
  dense ? CLASSNAME.DENSE : CLASSNAME.BASEDENSE,
  otherProps.disabled && CLASSNAME.DISABLED
)

const CLASSNAME = {
  BASE: "inline-flex items-center justify-center rounded focus:outline-none",
  VARIANT: {
    text: `text-${color} hover:bg-${color}-t focus:bg-${color}-t active:bg-${color}-t`,
    outlined: `text-${color} bg-transparent border border-${color} hover:bg-${color}-t focus:bg-${color}-t active:bg-${color}-t`,
    contained: `text-${onColor} bg-${color} shadow hover:shadow-lg focus:shadow-lg active:shadow-lg`
  },
  BASEDENSE: "py-2 px-4",
  DENSE: "py-1 px-2",
  DISABLED: "opacity-50 cursor-not-allowed"
};
