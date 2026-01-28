import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CraftsSection from "@/components/sections/CraftsSection";
import BlogSection from "@/components/sections/BlogSection";
import { BlurFade } from "@/components/layout/BlurFadeWrapper";

const BLUR_FADE_DELAY = 0.05;

export default async function Home() {
  return (
    <div className="space-y-16 pt-8">
      <BlurFade delay={BLUR_FADE_DELAY * 1}>
        <HeroSection />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ExperienceSection />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <CraftsSection />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <BlogSection />
      </BlurFade>
    </div>
  );
}
