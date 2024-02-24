import * as React from "react";
import { SVGProps } from "react";

import { DEFAULT_ICON_SIZE } from "components/Icons/icons.config";

export function AngleRightIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      height={DEFAULT_ICON_SIZE.height}
      viewBox="0 0 1792 1792"
      width={DEFAULT_ICON_SIZE.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
    </svg>
  );
}
