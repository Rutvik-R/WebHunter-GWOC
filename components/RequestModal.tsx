import { modalState } from "../atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Saira, Roboto } from "@next/font/google";
import { useState } from "react";
const saira = Saira({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

function RequestModal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <div className="h-full bg-white text-black p-3 px-5 overflow-y-scroll">
        <div className="flex items-center border-b-2 border-gray-200 pb-5 pt-2">
          <div className={`text-md ${saira.className}`}>Send a request</div>
          <div
            className="w-6 h-6 ml-auto cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="" />
          </div>
        </div>

        <form className="py-4 flex flex-col space-y-4">
          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Name</p>
            <input
              type="text"
              className="bg-transparent border-2 border-gray-400 outline-none focus:border-red-500 transition-colors delay-75 p-3"
            />
          </label>

          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Address</p>
            <textarea
              rows={4}
              className="bg-transparent border-2 border-gray-400 outline-none focus:border-red-500 transition-colors delay-75 p-3"
            ></textarea>
          </label>

          <label className="flex items-center space-x-4">
            <p className={`${roboto.className} py-2`}>
              Will you be providing the cloth?
            </p>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => setIsSelected((prev) => !prev)}
            />
          </label>

          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Specifications</p>
            <textarea
              rows={8}
              className="bg-transparent border-2 border-gray-400 outline-none focus:border-red-500 transition-colors delay-75 p-3"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-red-500 rounded-lg text-white p-3"
          >
            Send Request
          </button>
        </form>
      </div>
    </MuiModal>
  );
}

export default RequestModal;
