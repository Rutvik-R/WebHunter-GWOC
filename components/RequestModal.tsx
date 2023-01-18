import { modalState } from "../atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Saira, Roboto } from "@next/font/google";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const saira = Saira({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

function RequestModal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current == undefined) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_jrus7bt",
        "template_kn4xfha",
        form.current,
        "1krtHsQZWqU7BcsXH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
          return;
        }
      );
    alert("sended");
    setLoading(false);
    setSuccess(true);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl  overflow-y-scroll rounded-md scrollbar-hide overflow-auto"
    >
      <div className="h-full bg-white text-black p-3 px-5 overflow-y-scroll scrollbar-hide overflow-auto">
        <div className="flex items-center border-b-2 border-gray-200 pb-5 pt-2">
          <div className={`text-md ${saira.className}`}>Send a request</div>
          <div
            className="w-6 h-6 ml-auto cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="" />
          </div>
        </div>

        <form
          className="py-4 flex flex-col space-y-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Name</p>
            <input
              type="text"
              name="name"
              className="bg-transparent border-2 border-gray-400 outline-none focus:border-red-500 transition-colors delay-75 p-3"
            />
          </label>

          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Email</p>
            <input
              type="email"
              name="email_to"
              className="bg-transparent border-2 border-gray-400 outline-none focus:border-red-500 transition-colors delay-75 p-3"
            />
          </label>

          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Address</p>
            <textarea
              rows={4}
              name="address"
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
              name="boolean"
              onChange={() => setIsSelected((prev) => !prev)}
            />
          </label>

          <label className="flex flex-col">
            <p className={`${roboto.className} py-2`}>Specifications</p>
            <textarea
              rows={8}
              name="specs"
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
