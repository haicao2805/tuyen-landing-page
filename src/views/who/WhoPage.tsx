import SectionLayout from "@/components/SectionLayout";
import { FacebookSvg, InstagramSvg, LinkedinSvg, TwitterSvg, YoutubeSvg } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";

interface WhoPageProps {

}

const WhoPage: React.FC<WhoPageProps> = () => {
  const socials = [
    {
      icon: <TwitterSvg className="w-[50px] h-[50px]" />,
      href: "",
      name: "twitter"
    },
    {
      icon: <LinkedinSvg className="w-[50px] h-[50px]" />,
      href: "",
      name: "linkedin"
    },
    {
      icon: <InstagramSvg className="w-[50px] h-[50px]" />,
      href: "",
      name: "instagram"
    },
    {
      icon: <YoutubeSvg className="w-[50px] h-[50px]" />,
      href: "",
      name: "youtube"
    },
    {
      icon: <FacebookSvg className="w-[50px] h-[50px]" />,
      href: "",
      name: "facebook"
    },
  ]
  return (<section className="bg-[#EEEEEE] h-screen relative z-10 overflow-x-clip">
    <Image className="absolute top-[34px] left-[-262px] -z-10" src="/images/background-circle-1.png" width={672} height={672} alt="" />
    <Image className="absolute bottom-[-356px] right-[-243px] -z-10" src="/images/background-circle-2.png" width={572} height={572} alt="" />
    <div className="absolute left-0 bottom-[150px] -z-10">
      <Image src="/images/label-who.png" width={282} height={72} alt="" />
    </div>
    <SectionLayout>
      <div className="relative z-0 flex items-center justify-center h-full gap-x-[92px]">
        <div className="w-[499.43px] h-[702.97px] relative">
          <Image className="absolute top-0 right-[64px] rotate-[-34.93deg]" src="/images/who-card-1.png" width={230} height={324.98} alt="" />
          <Image className="absolute bottom-[89px] left-[0px] rotate-[34.76deg]" src="/images/who-card-2.png" width={230} height={324.98} alt="" />
          <Image className="absolute right-0 bottom-0 rotate-[34.76deg]" src="/images/who-card-3.png" width={230} height={324.98} alt="" />
        </div>
        <div className="w-[580px] space-y-[66px]">
          <div className="">
            <p className="font-philosopher font-bold text-[90px] text-[#121212]">Ambracadabra</p>
            <p className="font-philosopher font-bold text-[100px] text-[#121212]">Your <span className="text-[#CD986D]">Desires</span></p>
            <p className="mt-[5px] font-montserrat text-[#121212] font-normal text-[16px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-[26px]">
            <p className="font-normal text-[16px] leading-[32px] text-[#121212] underline">FOLLOW US ON</p>
            <div className="flex items-center justify-center gap-x-[58px]">
              {socials.map(item => <Link href={item.href} key={item.name}>
                {item.icon}
              </Link>)}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  </section>);
}

export default WhoPage;