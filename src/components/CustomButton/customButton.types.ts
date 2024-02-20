import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type CustomButtonVariant = "primary" | "outlined";

export type CustomButtonProps = {
  variant?: CustomButtonVariant;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
