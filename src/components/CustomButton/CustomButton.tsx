import "./customButton.styles.css";

import { BUTTON_VARIANT_STYLES } from "./customButton.config";
import { CustomButtonProps } from "./customButton.types";

export function CustomButton({
  children,
  variant,
  ...props
}: CustomButtonProps) {
  let style: string = BUTTON_VARIANT_STYLES.primary;
  if (variant === "outlined") {
    style = BUTTON_VARIANT_STYLES.outlined;
  }

  return (
    <button type="button" className={`custom-button ${style}`} {...props}>
      {children}
    </button>
  );
}
