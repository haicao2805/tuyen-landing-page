import React from "react";
import { SvgProps } from "./types";

export function FacebookSvg(props: SvgProps) {
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
        d="M46.382 24.954c0-11.485-9.31-20.795-20.795-20.795-11.485 0-20.795 9.31-20.795 20.795 0 10.38 7.604 18.983 17.546 20.543V30.965h-5.28v-6.01h5.28v-4.582c0-5.212 3.104-8.09 7.854-8.09 2.275 0 4.655.405 4.655.405v5.118h-2.622c-2.583 0-3.389 1.603-3.389 3.247v3.901h5.767l-.922 6.011h-4.845v14.532c9.942-1.56 17.546-10.163 17.546-20.543z"
      ></path>
    </svg>
  );
}
