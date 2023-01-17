import Header from "../components/Header";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Card from "../components/Card";
import { useEffect, useRef } from "react";
import LastContainer from "../components/LastContainer";
import { Satisfy } from "@next/font/google";
import Wavy from "@/components/wavy";
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
    <>
      <div className="w-screen h-screen">
        <Head>
          <title>Home | that.GingerArt</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-screen flex flex-col bg-[#3586ff]">
          <Header />
          <Wavy />
          <RequestModal />
          <div
            ref={mainRef}
            className="scroll-smooth md:h-screen md:snap-mandatory flex flex-col md:flex-row overflow-x-scroll flex-grow md:items-center bg-[#3586ff]"
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
    </>
  );
}
