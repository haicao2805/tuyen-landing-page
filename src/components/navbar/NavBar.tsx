"use client";

import { LogoBlackSvg, MobileButtonSvg, MoonStarDotSvg, TriangleSvg } from "../svg";
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

  return (<nav className={clsx(selected === "#home" || selected === "#footer" ? "hide" : "block appear", "appLg:h-[80px] h-[64px] bg-transparent w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-start justify-between mx-auto")}>
    <LogoBlackSvg className="ml-[8px] appMd:ml-[32px] w-auto appLg:h-[80px] h-[64px]" />
    <div className="relative h-full flex items-center">
      <div className="absolute appMd:bottom-[-6px] bottom-[0px] right-0 flex items-center justify-start">
        <MoonStarDotSvg className="h-[15px] appMd:h-[20px] w-auto" />
        <div className="h-[2px] w-[200px] appMd:w-[500px] appLg:w-[1000px] appXl:w-[1200px] rounded-full bg-[#121212]"></div>
      </div>
      <div className="hidden appLg:flex items-center justify-center mr-[8px] appMd:mr-[32px]">
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
      <div className="block appLg:hidden mr-[8px] appMd:mr-[32px] cursor-pointer">
        <MobileButtonSvg className="w-[32px] h-[32px] appMd:w-[40px] appMd:h-[40px]" />
      </div>
    </div>
  </nav>);
}

export default NavBar;