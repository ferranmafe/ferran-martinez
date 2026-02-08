import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Spacer } from "@/components/Spacer";

type Project = {
  title: string;
  url: string;
  description: string;
  cover: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Example Project 1",
    url: "https://example.com",
    description: "A brief description of this amazing project",
    cover: "https://i.redd.it/a5kgw9jfbpgg1.png",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Example Project 2",
    url: "https://example.com",
    description: "Another interesting project with cool features",
    cover: "https://i.redd.it/a5kgw9jfbpgg1.png",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "Example Project 3",
    url: "https://example.com",
    description: "An innovative solution to a complex problem",
    cover: "https://i.redd.it/a5kgw9jfbpgg1.png",
    tags: ["JavaScript", "CSS"],
  },
];

export const Projects = () => {
  return (
    <section className="flex justify-center bg-[#e8e4dc]">
      <div className="py-20 w-full max-w-[1352px] px-4">
        <SectionHeader>Projects</SectionHeader>
        <Spacer top={8} />
        <div className="flex justify-between gap-4">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.url}
                title={project.title}
                url={project.url}
                description={project.description}
                cover={project.cover}
                tags={project.tags}
              />
            ))
          ) : (
            <p className="text-gray-600 text-lg">No projects available</p>
          )}
        </div>
        <div className="flex justify-center pt-8">
          <a
            href="/projects"
            className="bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  );
};
