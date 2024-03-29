import { Roboto, Nunito, Jost } from "@next/font/google";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { menuState } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";
const saira = Roboto({ weight: "700", subsets: ["latin"] });
const nunito = Nunito({ weight: "500", subsets: ["latin"] });
const jost = Jost({ weight: "700", subsets: ["latin"] });

function Header() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);

  const handleOpen = () => {
    setShowMenu(true);
  };

  return (

  
    <header className="flex items-center w-screen bg-black/20 h-16 md:px-4 lg:px-16 md:h-20 z-[100000]">

      <div className={`p-4 flex items-center ${jost.className}`}>
        <img
          src="/Ginger_art.png"
          alt="logo"
          className="w-12 h-12 object-contain md:w-14 md:h-14"
        />
        <h2 className="text-white text-xl">that.GingerArt</h2>
      </div>
      <div className={`hidden md:block ml-auto mr-6 ${nunito.className}`}>
        <ul className="flex space-x-8 text-white">
          <li className={`${saira.className} hover:scale-125 text-lg transition-all`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${saira.className} hover:scale-125 text-lg transition-all`}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className={`${saira.className} hover:scale-125 text-lg transition-all`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${saira.className} hover:scale-125 text-lg transition-all`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className="ml-auto mr-6 cursor-pointer md:hidden"
        onClick={handleOpen}
      >
        <Bars3Icon className="w-7 h-7 text-white" />
      </div>
    </header>
  );
}

export default Header;
