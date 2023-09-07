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
        setTimeout(() => {
          dispatch(navActions.setSelected("#home"));
        }, 0);
        break;
      case 1:
        setTimeout(() => {
          dispatch(navActions.setSelected("#who"));
        }, 0);
        break;
      case 2:
        setTimeout(() => {
          dispatch(navActions.setSelected("#what"));
        }, 0);
        break;
      case 3:
        setTimeout(() => {
          dispatch(navActions.setSelected("#projects"));
        }, 0);
        break;
      case 4:
        setTimeout(() => {
          dispatch(navActions.setSelected("#contact"));
        }, 0);
        break;
      case 5:
        setTimeout(() => {
          dispatch(navActions.setSelected("#footer"));
        }, 0);
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
