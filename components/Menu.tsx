import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Inter, Saira } from "@next/font/google";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/modalAtom";
import { AnimatePresence, motion } from "framer-motion";
const roboto = Inter({
  weight: ["400"],
  subsets: ["latin"],
});
const saira = Saira({
  weight: ["400"],
  subsets: ["latin"],
});

function Menu() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);
  const handleClose = (e: any) => {
    setShowMenu(false);
  };
  return (
    <div
      className="fixed w-screen h-screen bg-[black]/25 lg:hidden z-[1000000000]"
      onClick={handleClose}
    >
      <AnimatePresence>
        <motion.div
          key="modal4"
          className="absolute h-screen w-[330px] bg-white rounded-l-lg right-0 p-4 px-6 flex flex-col"
          onClick={(e) => e.stopPropagation()}
          initial={{ right: "-350px", opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          exit={{ right: "-350px", opacity: 0 }}
        >
          <header className="flex justify-between items-center pb-6">
            <h2 className={`text-black text-lg uppercase ${saira.className}`}>
              that.GingerArt
            </h2>
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={handleClose}
            />
          </header>
          <hr />
          <div
            className={`flex flex-col py-3 space-y-4 flex-1 ${roboto.className}`}
          >
            <a className="linkMenu">
              <Link href="/" onClick={handleClose}>
                Home
              </Link>
            </a>
            <a className="linkMenu">
              <Link href="/gallery" onClick={handleClose}>
                Gallery
              </Link>
            </a>
            <a className="linkMenu">
              <Link href="/about" onClick={handleClose}>
                About
              </Link>
            </a>
            <a className="linkMenu">
              <Link href="/contact" onClick={handleClose}>
                Contact
              </Link>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Menu;
