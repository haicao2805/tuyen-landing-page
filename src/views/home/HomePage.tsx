import { HomeDownArrowSvg } from "@/components/svg";
import Image from "next/image";

interface HomeProps {

}

const HomePage: React.FC<HomeProps> = () => {
  return (<section className="bg-[#EEEEEE] h-screen">
    <div className="relative w-fit mx-auto">
      <Image className="" src="/images/heart.png" alt="" width={851} height={930} />
      <button className="absolute top-[243px] left-[104px]">
        <Image src="/images/home-btn-what.png" width={242} height={72} alt="" />
      </button>
      <button className="absolute top-[363px] right-[-17px]">
        <Image src="/images/home-btn-who.png" width={242} height={72} alt="" />
      </button>
      <button className="absolute top-[465px] left-[-17px]">
        <Image src="/images/home-btn-project.png" width={242} height={72} alt="" />
      </button>
      <button className="absolute top-[583px] right-[104px]">
        <Image src="/images/home-btn-contact.png" width={242} height={72} alt="" />
      </button>
      <button className="absolute left-1/2 bottom-0 -translate-x-1/2">
        <HomeDownArrowSvg />
      </button>
    </div>
  </section>);
}

export default HomePage;