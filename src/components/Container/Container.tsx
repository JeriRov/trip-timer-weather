import "../../components/Container/Container.css";

import React, { ReactNode } from "react";
export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};
