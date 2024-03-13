import ContactSection from "@/components/commum-sections/contactSection";
import BannerServicesSection from "./bannerServicesSection";
import DreamSection from "@/components/commum-sections/dreamSection";
import ReasonsSection from "./reasonsSection";
import BudgetSection from "./budgetSection";
import { metadataServices } from "../../helpers/metadata";
import InfoSection from "@/components/layout/infoSection";

export const metadata = metadataServices;

export default function Servicos() {
  return (
    <main className="h-full">
      <BannerServicesSection />
      {/* <BudgetSection /> */}
      <InfoSection />
      <DreamSection />
      <ReasonsSection />
    </main>
  );
}
