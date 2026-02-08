import { EducationItem } from "./components/EducationItem";
import { ExperienceItem } from "./components/ExperienceItem";
import { EDUCATION, JOBS } from "./constants";
import type { Education, Job } from "./types";

export const AboutPage = () => {
  return (
    <div className="w-max-[1352px]">
      <div className="mt-12" />
      <div className="text-4xl text-center font-bold">Experience</div>
      <div className="mt-12" />
      <div>
        {JOBS.map((job: Job) => (
          <>
            <ExperienceItem key={job.company} job={job} />
            <div className="mt-4" />
          </>
        ))}
      </div>

      <div className="py-4" />

      <div className="text-4xl text-center font-bold">Education</div>
      <div className="mt-12" />
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
