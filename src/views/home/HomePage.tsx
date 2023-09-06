"use client";

import Button from "@/components/Button";
import { HomeDownArrowSvg } from "@/components/svg";
import { navActions } from "@/redux";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface HomeProps {

}

const HomePage: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  return (<section id="home" className="bg-[#EEEEEE] h-screen">
    <div className="h-full relative w-app mx-auto">
      <Image className="h-full w-auto mx-auto" src="/images/heart.png" alt="" width={720} height={720} />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[850px] h-[400px]">
        <Link
          href="#what"
          className="absolute top-[0px] left-[90px]"
          onClick={() => dispatch(navActions.setSelected("#what"))}
        >
          <Button>
            What?
          </Button>
        </Link>
        <Link
          href="#who"
          className="absolute top-[112px] right-[0px]"
          onClick={() => dispatch(navActions.setSelected("#who"))}
        >
          <Button>
            Who?
          </Button>
        </Link>
        <Link
          href="#projects"
          className="absolute top-[208px] left-[0px]"
          onClick={() => dispatch(navActions.setSelected("#projects"))}
        >
          <Button>
            Projects
          </Button>
        </Link>
        <Link
          href="#contact"
          className="absolute top-[304px] right-[90px]"
          onClick={() => dispatch(navActions.setSelected("#contact"))}
        >
          <Button>
            Contact
          </Button>
        </Link>
      </div>
      <button className="absolute left-1/2 bottom-[40px] -translate-x-1/2 move-up-and-down z-0">
        <HomeDownArrowSvg />
      </button>
    </div>
  </section>);
}

export default HomePage;