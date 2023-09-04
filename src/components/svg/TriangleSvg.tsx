import React from "react";
import { SvgProps } from "./types";

export function TriangleSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="12"
      fill="none"
      viewBox="0 0 26 12"
      {...props}
    >
      <path
        fill="#121212"
        d="M10.172 10.172L0 0h26L15.828 10.172a4 4 0 01-5.656 0z"
      ></path>
    </svg>
  );
}

