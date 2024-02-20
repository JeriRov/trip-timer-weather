import React, { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "./icons.config";
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      width={DEFAULT_ICON_SIZE.width}
      height={DEFAULT_ICON_SIZE.height}
      d="M17.04 15.624a9.004 9.004 0 1 0-1.415 1.415l5.667 5.668a1 1 0 0 0 1.415-1.415l-5.668-5.668Zm-7.036 1.393a7.013 7.013 0 1 1 0-14.026 7.013 7.013 0 0 1 0 14.026Z"
      clipRule="evenodd"
    />
  </svg>
);
