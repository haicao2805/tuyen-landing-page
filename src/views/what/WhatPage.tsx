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

  return (<section id="what" className="bg-[#EEEEEE] h-screen relative z-0">
    <Image className="absolute bottom-[76px] left-[-123px] -z-10" src="/images/background-circle-3.png" width={553} height={553} alt="" />
    <SectionLayout>

      <Tab.Group>
        <div className="flex items-end justify-between gap-x-[16px]">
          <Tab.Panels>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
            <Tab.Panel><CharacterConceptSlider /></Tab.Panel>
          </Tab.Panels>
          <Tab.List className="flex flex-col items-start justify-start gap-y-[16px] relative">
            <Image className="absolute left-[-60.5px] top-[-225px]" src="/images/what-scepter.png" height={650} width={150} alt="" />
            {menu.map(item => <Tab key={item.title} className="outline-none">
              {({ selected }) => (<div>
                <p className={clsx(selected ? "font-bold" : "font-normal", "ml-[80px] text-left font-philosopher text-[26px] leading-[26px] text-[#121212]")}>
                  {item.title}
                </p>
                <WhatMenuItemSvg />
              </div>
              )}
            </Tab>)}
          </Tab.List>
        </div>
      </Tab.Group>
    </SectionLayout>
  </section>);
}

const CharacterConceptSlider: React.FC = () => {
  return (
    <div className="w-[500px]">
      <Swiper
        className="w-full"
      >
        <SwiperSlide>
          <Image className="w-[500px] h-[500px]" src="/images/what-1.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[500px] h-[500px]" src="/images/what-2.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[500px] h-[500px]" src="/images/what-3.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[500px] h-[500px]" src="/images/what-4.png" height={600} width={600} alt=""></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WhatPage;