/* eslint-disable no-unused-vars */
// import React from "react";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Logomarquee from "../components/Logomarquee";
// import WhatWeDoSection from "../components/WhatWeDo";
// import AboutSection from "../components/AboutSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ServiceSection from "../components/ServiceSection";
// import Footer from "../components/Footer";
// import FAQSection from "../components/FAQSection";
// import LetsTalkSection from "../components/LetsTalkSection";

// const HomePage = () => {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Logomarquee />
//       <WhatWeDoSection />
//       <AboutSection />
//       <ProjectsSection />
//       <ServiceSection />
//       <FAQSection />
//       <LetsTalkSection />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
import React, { Suspense, useEffect, useCallback } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Lenis from "lenis";

// Lazy load major sections
const Hero = React.lazy(() => import("../components/Hero"));
const Logomarquee = React.lazy(() => import("../components/Logomarquee"));
const WhatWeDoSection = React.lazy(() => import("../components/WhatWeDo"));
const AboutSection = React.lazy(() => import("../components/AboutSection"));
const ProjectsSection = React.lazy(() =>
  import("../components/ProjectsSection")
);
const ServiceSection = React.lazy(() => import("../components/ServiceSection"));
const FAQSection = React.lazy(() => import("../components/FAQSection"));
const LetsTalkSection = React.lazy(() =>
  import("../components/LetsTalkSection")
);
const Footer = React.lazy(() => import("../components/Footer"));

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomePage = () => {
  // Lenis setup for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => t * (2 - t),
      smooth: true,
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll helper passed to Header to scroll to sections with Lenis
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Hero />
        </motion.div>
        <motion.div
          id="logomarquee"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Logomarquee />
        </motion.div>
        <motion.div
          id="whatweoffer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <WhatWeDoSection />
        </motion.div>
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <AboutSection />
        </motion.div>
        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <ServiceSection />
        </motion.div>
        <motion.div
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <FAQSection />
        </motion.div>
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <LetsTalkSection />
        </motion.div>
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
