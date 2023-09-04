"use client";

import Link from "next/link";
import { LogoBlackSvg, MoonStarDotSvg, TriangleSvg } from "../svg";
import React from "react";
import { navActions, useStoreNav } from "@/redux";
import clsx from "clsx";
import { useDispatch } from "react-redux";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  const { selected } = useStoreNav();
  const dispatch = useDispatch();
  const menu = [
    {
      title: "Who",
      href: "",
      id: "#who"
    },
    {
      title: "Art Works",
      href: "",
      id: "#what"
    },
    {
      title: "Projects",
      href: "",
      id: "#projects"
    },
    {
      title: "Contact Us",
      href: "",
      id: "#contact"
    }
  ]

  return (<nav className={clsx(selected === "#home" ? "hidden" : "block", "bg-transparent w-full fixed top-0 left-0 z-50 flex items-start justify-between")}>
    <LogoBlackSvg className="ml-[40px]" />
    <div className="relative">
      <div className="absolute bottom-[-9px] right-0 flex items-center justify-start">
        <MoonStarDotSvg />
        <div className="h-[2px] w-[1100px] rounded-full bg-[#121212]"></div>
      </div>
      <div className="flex items-center justify-center">
        {menu.map(item => <Link
          href={item.id}
          key={item.title}
          className={clsx(selected === item.id ? "bg-[#121212]" : "bg-transparent", "relative")}
          onClick={() => dispatch(navActions.setSelected(item.id))}>
          <p className="text-[18px] text-[#121212] font-bold leading-[36px] font-philosopher px-[40px] py-[10.5px]">{item.title}</p>
          <TriangleSvg className="absolute -bottom-[11.34px] left-1/2 -translate-x-1/2" />
        </Link>)}
      </div>
    </div>
  </nav>);
}

export default NavBar;