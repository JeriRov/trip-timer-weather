import "./customInput.styles.css";

import { CustomInputProps } from "./customInput.types";

export function CustomInput({ icon, className, ...props }: CustomInputProps) {
  return (
    <div className={`custom-input-container ${className}`}>
      {icon && <span className="custom-input__icon">{icon}</span>}
      <input className="custom-input" type="text" {...props} />
    </div>
  );
}
