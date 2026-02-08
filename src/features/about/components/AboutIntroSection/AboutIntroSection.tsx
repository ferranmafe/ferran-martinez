import { SectionHeader } from "@/components/SectionHeader";
import { Spacer } from "@/components/Spacer";

export const AboutIntroSection = () => {
  return (
    <div className="w-full">
      <SectionHeader>About</SectionHeader>
      <Spacer top={8} />

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="p-6 border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-base leading-relaxed mb-4">
            I'm Ferran, a software engineer who loves building things for the
            web. I'm passionate about creating accessible, performant, and
            beautiful user interfaces.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Based in Barcelona, I currently work at{" "}
            <span className="bg-lime-400 px-2 py-1 rounded border-2 border-black font-bold">
              Perk
            </span>{" "}
            where I build products that help people do their best work.
          </p>
          <p className="text-base leading-relaxed">
            When I'm not coding, you'll find me hiking in the Pyrenees, reading
            sci-fi, or working through my impossible list.
          </p>
        </div>

        {/* Right column - Profile picture */}
        <div className="aspect-square border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/src/assets/images/profile.jpeg"
            alt="Ferran Martinez"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
