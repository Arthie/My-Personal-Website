import React, { FC } from "react";
import { addClassNameToElement } from "../../utils/reactUtils";
import styles from "./ButtonStyles";

type Props =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps {
  dense?: boolean;
  icon?: React.ReactElement;
  iconPosition?: "start" | "end";
  variant?: "text" | "outlined" | "contained";
}

const Button: FC<ButtonProps & Props> = ({
  variant = "text",
  dense = false,
  icon,
  iconPosition = "start",
  children,
  className,
  ...otherProps
}) => {
  const element = {
    tag: "href" in otherProps ? "a" : "button",
    props: {
      ...otherProps,
      className: [
        styles(
          "base",
          dense ? "dense" : "baseDense",
          variant,
          "disabled" in otherProps && "disabled"
        ),
        className
      ].join(" ")
    }
  };

  const Icon = addClassNameToElement(icon, styles("icon"));

  return (
    <element.tag {...element.props}>
      {iconPosition === "start" && Icon}
      {children}
      {iconPosition === "end" && Icon}
    </element.tag>
  );
};

Button.displayName = "Button";

export default Button;
