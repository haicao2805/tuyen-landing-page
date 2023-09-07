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
      title: "About Us",
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

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        dispatch(navActions.setSelected(`#${id}`));
      }, 0)
    }
  };

  return (<nav className={clsx(selected === "#home" || selected === "#footer" ? "hidden" : "block", "bg-transparent w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-start justify-between mx-auto")}>
    <LogoBlackSvg className="ml-[32px]" />
    <div className="relative">
      <div className="absolute bottom-[-9px] right-0 flex items-center justify-start">
        <MoonStarDotSvg />
        <div className="h-[2px] w-[1000px] rounded-full bg-[#121212]"></div>
      </div>
      <div className="flex items-center justify-center mr-[32px]">
        {menu.map(item => <button
          key={item.title}
          className={clsx(selected === item.id ? "bg-[#121212]" : "bg-transparent", "relative")}
          onClick={() => {
            handleClickScroll(item.id.replace("#", ""));
          }}>
          <p className={clsx(selected === item.id ? "text-[#DEC68D]" : "text-[#121212]", "relative", "text-[26px]  font-bold leading-[26px] font-philosopher px-[25.5px] py-[22px]")}>{item.title}</p>
          {selected === item.id && <TriangleSvg className="absolute -bottom-[11.34px] left-1/2 -translate-x-1/2" />}
        </button>)}
      </div>
    </div>
  </nav>);
}

export default NavBar;