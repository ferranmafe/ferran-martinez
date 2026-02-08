import { BlogPost } from "@/components/BlogPost";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "./components/Section";

export const HomePage = () => {
  return (
    <>
      <Section>
        <div className="text-center text-7xl font-bold">
          My name is{" "}
          <span className="bg-yellow-400 rounded-full px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Ferran Martínez
          </span>
        </div>
        <div className="text-center pt-16 text-2xl">
          I'm a software engineer based in Barcelona, currently working at{" "}
          <a
            href="https://www.perk.com"
            className="bg-lime-400 rounded-full px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Perk
          </a>
        </div>
      </Section>
      <Section>
        <SectionHeader>Posts</SectionHeader>
        <div className="py-4"></div>
        <div className="flex justify-between">
          <BlogPost
            title="Lorem ipsum dolor siamet at contra"
            date="October 2025"
            cover="https://i.redd.it/a5kgw9jfbpgg1.png"
          />
          <BlogPost
            title="Lorem ipsum dolor siamet at contra"
            date="October 2025"
            cover="https://i.redd.it/a5kgw9jfbpgg1.png"
          />
          <BlogPost
            title="Lorem ipsum dolor siamet at contra"
            date="October 2025"
            cover="https://i.redd.it/a5kgw9jfbpgg1.png"
          />
        </div>
      </Section>
    </>
  );
};
