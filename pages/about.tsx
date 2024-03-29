import { menuState } from "@/atoms/modalAtom";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonial";
import { Nunito } from "@next/font/google";
import { useRecoilState } from "recoil";
const nunito = Nunito({ weight: "800", subsets: ["latin"] });

export default function Home() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);
  return (
    <>
      <div className="snap-y h-screen w-screen overflow-auto bg-black scrollbar-hide">
        <div className="md:h-screen w-screen bg-gradient-to-t from-blue-500 flex flex-col lg:snap-start">
        <div className="fixed z-[1000]"><Header /></div>
          {showMenu && <Menu />}
          <div className="flex flex-grow items-center flex-col md:flex-row">
            <div className="lg:w-1/2 w-full h-[30rem] relative flex justify-center items-center">
              <div className="absolute bg-gray-300 p-2.5 -rotate-[20deg] -ml-40 -mt-16 lg:scale-90 scale-[0.6]">
                <img
                  src="/gwoc-about1.jpg"
                  alt=""
                  className="object-contain w-64"
                />
              </div>
              <div className="absolute bg-gray-300 p-2.5 rotate-[20deg] ml-32 mt-24 scale-75 lg:scale-100">
                <img
                  src="/gwoc-about.jpg"
                  alt=""
                  className=" object-contain w-64"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-4 py-8">
              <h1 className={`text-6xl mb-9 ${nunito.className} text-white`}>
                About Me
              </h1>
              <p className="text-gray-300 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem autem vel suscipit laboriosam, quidem, nemo
                mollitia ratione eum aut aperiam reprehenderit alias! Eligendi
                incidunt praesentium esse consequuntur ipsa nisi aut. Neque
                perferendis eos fuga quidem atque illo optio, dolore expedita
                laborum fugiat facilis natus eligendi voluptatum, labore
                dignissimos magni. Eius incidunt minus dolorum ipsa earum vitae,
                saepe consequatur officiis dolorem. Dignissimos, ea quisquam
                ratione minima ipsum quibusdam harum autem ab sit quia dolorem
                suscipit voluptatibus debitis, cumque quae sunt architecto
                beatae veniam quod laudantium voluptate ullam! Cupiditate
                repellat repudiandae voluptatibus. Reiciendis odit molestiae
                excepturi obcaecati cum corrupti atque veritatis minus nihil?
                Minus similique debitis rem distinctio saepe, voluptatem nam,
                labore neque iure quod dolores, inventore quis mollitia aut
                natus? Adipisci!
              </p>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>
    </>
  );
}
