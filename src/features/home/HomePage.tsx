import { Hero } from "./components/Hero";
import { Posts } from "./components/Posts";
import { Projects } from "./components/Projects";

export const HomePage = () => {
  return (
    <div className="w-screen flex flex-col">
      <Hero />
      <div className="border-t-2 border-black" />
      <Posts />
      <div className="border-t-2 border-black" />
      <Projects />
    </div>
  );
};
