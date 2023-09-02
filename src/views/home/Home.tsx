import { HomeDownArrowSvg } from "@/components/svg";
import clsx from "clsx";
import Image from "next/image";

interface HomeProps {

}

const HomePage: React.FC<HomeProps> = () => {
  const homeButtons = [
    {
      name: "what",
      isLeft: true,
      top: 243,
      leftOrRight: 104,
      imgSrc: "/images/home-btn-what.png",
      width: 242,
      height: 72
    },
    {
      name: "who",
      isLeft: false,
      top: 363,
      leftOrRight: -17,
      imgSrc: "/images/home-btn-who.png",
      width: 242,
      height: 72
    },
    {
      name: "project",
      isLeft: true,
      top: 465,
      leftOrRight: -17,
      imgSrc: "/images/home-btn-project.png",
      width: 242,
      height: 72
    },
    {
      name: "contact",
      isLeft: false,
      top: 583,
      leftOrRight: 104,
      imgSrc: "/images/home-btn-contact.png",
      width: 242,
      height: 72
    }
  ]

  return (<section className="bg-[#EEEEEE] h-screen flex items-center app:items-start justify-center">
    <div className="relative w-fit mx-auto flex flex-col items-center justify-center">
      <Image className="" src="/images/heart.png" alt="" width={851} height={930} />
      <div className="hidden app:block">
        {homeButtons.map(item =>
          <button key={item.name} className={clsx("app:absolute", `top-[${item.top}px]`, item.isLeft ? `left-[${item.leftOrRight}px]` : `right-[${item.leftOrRight}px]`)}>
            <Image src={item.imgSrc} width={item.width} height={item.height} alt="" />
          </button>
        )}
        <button className="absolute left-1/2 bottom-0 -translate-x-1/2">
          <HomeDownArrowSvg />
        </button>
      </div>
      <div className="app:hidden grid grid-cols-2 gap-x-[40.17px] gap-y-[22.11px] absolute bottom-[-20px]">
        {homeButtons.map(item =>
          <button key={item.name} className="">
            <Image className="w-[158.83px] h-auto" src={item.imgSrc} width={item.width} height={item.height} alt="" />
          </button>
        )}
      </div>
    </div>
  </section>);
}

export default HomePage;