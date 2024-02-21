import "../../components/Container/Container.css";

import React, { FC, PropsWithChildren } from "react";

import { ContainerProps } from "./container.types";
export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};
