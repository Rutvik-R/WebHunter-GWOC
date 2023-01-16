import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function App(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_7p74d9f', 'template_cfqfjq9', form.current, 'CcviItm-4t-pal2z-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            alert(error.text);
            return;
        });
        if(form.current.resend.checked){
            console.log(form.current.email_from.value)
            emailjs.sendForm('service_7p74d9f', 'template_8n4948s', form.current, 'CcviItm-4t-pal2z-')
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
        <div className="h-screen w-screen bg-red-500 bg-repeat">
            <div className="absolute bg-amber-500 h-5/6 w-1/2 top-20 right-10 overflow-y-scroll ">
                <div className="text-center my-2 text-6xl ">
                    Contact Us
                </div>
                <div className="">
                
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Enter your name"         required  className="block h-10 mx-28 my-10 w-2/3" />
                        <input type="email" name="email_from" placeholder="Enter your email"        required  className="block h-10 mx-28 my-10 w-2/3" />
                        <textarea name="message" placeholder="Enter your message" required  className="block mx-28 my-10 w-2/3 h-32 max-h-32 overflow-y-scroll" />
                        <input type="hidden" name="email_to" value='rutvikranpariya1221@gmail.com' display="none" />
                        <input type="checkbox" name="resend" className="ml-28 mr-5 inline my-3" /> Do you want copy of your message as email ?
                        <input type="submit" value="Send" className="block text-3xl mx-28 my-10 w-2/3 text-cyan-800 font-semibold"/>
                    </form>
                </div>
            </div>
            <div className="absolute h-3/4 w-1/2 top-20 left-10 ">
                <div className="bg-black h-2/6 w-5/12 absolute top-14  left-10    text-center ">   <a href=''   className='align-middle'><img src="" alt='instagram png' className='h-3/4' /> Instra</a> </div>
                <div className="bg-black h-2/6 w-5/12 absolute top-14 right-10    text-center ">   <a href=''   className='align-middle'><img src="" alt='email png' className='h-3/4' /> Email</a> </div>
                <div className="bg-black h-2/6 w-5/12 absolute bottom-14 left-10  text-center ">   <a href=''   className='align-middle'><img src="" alt='location jpg' className='h-3/4' /> Address</a> </div>
                <div className="bg-black h-2/6 w-5/12 absolute bottom-14 right-10 text-center ">   <a href=''   className='align-middle'><img src="" alt='call sym' className='h-3/4' /> phone No</a> </div>
            </div>
        </div>
    )

}