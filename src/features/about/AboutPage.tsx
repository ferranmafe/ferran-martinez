import { Spacer } from "@/components/Spacer";
import { AboutIntroSection } from "./components/AboutIntroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";

export const AboutPage = () => {
  return (
    <div className="w-screen max-w-[1352px] px-4">
      <Spacer top={12} bottom={12}>
        <AboutIntroSection />
      </Spacer>

      <Spacer top={12} bottom={12}>
        <ExperienceSection />
      </Spacer>

      <Spacer top={12} bottom={12}>
        <EducationSection />
      </Spacer>

      <Spacer bottom={12} />
    </div>
  );
};
