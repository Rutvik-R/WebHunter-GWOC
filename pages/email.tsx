// // import React , { useRef } from "react";
// // import emailjs from '@emailjs/browser'

// // export default function ContactUs() {
// //     const form = useRef();
  
// //     const sendEmail = (e) => {
// //       e.preventDefault();
// //       emailjs.sendForm( 'service_7p74d9f' , 'template_cfqfjq9', form.current, 'CcviItm-4t-pal2z-')
// //         .then((result) => {
// //             console.log(result.text , form.current.user_img);
// //         }, (error) => {
// //             console.log(error.text);
// //         });
        
// //         alert("Done")
    
// //     };
  
// //     return (
// //       <form ref={form} onSubmit={sendEmail} className='grid' >
// //         <label className='mx-20'>Name</label>
// //         <input className="mx-20" type="text" name="user_name" />
// //         <label className="mx-20">Email</label>
// //         <input className="mx-20" type="email" name="user_email" />
// //         <label className="mx-20">Phone No</label>
// //         <input className="mx-20" type="number" name="user_phoneNo" />
// //         <label className="mx-20">Image</label>
// //         <input className="mx-20" type="file" name="user_img" 
// //  accept=".jpg, .png, .jpeg" />
// //         <label className="mx-20">Message</label>
// //         <textarea name="message" className="mx-20" />
// //         <input type="submit" value="Send" />
// //       </form>
// //     );
// //   };

// export default function Home() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         <a href="mailto:rutvikranpariya1221@gmail.com?subject={subject}&body={body}">send it</a> 
//       </h1>
//     )
//   }
  

// Your imports...
import UseEmail from "./api/useEmail";



// Example component
export default function App() {
  // You don't need to manage state by yourself
  // use the variables below
  const {
    loading,
    submitted,
    error,
    sendEmail
  } = UseEmail('rutvikranpariya1221@gmail.com');

  const sendExample = () => {
    // Can be any data, static and dynamic
    sendEmail({
      example_user: "rutvikranpariya1221@gmail.com",
      example_data: new Date().toISOString(),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ margin: "1rem 0", fontSize: '2rem' }}>
          { submitted && 'Done, email was sent!' }
          { error ? `Unexpected ${error}` : null}
          { loading && 'Email is being sent now...' }
        </div>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={sendExample}>Send test data</button>
        </div>
      </header>
    </div>
  );
}