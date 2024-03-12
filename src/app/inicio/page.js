import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import DreamSection from "../../components/commum-sections/dreamSection";
import InfoCard from "../../components/layout/InfoCard";
import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import { serviceSectionText } from "@/helpers/servicesSectionText";
import { metadataInicial } from "@/helpers/metadata";

export const metadata = metadataInicial;

export default function Inicio() {
  return (
    <div>
      <HeroSection />
      <InfoCard serviceSectionText={serviceSectionText} />
      <MainSection />
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </div>
  );
}
