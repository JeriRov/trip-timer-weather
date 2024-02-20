import React, { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "./icons.config";
export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={DEFAULT_ICON_SIZE.width}
    height={DEFAULT_ICON_SIZE.height}
    {...props}
  >
    <path d="M24 24H0V3h5V0h2v3h10V0h2v3h5v21zM2 22h20V5H2v4h20v2H2v11z" />
  </svg>
);