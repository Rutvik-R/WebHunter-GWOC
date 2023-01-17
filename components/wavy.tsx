import { Satisfy } from "@next/font/google";
import Image from "next/image";
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Wavy() {
  return (
    <div className="h-screen overflow-hidden w-screen bg-white flex flex-col items-center">
      <section className="Wavy">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="absolute top-[50%] -translate-y-[40%] z-[10000]">
        <div className="rounded-full">
          <Image
            alt="image"
            src={"/logo.jpg"}
            width={300}
            height={300}
            className="object-contain rounded-full"
          />
        </div>
        <p className={`${satisfy.className} text-yellow-400 text-6xl mt-10`}>
          that.GingerArt
        </p>
      </div>
    </div>
  );
}
