import { Satisfy } from "@next/font/google";
import Image from "next/image";
import Typewriter from "typewriter-effect";
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });
import { Nunito, Saira } from "@next/font/google";
const saira = Saira({
  weight:["700"],
  subsets : ["latin"],
})
export default function Wavy() {
  return (
    <div className="h-screen overflow-hidden w-screen bg-white flex flex-col items-center">
      <section className="Wavy">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="absolute flex flex-col items-center justify-center mt-36 z-[1000]">
        <div className="rounded-full flex flex-col justify-center">
          <Image
            alt="image"
            src={"/logo.jpg"}
            width={300}
            height={300}
            className="object-contain rounded-full"
          />
        </div>
       <div className={`${satisfy.className} text-6xl mt-4 text-black font-extrabold`}>
        <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("That.gingerArt")
         
       .pauseFor(3000)
       .deleteAll()
       .typeString("Welcomes You")
       .pauseFor(1000)
       .deleteAll()
       .typeString("That.gingerArt")
       .start();
       }}
       
       />
       </div>
       <div className="flex  mt-8">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2YMQrCQBBFXzprC2u9QsBK8BQpxNt4I29g6RFULK201cZCVgRtQtBJdidB/Q+2nccnu7OzASGEqCAHFsAK2AAXIPAlngwogO2zWNVKgatnBKzfFE4VxNUzAY6G4rFBXD1T4GosHhPE1TMETjWKNw3i6smMezU2iLunMBY8AHOg3yCEuyf70Ppeaw8MGgZoxZMbit+AcUSIVjwLg2AZGaIVz8ogmCUI4u7ZGQSPGzgWd8/ZIOglCOLuCSn7eJee8E9BQo3VmScoCPoiQVsLnRHUtUqo/aJ7BN3soXwwdEbQrIWmXzTGo/cIXbRFjSi4/0cQQggh+AnuEzNJL2yPVmMAAAAASUVORK5CYII=" alt="comma"  className="w-[30px] h-[20px]"/>
        <p className={`lg:text-5xl md:text-4xl text-xl  ${saira.className}`}>Not just painting clothes .. styling them</p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2XKw7CQBRFj67F1JHQDeCqECwB24S1dFHVONYAGByyhqAQ5GEwIMhjPi2Qe5Kxc3Ln8+YNCCGEEOIJSzxG85iCoB0xHS10R1DVekHlF70j6GW314uhO4J6LdT9ojYe/UcYoyyqRSFowVzE7MhXeewfghSOyc8JQhS5PZVDcEgQpMrtaRyCTYIgTW5P5xC0CYJ0OT01cHMI5pEh6pyeEjg6Jt9FhihzeSbAGjg5y+EqMEBWj304toEhsnvsg9EDswGC9CEe7+RXYBEYYhCPOVdoGRFiEI85zuo0MsQgHntT+kKr0ygeAy7A/tEOtAkeuzE9Qgh+nDsLDEkl96yZAAAAAABJRU5ErkJggg==" alt="comma" className="w-[30px] h-[20px]"/>
        </div>
      </div>
    </div>
  );
}
