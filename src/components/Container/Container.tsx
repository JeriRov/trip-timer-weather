import "./container.styles.css";

import React, { PropsWithChildren } from "react";

import { ContainerProps } from "./container.types";

export function Container({
  children,
  className,
  ...props
}: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}
