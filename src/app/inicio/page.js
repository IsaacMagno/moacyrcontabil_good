"use client";
import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import AboutSection from "./aboutSection";
import DreamSection from "@/components/commum-sections/dreamSection";

import ReactPageScroller from "react-page-scroller";

export default function Inicio() {
  return (
    <ReactPageScroller>
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </ReactPageScroller>
  );
}
