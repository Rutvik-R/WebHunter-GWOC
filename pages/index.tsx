import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Home | that.GingerArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className=""></main>
    </div>
  );
}
