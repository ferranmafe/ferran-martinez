import { Spacer } from "@/components/Spacer";
import { ExperienceItem } from "./ExperienceItem";
import { JOBS } from "./constants";
import type { Job } from "./types";
import { SectionHeader } from "@/components/SectionHeader";

export const ExperienceSection = () => {
  return (
    <section>
      <Spacer top={12} bottom={12}>
        <SectionHeader>Experience</SectionHeader>
      </Spacer>

      <div>
        {JOBS.map((job: Job) => (
          <>
            <ExperienceItem key={job.company} job={job} />
            <div className="mt-4" />
          </>
        ))}
      </div>
    </section>
  );
};
