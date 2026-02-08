import { Spacer } from "@/components/Spacer";
import { EducationItem } from "./EducationItem";
import { EDUCATION } from "./constants";
import type { Education } from "./types";
import { SectionHeader } from "@/components/SectionHeader";

export const EducationSection = () => {
  return (
    <div>
      <Spacer top={12} bottom={12}>
        <SectionHeader>Education</SectionHeader>
      </Spacer>
      <div>
        {EDUCATION.map((education: Education) => (
          <>
            <EducationItem key={education.institution} education={education} />
            <div className="mt-4" />
          </>
        ))}
      </div>
    </div>
  );
};
