"use client";

import SectionLayout from "@/components/SectionLayout";
import { Tab } from '@headlessui/react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import clsx from "clsx";
import { WhatMenuItemSvg } from "@/components/svg";

interface WhatPageProps {

}

const WhatPage: React.FC<WhatPageProps> = () => {
  const menu = [
    {
      title: "A. Character Concept"
    },
    {
      title: "B. Chibi"
    },
    {
      title: "C. YCH"
    },
    {
      title: "D. Item - Icon - Object"
    },
    {
      title: "E. NFT"
    },
  ]

  return (<section id="what" className="bg-[#EEEEEE] appLg:h-screen relative z-40 pt-[120px] pb-[64px] appLg:py-0">
    <SectionLayout>
      <Tab.Group>
        <div className="pb-[40px] appLg:pb-0 h-full flex appLg:flex-row flex-col-reverse items-end justify-start appLg:justify-center appLg:gap-x-[16px] gap-y-[40px] appLg:gap-y-0">
          <Tab.Panels>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
          </Tab.Panels>
          <Tab.List className="flex flex-col items-start justify-start gap-y-[16px] relative mb-[80px]">
            <Image className="z-40 absolute appLg:left-[-60.5px] appLg:top-[-225px] appLg:scale-100 scale-75 left-[-68px] top-[-225px]" src="/images/what-scepter.png" height={650} width={150} alt="" />
            {menu.map(item => <Tab key={item.title} className="outline-none">
              {({ selected }) => (<div>
                <p className={clsx(selected ? "font-bold" : "font-normal", "ml-[80px] text-left font-philosopher text-[16px] leading-[26px] appLg:text-[26px] appLg:leading-[26px] text-[#121212]")}>
                  {item.title}
                </p>
                <WhatMenuItemSvg className="appLg:h-[32px] h-[16px] w-auto" />
              </div>
              )}
            </Tab>)}
          </Tab.List>
        </div>
      </Tab.Group>
    </SectionLayout>
    <Image className="absolute bottom-[76px] left-[-123px] -z-10 scale-75 appLg:scale-100" src="/images/background-circle-3.png" width={553} height={553} alt="" />
  </section>);
}

const CharacterConceptSlider: React.FC = () => {
  return (
    <div className="w-[300px] appMd:w-[500px] appLg:w-[650px] mb-[48px]">
      <Swiper
        className="w-full"
      >
        <SwiperSlide>
          <Image className="w-[300px] h-[300px] appMd:w-[500px] appMd:h-[500px] appLg:w-[650px] appLg:h-[650px] mx-auto" src="/images/what-1.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[300px] h-[300px] appMd:w-[500px] appMd:h-[500px] appLg:w-[650px] appLg:h-[650px] mx-auto" src="/images/what-2.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[300px] h-[300px] appMd:w-[500px] appMd:h-[500px] appLg:w-[650px] appLg:h-[650px] mx-auto" src="/images/what-3.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[300px] h-[300px] appMd:w-[500px] appMd:h-[500px] appLg:w-[650px] appLg:h-[650px] mx-auto" src="/images/what-4.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WhatPage;