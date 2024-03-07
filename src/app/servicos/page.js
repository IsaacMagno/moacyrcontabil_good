"use client";
import ContactSection from "@/components/commum-sections/contactSection";
import BannerServicesSection from "./bannerServicesSection";
import DreamSection from "@/components/commum-sections/dreamSection";
import ReasonsSection from "./reasonsSection";

export default function Servicos() {
  return (
    <main className="h-full">
      <BannerServicesSection />
      <ContactSection />
      <DreamSection />
      <ReasonsSection />
    </main>
  );
}
