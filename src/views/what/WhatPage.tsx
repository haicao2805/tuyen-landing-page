"use client";

import SectionLayout from "@/components/SectionLayout";
import { Tab } from '@headlessui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import clsx from "clsx";
import { ArrowSvg, WhatMenuItemSvg } from "@/components/svg";
import { WHAT } from "@/constant";

interface WhatPageProps {

}

const WhatPage: React.FC<WhatPageProps> = () => {
  return (<section id="what" className="bg-[#EEEEEE] appLg:h-screen relative z-40 pt-[120px] pb-[64px] appLg:py-0">
    <SectionLayout>
      <Tab.Group>
        <div className="pb-[40px] appLg:pb-0 h-full flex appMd:flex-row flex-col-reverse items-center appLg:items-end justify-start appLg:justify-center appLg:gap-x-[16px] gap-y-0">
          <Tab.Panels>
            {WHAT.map(item => <Tab.Panel key={item.title}><CharacterConceptSlider images={item.images} /></Tab.Panel>)}

          </Tab.Panels>
          <Tab.List className="flex flex-col items-start justify-start gap-y-[16px] relative mb-[80px]">
            <Image className="z-40 absolute appLg:left-[-60.5px] appLg:top-[-225px] appLg:scale-100 scale-75 left-[-68px] top-[-225px]" src="/images/what-scepter.png" height={650} width={150} alt="" />
            {WHAT.map(item => <Tab key={item.title} className="outline-none">
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

const CharacterConceptSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="w-[300px] appMd:w-[500px] appLg:w-[650px] mb-[48px] relative">

      <Swiper
        className="w-full"
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {/* {images.length > 1 && <NavigationButtons />} */}
        {images.map(item => <SwiperSlide key={item}>
          <Image className="p-[16px] w-[300px] h-[300px] appMd:w-[500px] appMd:h-[500px] appLg:w-[650px] appLg:h-[650px] mx-auto" src={item} height={600} width={600} alt=""></Image>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}

const NavigationButtons: React.FC = () => {
  const swiper = useSwiper();
  return (<div className="absolute bottom-0 inset-x-0 flex items-center justify-between z-10 appMd:px-[64px]">
    <div onClick={() => swiper.slidePrev()} className="cursor-pointer swiper-button-prev">
      <ArrowSvg className="rotate-180" />
    </div>
    <div onClick={() => swiper.slideNext()} className="cursor-pointer swiper-button-next">
      <ArrowSvg />
    </div>
  </div>)
}

export default WhatPage;