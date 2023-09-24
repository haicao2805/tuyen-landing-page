import React from "react";
import { SvgProps } from "./types";

export function ClosePopupSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="3"
        d="M3.572 3.572l35.356 35.356M40.5 2L2 40.5"
      ></path>
    </svg>
  );
}

