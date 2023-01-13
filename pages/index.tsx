import Header from "../components/Header";
import Head from "next/head";
import {Satisfy} from "@next/font/google"

const satisfy = Satisfy({
  weight:'400',
  subsets:['latin'],
})

export default function Home() {
  return (
  <>
    <div className='h-screen w-full space-y-7 bg-green-600'>
    <div className='flex  justify-center space-x-10 pt-4'>
      <a className='text-xl' href="">Home</a>
      <a className='text-xl' href="">About</a>
      <a className='text-xl' href="">Contact</a>
    </div>
    <div className= 'flex flex-col items-center justify-center  w-full space-y-2 '> 
    <img
      src="/logo.jpg"
      width={500}
      height={500}  
      className='rounded-full'  
  />
  <p className={`text-6xl ${satisfy.className} text-yellow-400`}>That.gingerart</p>
    </div>
  </div>
   
    <div className="w-screen h-screen">
      <Head>
        <title>Home | that.GingerArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className=""></main>
    </div>
  </>
  )
   
  );
}
