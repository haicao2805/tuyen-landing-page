import Image from "next/image";

interface ContactUsPageProps {

}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (<section className="bg-[#EEEEEE] h-screen relative z-0 overflow-hidden">
    <Image className="absolute bottom-[-310px] right-[-305px] -z-10" src="/images/background-circle-4.png" width={755} height={755} alt="" />
  </section>);
}

export default ContactUsPage;