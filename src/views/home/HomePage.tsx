"use client";

import Button from "@/components/Button";
import { HomeDownArrowSvg } from "@/components/svg";
import { navActions } from "@/redux";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface HomeProps {

}

const HomePage: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
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

  return (<section id="home" className="bg-[#EEEEEE] h-screen">
    <div className="h-full relative w-app mx-auto flex flex-col items-center justify-center">
      <Image className="lg:block hidden h-full w-auto" src="/images/heart.png" alt="" width={720} height={720} />
      <Image className="hidden md:block lg:hidden h-full w-auto" src="/images/heart-sm.png" alt="" width={656} height={952} />
      <Image className="block md:hidden w-full h-auto" src="/images/heart-sm.png" alt="" width={656} height={952} />
      <div className="hidden appMd:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 appMd:w-[656px] appMd:h-[768px] appLg:w-[850px] appLg:h-[400px] appXL:w-[944px] appXL:h-[400px]">
        <div
          className="absolute top-[0px] appMd:left-[56px] appLg:left-[90px] appXl:left-[100px]"
          onClick={() => {
            handleClickScroll("what");
          }}
        >
          <Button>
            What?
          </Button>
        </div>
        <div
          className="absolute appMd:top-[232px] appLg:top-[112px] appXl:top-[112px] right-[0px]"
          onClick={() => {
            handleClickScroll("who");
          }}
        >
          <Button>
            Who?
          </Button>
        </div>
        <div
          className="absolute appMd:top-[462px] appLg:top-[208px] appXl:top-[208px] left-[0px]"
          onClick={() => {
            handleClickScroll("projects");
          }}
        >
          <Button>
            Projects
          </Button>
        </div>
        <div
          className="absolute appMd:right-[56px] appMd:top-[692px] appLg:top-[304px] appXl:top-[304px] appLg:right-[90px] appXl:right-[100px]"
          onClick={() => {
            handleClickScroll("contact");
          }}
        >
          <Button>
            Contact
          </Button>
        </div>
      </div>
      <div className="absolute top-[calc(50%+2*108px)] w-full appMd:hidden grid grid-cols-2 gap-[8px]">
        <div
          className="flex items-center justify-center"
          onClick={() => {
            handleClickScroll("what");
          }}
        >
          <Button size="small">
            What?
          </Button>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={() => {
            handleClickScroll("who");
          }}
        >
          <Button size="small">
            Who?
          </Button>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={() => {
            handleClickScroll("projects");
          }}
        >
          <Button size="small">
            Projects
          </Button>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={() => {
            handleClickScroll("contact");
          }}
        >
          <Button size="small">
            Contact
          </Button>
        </div>
      </div>
      {/* <div className="absolute left-1/2 bottom-[40px] -translate-x-1/2 move-up-and-down z-0">
        <HomeDownArrowSvg />
      </div> */}
    </div>
  </section>);
}

export default HomePage;