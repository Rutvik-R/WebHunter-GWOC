import Header from "@/components/Header";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current == undefined) return;

    emailjs.sendForm('service_7f2mzgh', 'template_alnojz6', form.current, 'KpUN9e-HpNZ65qr92')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        alert(error.text);
        return;
      });
    // console.log(form.current.resend.checked);
    if (form.current.resend.checked) {
      console.log(form.current.email_from.value)
      emailjs.sendForm('service_7f2mzgh', 'template_u03j972', form.current, 'KpUN9e-HpNZ65qr92')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          alert(error.text);
          return;
        });

    }

    alert('sended')

  };

  return (

    <>
      <div className='container1 overflow-hidden w-screen h-screen'>
        <div className="bottom_particles w-screen overflow-hidden">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>

          <div className="h-screen w-screen overflow-hidden">
          <Header />
            <div className="absolute bg-black/20 h-5/6 w-1/2 top-20 right-10 overflow-y-scroll ">
              <div className="text-center my-2 text-6xl ">
                Contact Us
              </div>
              <div className="">

                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="name" placeholder="Enter your name" required className="block h-10 mx-28 my-10 w-2/3 rounded-lg outline-none px-4" />
                  <input type="email" name="email_from" placeholder="Enter your email" required className="block h-10 mx-28 my-10 w-2/3 rounded-lg outline-none px-4" />
                  <textarea name="message" placeholder="Enter your message" required className="block mx-28 my-10 w-2/3 h-32 max-h-32 overflow-y-scroll rounded-lg outline-none px-4 py-2" />
                  <input type="hidden" name="email_to" value='webhunters4@gmail.com' />
                  <input type="checkbox" name="resend" className="ml-28 mr-5 inline my-3" /> Do you want copy of your message as email ?
                  <input type="submit" value="Send" className="block text-3xl mx-28 my-10 w-2/3 text-cyan-800 font-semibold bg-slate-200 border-2 rounded-3xl py-1" />
                </form>
              </div>
            </div>
            <div className="lg:absolute h-3/4 w-1/2 top-20 left-10 ">
              <div className="bg-black h-2/6 w-5/12 absolute top-14  left-10    text-center ">   <a href='' className='align-middle'><img src="" alt='instagram png' className='h-3/4' /> Instra</a> </div>
              <div className="bg-black h-2/6 w-5/12 absolute top-14 right-10    text-center ">   <a href='' className='align-middle'><img src="" alt='email png' className='h-3/4' /> Email</a> </div>
              <div className="bg-black h-2/6 w-5/12 absolute bottom-14 left-10  text-center ">   <a href='' className='align-middle'><img src="" alt='location jpg' className='h-3/4' /> Address</a> </div>
              <div className="bg-black h-2/6 w-5/12 absolute bottom-14 right-10 text-center ">   <a href='' className='align-middle'><img src="" alt='call sym' className='h-3/4' /> phone No</a> </div>
            </div>
          </div>
        </div>

      </div>

    </>

  )

}