import type { Education } from "../types"

type Props = {
  education: Education
}

export const EducationItem = ({education}: Props) => {
  return (
    <div className="flex gap-4 p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {education.logo && (
        <img 
          className="w-12 h-12 border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
          src={education.logo} 
          alt={education.institution} 
        />
      )}

      <div className="flex grow flex-col">
        <p className="font-bold text-lg">{education.title}</p>
        <p className="font-semibold">{education.institution}</p>
    </div>

    <div>
        <p className="font-bold">
          {education.endingDate 
            ? `${education.startingDate} - ${education.endingDate}`
            : `${education.startingDate} - Present`}
        </p>
      </div>
    </div>
  )
}