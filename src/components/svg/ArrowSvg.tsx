import React from "react";
import { SvgProps } from "./types";

export function ArrowSvg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="23"
      fill="none"
      viewBox="0 0 29 23"
      {...props}
    >
      <path
        fill="#121212"
        d="M18.351.629l10.151 9.396c.158.146.283.319.369.509a1.467 1.467 0 010 1.201c-.086.19-.211.363-.369.509l-10.15 9.396c-.319.295-.75.46-1.2.46-.449 0-.88-.165-1.198-.46a1.512 1.512 0 01-.496-1.109c0-.416.179-.815.496-1.11l7.263-6.722H2.492c-.45 0-.88-.165-1.197-.458A1.51 1.51 0 01.8 11.133c0-.415.178-.813.495-1.107a1.763 1.763 0 011.197-.459h20.725l-7.264-6.722a1.512 1.512 0 01-.496-1.11c0-.416.178-.815.496-1.109.318-.294.749-.46 1.198-.46.45 0 .88.166 1.199.46l.001.003z"
      ></path>
    </svg>
  );
}
