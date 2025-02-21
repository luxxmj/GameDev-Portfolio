import blenderIcon from "../assets/Icons/tools/blenderIcon.png";
import PSIcon from "../assets/Icons/tools/PSIcon.png";
import roStudioIcon from "../assets/Icons/tools/roStudioIcon.png";
import unrealEngIcon from "../assets/Icons/tools/unrealEngIcon.png";
import VSCodeIcon from "../assets/Icons/tools/VSCodeIcon.png";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between py-6 ">
      <a href="/"
      className="flex flex-shrink-0 items-center">
        <h1 className="text-white ml-5 text-3xl font-orbitron">Mj | Luxxury Studios</h1>
      </a>

      {/* <div className="flex items-center justify-between gap-4 md:gap-6">
        <h2 className="underline text-white">Games</h2>
        <h2 className="underline text-white">Projects</h2>
        <h2 className="underline text-white">Contact</h2>
      </div> */}

      <div className="m-4 flex items-center justify-center gap-2 md:gap-4 text-2xl">
        <img src={roStudioIcon} alt='robloxStudio' className="w-8 h-8 md:w-10 md:h-10 hover:bg-blue-400" />
        <img src={unrealEngIcon} alt='unrealEngine' className="w-8 h-8 md:w-10 md:h-10 hover:bg-slate-800" />
        <img src={blenderIcon} alt='blender' className="w-8 h-8 md:w-10 md:h-10 hover:bg-orange-500" />
        <img src={PSIcon} alt='photoshop' className="w-8 h-8 md:w-10 md:h-10 hover:bg-purple-600" />
        <img src={VSCodeIcon} alt='vsCode' className="w-8 h-8 md:w-10 md:h-10 hover:bg-blue-800" />
      </div>
    </nav>
  );
};

export default NavBar;