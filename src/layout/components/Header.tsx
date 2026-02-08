import { GitHub, LinkedIn } from "@/assets/icons";
import profilePic from "@/assets/images/profile.jpeg";

export const Header = () => {
  return (
    <header className="p-8 h-20 flex justify-center bg-pink-400 border-b-2 border-black">
      <div className="max-w-[1354px] w-[1354px] flex">
        <div className="flex justify-center items-center">
          <img
            className="h-12 w-12 border-solid border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            src={profilePic}
            alt="profilePicture"
          />
          <span className="font-bold p-4">Ferran Martínez</span>
        </div>

        <nav className="flex grow justify-center items-center">
          <ul className="flex gap-10">
            <li>
              <a
                className="px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                href="/impossible-list"
              >
                Impossible List
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 justify-center items-center">
          <a
            className="flex justify-center items-center rounded-sm bg-white h-12 w-12 border-solid border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            href="https://www.linkedin.com/in/ferran-martinez-felipe/"
          >
            <LinkedIn />
          </a>
          <a
            className="flex justify-center items-center rounded-sm bg-white h-12 w-12 border-solid border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            href="https://github.com/ferranmafe/"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  );
};
