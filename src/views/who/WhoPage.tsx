import SectionLayout from "@/components/SectionLayout";
import { FacebookSvg, InstagramSvg, LinkedinSvg, TwitterSvg, YoutubeSvg } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";

interface WhoPageProps {

}

const WhoPage: React.FC<WhoPageProps> = () => {
  const socials = [
    {
      icon: <TwitterSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: "",
      name: "twitter"
    },
    {
      icon: <LinkedinSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: "",
      name: "linkedin"
    },
    {
      icon: <InstagramSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: "",
      name: "instagram"
    },
    {
      icon: <YoutubeSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: "",
      name: "youtube"
    },
    {
      icon: <FacebookSvg className="appLg:w-[50px] appLg:h-[50px] w-[20px] h-[20px] appMd:w-[28px] appMd:h-[28px]" />,
      href: "",
      name: "facebook"
    },
  ]
  return (<section id="who" className="bg-[#EEEEEE] appLg:h-screen relative z-10 overflow-x-clip py-[64px] appLg:py-0">
    <Image className="absolute top-[34px] left-[-262px] -z-10" src="/images/background-circle-1.png" width={672} height={672} alt="" />
    {/* <Image className="absolute bottom-[-356px] right-[-243px] -z-20  scale-75 appLg:scale-100" src="/images/background-circle-2.png" width={572} height={572} alt="" /> */}
    <SectionLayout>
      <div className="relative z-0 flex appLg:flex-row flex-col items-center appLg:justify-end justify-center h-full gap-x-[72.37px]">
        <div className="w-[250px] h-[460px] sm:w-[391.97px] sm:h-[571.49px] relative">
          <Image className="w-[130px] sm:w-[180px] h-auto absolute top-0 right-[16px] appLg:right-[32px] rotate-[-35deg]" src="/images/who-card-1.png" width={230} height={324.98} alt="" />
          <Image className="w-[130px] sm:w-[180px] h-auto absolute bottom-[128px] appLg:bottom-[109px] left-0 rotate-[35deg]" src="/images/who-card-2.png" width={230} height={324.98} alt="" />
          <Image className="w-[130px] sm:w-[180px] h-auto absolute right-0 bottom-0 rotate-[345deg]" src="/images/who-card-3.png" width={230} height={324.98} alt="" />
        </div>
        <div className="w-[288px] appMd:w-[505px] appLg:space-y-[16px]">
          <div className="">
            <p className="font-philosopher font-bold text-[44px] appMd:text-[78px] text-[#121212] leading-auto">Ambracadabra</p>
            <p className="font-philosopher font-bold text-[50px] appMd:text-[88px] text-[#121212] leading-auto">Your <span className="text-[#CD986D]">Desires</span></p>
            <p className="appLg:mt-[16px] font-montserrat text-[#121212] font-normal text-[12px] leading-[24px] appLg:text-[16px] appLg:leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex items-center justify-center flex-row appMd:flex-col appMd:gap-y-[16px] appMd:gap-x-0 gap-x-[16px]">
            <p className="font-normal text-[12px] leading-[24px] appMd:text-[16px] appMd:leading-[32px] text-[#121212] underline">FOLLOW US ON</p>
            <div className="flex items-center justify-center gap-x-[10px] appMd:gap-x-[32px]">
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