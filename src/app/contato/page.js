"use client";
import BannerContactSection from "./bannerContactSection";
import ContactDoubtSection from "./contactDoubtSection";
import LocationSection from "./locationSection";

import ReactPageScroller from "react-page-scroller";

export default function Contato() {
  return (
    <main className="h-full">
      <BannerContactSection />
      <ContactDoubtSection />
      <LocationSection />
    </main>
  );
}
