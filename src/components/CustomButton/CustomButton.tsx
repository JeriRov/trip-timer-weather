import "./customButton.styles.css";
import { BUTTON_VARIANT_STYLES } from "components/CustomButton/customButton.config";
import { CustomButtonProps } from "components/CustomButton/customButton.types";

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
    <button className={`custom-button ${style}`} type="button" {...props}>
      {children}
    </button>
  );
}
