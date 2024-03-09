"use client";
import ContactSection from "@/components/commum-sections/contactSection";
import BannerServicesSection from "./bannerServicesSection";
import DreamSection from "@/components/commum-sections/dreamSection";
import ReasonsSection from "./reasonsSection";
import BudgetSection from "./budgetSection";
import { metadataServices } from "../../helpers/metadata";

export const metadata = metadataServices;

export default function Servicos() {
  return (
    <main className="h-full">
      <BannerServicesSection />
      <BudgetSection />
      <ContactSection />
      <DreamSection />
      <ReasonsSection />
    </main>
  );
}
