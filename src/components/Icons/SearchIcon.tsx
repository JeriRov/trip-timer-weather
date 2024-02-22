import React, { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "./icons.config";

export function SearchIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M17.04 15.624a9.004 9.004 0 1 0-1.415 1.415l5.667 5.668a1 1 0 0 0 1.415-1.415l-5.668-5.668Zm-7.036 1.393a7.013 7.013 0 1 1 0-14.026 7.013 7.013 0 0 1 0 14.026Z"
        fillRule="evenodd"
        height={DEFAULT_ICON_SIZE.height}
        width={DEFAULT_ICON_SIZE.width}
      />
    </svg>
  );
}
