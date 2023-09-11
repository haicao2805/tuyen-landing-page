"use client";

import SectionLayout from "@/components/SectionLayout";
import { useForm } from 'react-hook-form';
import { FormWrapper, TextInput, TextareaInput } from "@/components/form";
import Image from "next/image";
import Button from "@/components/Button";

interface ContactUsPageProps {

}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  const methods = useForm();

  const handleSubmit = async (data: any) => {
    console.log(data);
  }

  return (<section id="contact" className="bg-[#EEEEEE] h-screen relative z-0 overflow-hidden">
    <Image className="appMd:block hidden absolute bottom-[-310px] right-[-305px] -z-10" src="/images/background-circle-4.png" width={755} height={755} alt="" />
    <SectionLayout>
      <div className="h-full flex items-center justify-center gap-x-[70px]">
        <div className="appMd:w-[590px] space-y-[69px]">
          <p className="text-center text-[64px] leading-[64px] font-bold font-philosopher text-[#121212]">Contact Us</p>
          <FormWrapper methods={methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)} className="flex items-center justify-center flex-col gap-y-[20px]">
              <TextInput name="name" label="Name" />
              <TextInput name="email" label="Email" type="email" />
              <TextareaInput name="message" label="Message" />
              <Button type="submit">
                Send
              </Button>
            </form>
          </FormWrapper>
        </div>
        <Image className="appMd:block hidden w-[363px] h-auto" src="/images/contact-form-card.png" width={459} height={644} alt="" />
      </div>
    </SectionLayout>
  </section>);
}

export default ContactUsPage;