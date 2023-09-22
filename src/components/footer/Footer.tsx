import { HOME_BANNER } from "@/constant";
import { FacebookSvg, InstagramSvg, LinkedinSvg, LogoWhiteSvg, TwitterSvg, YoutubeSvg } from "../svg";
import Link from "next/link";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  const socials = [
    {
      icon: <TwitterSvg className="w-[25px] h-[25px]" />,
      href: HOME_BANNER.social.twitter,
      name: "twitter"
    },
    {
      icon: <LinkedinSvg className="w-[25px] h-[25px]" />,
      href: HOME_BANNER.social.linkedin,
      name: "linkedin"
    },
    {
      icon: <InstagramSvg className="w-[25px] h-[25px]" />,
      href: HOME_BANNER.social.instagram,
      name: "instagram"
    },
    {
      icon: <YoutubeSvg className="w-[25px] h-[25px]" />,
      href: HOME_BANNER.social.youtube,
      name: "youtube"
    },
    {
      icon: <FacebookSvg className="w-[25px] h-[25px]" />,
      href: HOME_BANNER.social.facebook,
      name: "facebook"
    },
  ]

  return (<section id="#footer" className="bg-[#121212] h-screen">
    <div className="py-[56px] app:py-[65px] h-full">
      <div className="flex flex-col items-center justify-center gap-y-[20px] h-full">
        <LogoWhiteSvg />
        <div className="flex items-center justify-center gap-x-[29px]">
          {socials.map(item =>
            <Link key={item.name} href={item.href}>
              {item.icon}
            </Link>)}
        </div>
        <p className="text-[#FFFFFF] text-[12px] app:text-[16px] font-normal leading-[24px] app:leading-[32px]">© 2022 - 2023 Hat Cat Studio. All rights reserved.</p>
      </div>
    </div>
  </section>);
}

export default Footer;