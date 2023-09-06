"use client";

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { navActions } from "@/redux";
import ContactUsPage from "@/views/contact-us/ContactUsPage";
import HomePage from "@/views/home/HomePage";
import ProjectPage from "@/views/projects/ProjectPage";
import WhatPage from "@/views/what/WhatPage";
import WhoPage from "@/views/who/WhoPage";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const handleScroll = (event: React.UIEvent) => {
    const pos = Math.round(event.currentTarget.scrollTop / window.screen.height);
    switch (pos) {
      case 0:
        dispatch(navActions.setSelected("#home"));
        break;
      case 1:
        dispatch(navActions.setSelected("#who"));
        break;
      case 2:
        dispatch(navActions.setSelected("#what"));
        break;
      case 3:
        dispatch(navActions.setSelected("#projects"));
        break;
      case 4:
        dispatch(navActions.setSelected("#contact"));
        break;
      case 5:
        dispatch(navActions.setSelected("#footer"));
        break;
    }
  };

  return (
    <main className="fullpage-container" onScroll={handleScroll}>
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
