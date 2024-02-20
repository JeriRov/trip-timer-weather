import "./CustomButton.css";

import { FC } from "react";

import { BUTTON_VARIANT_STYLES } from "./customButton.config";
import { CustomButtonProps } from "./customButton.types";

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  let style: string = BUTTON_VARIANT_STYLES.primary;
  if (variant === "outlined") {
    style = BUTTON_VARIANT_STYLES.outlined;
  }

  return (
    <button className={`custom-button ${style}`} {...props}>
      {children}
    </button>
  );
};
