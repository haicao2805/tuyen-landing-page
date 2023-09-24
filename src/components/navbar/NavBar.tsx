"use client";

import { FacebookSvg, InstagramSvg, LinkedinSvg, LogoBlackSvg, MobileButtonSvg, MoonStarDotSvg, TriangleSvg, TwitterSvg, YoutubeSvg } from "../svg";
import React from "react";
import { navActions, useStoreNav } from "@/redux";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { HOME_BANNER } from "@/constant";

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
  ];

  const socials = [
    {
      icon: <TwitterSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: HOME_BANNER.social.twitter,
      name: "twitter"
    },
    {
      icon: <LinkedinSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: HOME_BANNER.social.linkedin,
      name: "linkedin"
    },
    {
      icon: <InstagramSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: HOME_BANNER.social.instagram,
      name: "instagram"
    },
    {
      icon: <YoutubeSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: HOME_BANNER.social.youtube,
      name: "youtube"
    },
    {
      icon: <FacebookSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: HOME_BANNER.social.facebook,
      name: "facebook"
    },
  ];

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

  return (
    <Disclosure as="nav" className="bg-[#EEEEEE] ">
      {({ open }) => (
        <>
          <nav className={clsx(selected === "#home" || selected === "#footer" ? "appLg:hidden" : "block appear", "appLg:h-[80px] h-[64px] bg-transparent w-full fixed top-0 left-1/2 -translate-x-1/2 z-[60] flex items-start justify-between mx-auto")}>
            <LogoBlackSvg className="ml-[8px] appMd:ml-[32px] w-auto appLg:h-[80px] h-[64px]" />
            <div className="relative flex items-center">
              <div className="absolute bottom-[-10px] right-0 flex items-center justify-start">
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
                  <p className={clsx(selected === item.id ? "text-[#DEC68D]" : "text-[#121212]", "relative", "text-[26px] font-bold leading-[26px] font-philosopher px-[25.5px] py-[22px]")}>{item.title}</p>
                  {selected === item.id && <TriangleSvg className="absolute -bottom-[11.34px] left-1/2 -translate-x-1/2" />}
                </button>)}
              </div>

              <Disclosure.Button className="block appLg:hidden mr-[8px] appMd:mr-[32px] cursor-pointer">
                {open ? (
                  <XMarkIcon className="block w-[32px] h-[32px] appMd:w-[40px] appMd:h-[40px]" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block w-[32px] h-[32px] appMd:w-[40px] appMd:h-[40px]" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </nav>
          <Disclosure.Panel className="appLg:hidden fixed inset-0 z-50 bg-[#EEEEEE] move-left">
            <div className="w-full h-screen relative flex items-center justify-center flex-col space-y-[40px]">
              {menu.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="button"
                  onClick={() => {
                    handleClickScroll(item.id.replace("#", ""));
                  }}
                  className={clsx(
                    selected === item.id ? "text-[#DEC68D] bg-[#121212]" : "text-[#121212]",
                    'text-[20px] appMd:text-[26px] font-bold leading-[26px] font-philosopher px-[25.5px] py-[22px] rounded-[8px] w-[200px] text-center'
                  )}
                  aria-current={selected === item.id ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
              <div className="flex items-center justify-center flex-row appMd:flex-col appMd:gap-y-[16px] appMd:gap-x-0 gap-x-[16px]">
                <p className="font-normal text-[12px] leading-[24px] appMd:text-[16px] appMd:leading-[32px] text-[#121212] underline">FOLLOW US ON</p>
                <div className="flex items-center justify-center gap-x-[10px] appMd:gap-x-[32px]">
                  {socials.map(item => <Link href={item.href} key={item.name}>
                    {item.icon}
                  </Link>)}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;