import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import AboutSection from "./aboutSection";
import DreamSection from "@/components/commum-sections/dreamSection";

export default function Inicio() {
  return (
    <main className="h-full">
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </main>
  );
}