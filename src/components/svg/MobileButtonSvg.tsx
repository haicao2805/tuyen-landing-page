import React from "react";
import { SvgProps } from "./types";

export function MobileButtonSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill="#121212"
        d="M35.625 20a1.875 1.875 0 01-1.875 1.875H6.25a1.875 1.875 0 110-3.75h27.5A1.875 1.875 0 0135.625 20zM6.25 11.875h27.5a1.875 1.875 0 100-3.75H6.25a1.875 1.875 0 000 3.75zm27.5 16.25H6.25a1.875 1.875 0 100 3.75h27.5a1.875 1.875 0 100-3.75z"
      ></path>
    </svg>
  );
}
