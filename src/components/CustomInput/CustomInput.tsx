import "./customInput.styles.css";
import { CustomInputProps } from "components/CustomInput/customInput.types";

export function CustomInput({ icon, className, ...props }: CustomInputProps) {
  return (
    <div className={`custom-input__container ${className}`}>
      {icon ? <span className="custom-input__icon">{icon}</span> : null}
      <input className="custom-input" type="text" {...props} />
    </div>
  );
}
