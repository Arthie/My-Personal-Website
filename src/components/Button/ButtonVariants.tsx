import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

export interface ButtonVariantProps extends Omit<ButtonProps, "variant"> {}

export const TextButton: FC<ButtonVariantProps> = props => (
  <Button variant="text" {...props} />
);

export const OutlinedButton: FC<ButtonVariantProps> = props => (
  <Button variant="outlined" {...props} />
);

export const ContainedButton: FC<ButtonVariantProps> = props => (
  <Button variant="contained" {...props} />
);
