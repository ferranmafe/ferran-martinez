import type { Job } from "../types"

type Props = {
  job: Job
}

export const ExperienceItem = ({job}: Props) => {
  return (
    <div className="flex gap-4 p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {job.logo && (
        <img 
          className="w-12 h-12 border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
          src={job.logo} 
          alt={job.company} 
        />
      )}

      <div className="flex grow flex-col">
        <p className="font-bold text-lg">{job.jobTitle}</p>
        <p className="font-semibold">{job.company}</p>
    </div>

    <div>
        <p className="font-bold">
          {job.endingDate 
            ? `${job.startingDate} - ${job.endingDate}`
            : `${job.startingDate} - Present`}
        </p>
      </div>
    </div>
  )
}