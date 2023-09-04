import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import ContactUsPage from "@/views/contact-us/ContactUsPage";
import HomePage from "@/views/home/HomePage";
import ProjectPage from "@/views/projects/ProjectPage";
import WhatPage from "@/views/what/WhatPage";
import WhoPage from "@/views/who/WhoPage";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HomePage />
      <WhoPage />
      <WhatPage />
      <ProjectPage />
      <ContactUsPage />
      <Footer />
    </main>
  )
}
