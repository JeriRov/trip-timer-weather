import React, { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "components/Icons/icons.config";

export function CalendarIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      fill="currentColor"
      height={DEFAULT_ICON_SIZE.height}
      viewBox="0 0 24 24"
      width={DEFAULT_ICON_SIZE.width}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M24 24H0V3h5V0h2v3h10V0h2v3h5v21zM2 22h20V5H2v4h20v2H2v11z" />
    </svg>
  );
}
