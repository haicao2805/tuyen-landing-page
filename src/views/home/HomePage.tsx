import { HomeDownArrowSvg } from "@/components/svg";
import Image from "next/image";

interface HomeProps {

}

const HomePage: React.FC<HomeProps> = () => {
  return (<section id="home" className="bg-[#EEEEEE] h-screen">
    <div className="h-full relative w-app mx-auto">
      <Image className="h-full w-auto mx-auto" src="/images/heart.png" alt="" width={720} height={720} />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[850px] h-[400px]">
        <button className="absolute top-[0px] left-[90px]">
          <Image src="/images/home-btn-what.png" width={242} height={72} alt="" />
        </button>
        <button className="absolute top-[112px] right-[0px]">
          <Image src="/images/home-btn-who.png" width={242} height={72} alt="" />
        </button>
        <button className="absolute top-[208px] left-[0px]">
          <Image src="/images/home-btn-project.png" width={242} height={72} alt="" />
        </button>
        <button className="absolute top-[304px] right-[90px]">
          <Image src="/images/home-btn-contact.png" width={242} height={72} alt="" />
        </button>
      </div>
      <button className="absolute left-1/2 bottom-[40px] -translate-x-1/2 move-up-and-down z-0">
        <HomeDownArrowSvg />
      </button>
    </div>
  </section>);
}

export default HomePage;