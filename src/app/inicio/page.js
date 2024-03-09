"use client";
import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import AboutSection from "./aboutSection";
import DreamSection from "@/components/commum-sections/dreamSection";
import HeroSection from "./heroSection";
import InfoCard from "@/components/layout/InfoCard";
import ReactPageScroller from "react-page-scroller";
import {
  serviceSectionText,
  serviceSectionText2,
} from "@/helpers/servicesSectionText";

export default function Inicio() {
  return (
    // <ReactPageScroller>
    <div>
      <HeroSection />
      <InfoCard serviceSectionText={serviceSectionText} />
      {/* <InfoCard serviceSectionText={serviceSectionText2} /> */}
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </div>
    // </ReactPageScroller>
  );
}
