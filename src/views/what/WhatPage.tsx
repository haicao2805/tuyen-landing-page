import SectionLayout from "@/components/SectionLayout";
import Image from "next/image";

interface WhatPageProps {

}

const WhatPage: React.FC<WhatPageProps> = () => {
  return (<section id="what" className="bg-[#EEEEEE] h-screen relative z-0">
    <Image className="absolute bottom-[76px] left-[-123px] -z-10" src="/images/background-circle-3.png" width={553} height={553} alt="" />
    <div className="absolute left-0 bottom-[150px] -z-10">
      <Image src="/images/label-what.png" width={282} height={72} alt="" />
    </div>
    <SectionLayout>
      <div className="flex items-center justify-center h-full gap-x-[92px]"></div>
    </SectionLayout>
  </section>);
}

export default WhatPage;