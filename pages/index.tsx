import Header from "../components/Header";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Head>
        <title>Home | that.GingerArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-screen flex-grow bg-[#404EED] overflow-scroll py-4">
        <MainContainer />
      </main>
    </div>
  );
}
