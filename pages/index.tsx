import Header from "../components/Header";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Card from "../components/Card";
import { useEffect, useRef } from "react";
import LastContainer from "../components/LastContainer";
import { Satisfy } from "@next/font/google";
import RequestModal from "../components/RequestModal";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (mainRef.current && window.innerWidth > 768) {
  //     mainRef.current.addEventListener("wheel", (e) => {
  //       e.preventDefault();
  //       if (mainRef.current) {
  //         mainRef.current.scrollLeft += 4 * e.deltaY;
  //         // mainRef.current.scrollLeft += 3 * e.deltaX;
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-scroll">
      <div>
        <div className="h-screen w-full space-y-7 bg-green-600">
          <div className="flex  justify-center space-x-10 pt-4">
            <a className="text-xl" href="">
              Home
            </a>
            <a className="text-xl" href="">
              About
            </a>
            <a className="text-xl" href="">
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center justify-center  w-full space-y-2 ">
            <img
              src="/logo.jpg"
              width={500}
              height={500}
              className="rounded-full"
            />
            <p className={`text-6xl ${satisfy.className} text-yellow-400`}>
              That.gingerart
            </p>
          </div>
        </div>

        <div className="w-screen h-screen">
          <Head>
            <title>Home | that.GingerArt</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="w-screen md:h-screen flex flex-col bg-[#404EED]">
            {/* <Header /> */}
            <RequestModal />
            <div
              ref={mainRef}
              className="scroll-smooth md:snap-mandatory flex flex-col md:flex-row overflow-x-scroll flex-grow md:items-center"
            >
              <MainContainer />
              <div className="py-8 md:flex justify-center items-center h-full">
                <Card img={"pic_1.jpeg"} />
                <Card img={"picture_3.jpeg"} />
                <Card img={"pic_1.jpeg"} />
              </div>
              <LastContainer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
