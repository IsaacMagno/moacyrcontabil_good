import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import DreamSection from "../../components/commum-sections/dreamSection"; 
import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import PreventionSection from "./preventionSection";
import InfoSection from "./infoSection";
import { metadataInicial } from "@/helpers/metadata";

export const metadata = metadataInicial;

export default function Inicio() {
  return (
    <div>
      <MainSection>
        <HeroSection />
        <InfoSection />
        <PreventionSection />
      </MainSection>
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </div>
  );
}
