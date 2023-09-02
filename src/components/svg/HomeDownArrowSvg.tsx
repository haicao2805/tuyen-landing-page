import React from "react";
import { SvgProps } from "./types";

export function HomeDownArrowSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="53"
      fill="none"
      viewBox="0 0 70 53"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M2 18l33 33 33-33"
      ></path>
    </svg>
  );
}

