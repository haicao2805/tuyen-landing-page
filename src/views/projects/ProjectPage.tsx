import SectionLayout from "@/components/SectionLayout";
import Image from "next/image";

interface ProjectPageProps {

}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  return (<section id="projects" className="bg-[#FFFFFF] h-screen relative z-0 overflow-hidden">
    <p className="our-project-title">OUR PROJECT</p>
    <SectionLayout>
      <div className="space-y-[14px] w-[296px]">
        <div className="relative w-fit h-fit">
          <div className="absolute right-[12px] bottom-[23px] w-full h-full bg-transparent border border-[#CD986D] box-border rounded-t-[120px]"></div>
          <Image className="rounded-t-[120px]" src="/images/project-1.png" width={284} height={365} alt="" />
        </div>
        <p className="text-center text-[26px] leading-[26px] font-bold font-philosopher text-[#CD986D]">The Witch’s Shop</p>
        <p className="text-[12px] leading-[24px] font-normal font-montserrat text-[#121212]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet</p>
        <div className="flex items-center justify-center">
          <button>
            <Image src="/images/project-btn-contact.png" width={168} height={50} alt="" />
          </button>
        </div>
      </div>
    </SectionLayout>
  </section>);
}

export default ProjectPage;