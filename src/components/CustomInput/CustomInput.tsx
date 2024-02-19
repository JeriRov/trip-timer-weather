import "./CustomInput.css";

import { FC } from "react";

import { CustomInputProps } from "../../components/CustomInput/customInput.types";

export const CustomInput: FC<CustomInputProps> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <div className={`custom-input-container ${className}`}>
      {icon && <span className="custom-input__icon">{icon}</span>}
      <input className="custom-input" type="text" {...props} />
    </div>
  );
};
