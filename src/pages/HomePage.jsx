import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Logomarquee from "../components/Logomarquee";
import WhatWeDoSection from "../components/WhatWeDo";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import LetsTalkSection from "../components/LetsTalkSection";
// import { FAQSection } from "@/components/FAQSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Logomarquee />
      <WhatWeDoSection />
      <AboutSection />
      <ProjectsSection />
      <ServiceSection />
      <FAQSection />
      <LetsTalkSection />
      <Footer />
    </>
  );
};

export default HomePage;
