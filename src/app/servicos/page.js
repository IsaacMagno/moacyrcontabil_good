import BannerServiceSection from "./bannerServiceSection";
import ContactDoubtSection from "./contactDoubtSection";
import LocationSection from "./locationSection";

export default function Servicos() {
  return (
    <main className="h-full">
      <BannerServiceSection />
      <ContactDoubtSection />
      <LocationSection />
    </main>
  );
}