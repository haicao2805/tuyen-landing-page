import Button from "@/components/Button";
import SectionLayout from "@/components/SectionLayout";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { PROJECTS } from "@/constant";

interface ProjectPageProps {

}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  return (<section id="projects" className="bg-[#FFFFFF] h-screen relative z-0 overflow-hidden">
    <p className="our-project-title">OUR PROJECT</p>
    <SectionLayout>
      <Swiper
        className="w-full"
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
        }}
      >
        {PROJECTS.map(item => <SwiperSlide key={item.title} className="">
          <div className="space-y-[14px] w-[244px] mx-auto my-[24px]">
            <div className="relative w-fit h-fit">
              <div className="absolute right-[8px] bottom-[8px] w-full h-full bg-transparent border border-[#CD986D] box-border rounded-t-[120px]"></div>
              <Image className="rounded-t-[120px]" src="/images/project-1.png" width={235} height={304} alt="" />
            </div>
            <p className="text-center text-[26px] leading-[26px] font-bold font-philosopher text-[#CD986D]">{item.title}</p>
            <p className="text-[12px] leading-[24px] font-normal font-montserrat text-[#121212]">{item.description}</p>
            <div className="flex items-center justify-center">
              <Button size="small">
                Contact
              </Button>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </SectionLayout>
  </section>);
}

export default ProjectPage;