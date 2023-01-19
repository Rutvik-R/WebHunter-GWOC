import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Nunito } from "@next/font/google";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
const nunito = Nunito({ subsets: ["latin"] });

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current == undefined) return;

    emailjs
      .sendForm(
        "service_7f2mzgh",
        "template_alnojz6",
        form.current,
        "KpUN9e-HpNZ65qr92"
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
    // console.log(form.current.resend.checked);
    if (form.current.resend.checked) {
      console.log(form.current.email_from.value);
      emailjs
        .sendForm(
          "service_7f2mzgh",
          "template_u03j972",
          form.current,
          "KpUN9e-HpNZ65qr92"
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
    }

    alert("Request Sent");
    form.current.reset();
  };

  return (
    <>
      <div className="flex-grow flex flex-col py-8 px-4 lg:flex-row lg:items-center justify-center items-center">
        <div className="max-md:hidden p-3 gap-5 flex flex-col items-center z-10">
          <div className="flex gap-5">
            <div className="w-48 h-48 shrink-0 bg-white/60 flex flex-col justify-center items-center p-3 gap-3">
              <PhoneIcon className="w-10 h-10 text-blue-600" />
              <p className="">+91 81781 99436</p>
            </div>
            <div className="w-48 h-48 shrink-0 bg-white/60 flex flex-col justify-center items-center p-3 gap-3">
              <EnvelopeIcon className="w-10 h-10 text-blue-600" />
              <p className="w-full break-words text-sm">
                nancy1292002@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-48 h-48 shrink-0 bg-white/60 flex flex-col justify-center items-center p-3 gap-3">
              <AiFillInstagram className="w-10 h-10 text-blue-600" />
              <Link
                href="https://instagram.com/that.gingerart?igshid-OGQ2MjdiOTE="
                target={"_blank"}
                className=""
              >
                that.gingerart
              </Link>
            </div>
            <div className="w-48 h-48 shrink-0 bg-white/60 flex flex-col justify-center items-center p-3 gap-3">
              <AiFillLinkedin className="w-10 h-10 text-blue-600" />
              <p className="">that.gingerart</p>
            </div>
          </div>
        </div>

        {/* Contact Us Part */}
        <div className="bg-black/60 max-md:mt-[80px] text-white flex flex-col items-center w-full py-4 rounded-md relative -mt-16 lg:mt-0 pt-20 px-6 md:max-w-[500px] lg:max-w-[600px] lg:px-20 lg:relative lg:-ml-10">
          <h1
            className={`text-4xl pb-3 uppercase font-semibold ${nunito.className}`}
          >
            Contact Us
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-5 py-3 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required={true}
              className="bg-blue-300/30 p-3 rounded-md w-full outline-none focus:border-red-500 border-2 border-transparent"
            />
            <input
              type="text"
              name="email_from"
              placeholder="Enter your email"
              required={true}
              className="bg-blue-300/30 p-3 rounded-md w-full outline-none focus:border-red-500 border-2 border-transparent"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="bg-blue-300/30 p-3 rounded-md w-full outline-none focus:border-red-500 border-2 border-transparent"
            />
            <input
              type="hidden"
              name="email_to"
              value="webhunters4@gmail.com"
            />
            <label className="flex items-center w-full space-x-3 px-2">
              <input type="checkbox" name="resend" />
              <p className="">Do you want copy of your message as email ?</p>
            </label>
            <input
              type="submit"
              value="Send"
              className={`bg-blue-500 cursor-pointer rounded-md p-3 text-xl ${nunito.className} font-semibold uppercase tracking-wide`}
            />
          </form>
        </div>
        <div className="md:hidden w-full bg-white mt-10 p-2 rounded-md">
          <div className="shrink-0 bg-white/60 flex justify-center items-center p-3 gap-3">
            <PhoneIcon className="w-6 h-6 text-blue-600" />
            <p className="">+91 81781 99436</p>
          </div>
          <div className="shrink-0 bg-white/60 flex justify-center items-center p-3 gap-3">
            <EnvelopeIcon className="w-6 h-6 text-blue-600" />
            <p className="">nancy1292002@gmail.com</p>
          </div>
          <div className="shrink-0 bg-white/60 flex justify-center items-center p-3 gap-3">
            <AiFillInstagram className="w-6 h-6 text-blue-600" />
            <Link
              className=""
              href="https://instagram.com/that.gingerart?igshid-OGQ2MjdiOTE="
              target={"_blank"}
            >
              that.gingerart
            </Link>
          </div>
          <div className="shrink-0 bg-white/60 flex justify-center items-center p-3 gap-3">
            <AiFillLinkedin className="w-6 h-6 text-blue-600" />
            <p className="">that.gingerart</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
{
  /* <div className="absolute bg-black/20 h-5/6 w-1/2 top-20 right-10 overflow-y-scroll ">
        <div className="text-center my-2 text-6xl ">Contact Us</div>
        <div className="">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="block h-10 mx-28 my-10 w-2/3 rounded-lg outline-none px-4"
            />
            <input
              type="email"
              name="email_from"
              placeholder="Enter your email"
              required
              className="block h-10 mx-28 my-10 w-2/3 rounded-lg outline-none px-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="block mx-28 my-10 w-2/3 h-32 max-h-32 overflow-y-scroll rounded-lg outline-none px-4 py-2"
            />
            <input
              type="hidden"
              name="email_to"
              value="webhunters4@gmail.com"
            />
            <input
              type="checkbox"
              name="resend"
              className="ml-28 mr-5 inline my-3"
            />{" "}
            Do you want copy of your message as email ?
            <input
              type="submit"
              value="Send"
              className="block text-3xl mx-28 my-10 w-2/3 text-cyan-800 font-semibold bg-slate-200 border-2 rounded-3xl py-1"
            />
          </form>
        </div>
      </div>
      <div className="lg:absolute h-3/4 w-1/2 top-20 left-10 ">
        <div className="bg-black h-2/6 w-5/12 absolute top-14  left-10    text-center ">
          {" "}
          <a href="" className="align-middle">
            <img src="" alt="instagram png" className="h-3/4" /> Instra
          </a>{" "}
        </div>
        <div className="bg-black h-2/6 w-5/12 absolute top-14 right-10    text-center ">
          {" "}
          <a href="" className="align-middle">
            <img src="" alt="email png" className="h-3/4" /> Email
          </a>{" "}
        </div>
        <div className="bg-black h-2/6 w-5/12 absolute bottom-14 left-10  text-center ">
          {" "}
          <a href="" className="align-middle">
            <img src="" alt="location jpg" className="h-3/4" /> Address
          </a>{" "}
        </div>
        <div className="bg-black h-2/6 w-5/12 absolute bottom-14 right-10 text-center ">
          {" "}
          <a href="" className="align-middle">
            <img src="" alt="call sym" className="h-3/4" /> phone No
          </a>{" "}
        </div>
      </div> */
}
