import React, { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "./icons.config";
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor"
    width={DEFAULT_ICON_SIZE.width}
    height={DEFAULT_ICON_SIZE.height}
    viewBox="0 0 460.775 460.775"
    {...props}
  >
    <path d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z" />
  </svg>
);
