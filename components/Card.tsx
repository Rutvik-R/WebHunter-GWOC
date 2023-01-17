import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

interface types {
  img: string;
}

function Card({ img }: types) {
  const [visibility, setVisibility] = useState<boolean>(false);
  const handleModalRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setVisibility(false);
  };

  const handleOpen = (e: any) => {
    e.stopPropagation();
    setVisibility(true);
    if (handleModalRef.current) {
      // handleModalRef.current.className = "";
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex w-full md:h-full p-2 flex-col md:flex-row justify-center items-center">
      <div
        className={`lg:w-[300px] lg:h-[90%] md:w-[300px] md:h-[80%] w-[85vw] h-[400px] rounded-2xl overflow-hidden ${
          visibility && "md:rounded-r-none rounded-b-none"
        }`}
        onClick={handleOpen}
      >
        <div
          className={`w-full h-full rounded-2xl bg-cover bg-no-repeat boxing flex flex-col hover:scale-105 transition-all ${
            visibility && "md:rounded-r-none rounded-b-none"
          }`}
          style={{ backgroundImage: `url(/${img})` }}
        >
          <AnimatePresence>
            {!visibility && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col w-full h-full"
              >
                <p className="text-white text-sm p-6 flex-grow flex items-end">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="h-20 px-6 flex items-center">
                  <button
                    className="bg-white p-2 rounded-xl text-sm min-w-full text-black"
                    onClick={openModal}
                  >
                    Request Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {visibility && (
          <motion.div
            key="modal2"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "350px", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className={`hidden md:flex lg:h-[90%] md:h-[80%] overflow-hidden rounded-2xl bg-[#d9d9d9] p-0 flex-col ${
              visibility && "rounded-l-none"
            }`}
          >
            <div className="flex mx-6 mt-6">
              <h1 className="text-3xl flex-grow text-gray-800 font-semibold">
                Category Title
              </h1>
              <div className="w-6">
                <XMarkIcon
                  className="w-6 h-6 text-black"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className="text-sm tracking-wide py-4 flex-grow mx-6 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button
              className="bg-red-500 p-2 mx-6 mb-6 rounded-xl text-sm text-white"
              onClick={openModal}
              style={showModal ? { backgroundColor: "green" } : {}}
            >
              Request Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visibility && (
          <motion.div
            key="modal2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "500px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden flex w-[85vw] overflow-hidden rounded-2xl bg-[#d9d9d9] p-0 flex-col ${
              visibility && "rounded-t-none"
            }`}
          >
            <div className="flex mx-6 mt-6">
              <h1 className="text-3xl flex-grow text-gray-800 font-semibold">
                Category Title
              </h1>
              <div className="w-6">
                <XMarkIcon
                  className="w-6 h-6 text-black"
                  onClick={handleClose}
                />
              </div>
            </div>
            <p className="text-sm tracking-wide py-4 flex-grow mx-6 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button
              className="bg-red-500 p-2 mx-6 mb-6 rounded-xl text-sm text-white"
              onClick={openModal}
            >
              Request Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Card;
