import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import AboutSection from "./aboutSection";

export default function Inicio() {
  return (
    <main className="h-full">
      <ServiceSection />
      <ContactSection />
      <AboutSection />
    </main>
  );
}