import { PatternBackground } from "./PatternBackground";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative pt-60 pb-40">
        <PatternBackground />
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

        <div className="flex justify-center gap-6 pt-12">
          <a
            href="/blog"
            className="bg-pink-500 text-white text-xl font-bold px-8 py-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Read my blog
          </a>
          <a
            href="/about"
            className="bg-white text-black text-xl font-bold px-8 py-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            About me
          </a>
        </div>
      </div>
    </section>
  );
};
