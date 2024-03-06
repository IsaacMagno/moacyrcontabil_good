import BannerAboutSection from "./bannerAboutSection";
import ResumeSection from "./resumeSection";
import StorySection from "./storySection";

export default function Sobre() {
  return (
    <main className="h-full">
      <BannerAboutSection />
      <StorySection />
      <ResumeSection />
    </main>
  );
}
