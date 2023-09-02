import React from "react";
import { SvgProps } from "./types";

export function YoutubeSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="50"
      fill="none"
      viewBox="0 0 51 50"
      {...props}
    >
      <path
        fill="#CD986D"
        fillRule="evenodd"
        d="M43.552 9.275a5.73 5.73 0 014.045 4.044c.952 3.567.956 11.012.956 11.012s0 7.445-.956 11.012a5.729 5.729 0 01-4.045 4.044c-3.566.957-17.873.957-17.873.957s-14.307 0-17.874-.957a5.729 5.729 0 01-4.044-4.044c-.957-3.567-.957-11.012-.957-11.012s0-7.445.957-11.012a5.73 5.73 0 014.044-4.044c3.567-.957 17.874-.957 17.874-.957s14.307 0 17.873.957zM32.985 24.332l-11.886 6.861V17.47l11.886 6.862z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
