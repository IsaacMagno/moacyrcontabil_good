"use client";
import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import DreamSection from "../../components/commum-sections/dreamSection";
import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import ReactPageScroller from "react-page-scroller";
import {
  serviceSectionText,
  serviceSectionText2,
} from "@/helpers/servicesSectionText";
import InfoCard from "../../components/layout/InfoCard";

export default function Inicio() {
  return (
    // <ReactPageScroller>
    <div>
      <HeroSection />
      <InfoCard serviceSectionText={serviceSectionText} />
      {/* <InfoCard serviceSectionText={serviceSectionText2} /> */}
      <MainSection />
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </div>
    // </ReactPageScroller>
  );
}
