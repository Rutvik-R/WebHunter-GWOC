import React , { useRef } from "react";
import emailjs from '@emailjs/browser'

export default function ContactUs() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm( 'service_7p74d9f' , 'template_cfqfjq9', form.current, 'CcviItm-4t-pal2z-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        alert("Done")
    
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className='grid' >
        <label className='mx-20'>Name</label>
        <input className="mx-20" type="text" name="user_name" />
        <label className="mx-20">Email</label>
        <input className="mx-20" type="email" name="user_email" />
        <label className="mx-20">Phone No</label>
        <input className="mx-20" type="number" name="user_phoneNo" />
        <label className="mx-20">Message</label>
        <textarea name="message" className="mx-20" />
        <input type="submit" value="Send" />
      </form>
    );
  };
