import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="lg:snap-y lg:snap-mandatory lg:overflow-scroll lg:h-screen w-screen ">
      <div className="lg:snap-start flex flex-col md:h-screen w-screen">
        <Header />
        <div className="md:flex flex-grow bg-orange-400">
          <div className="h-[30rem] md:h-auto w-full md:w-5/12 lg:w-1/2 relative flex items-center justify-center">
            <div className="absolute w-64 p-2 bg-gray-300 -rotate-[20deg] -ml-36 -mt-36 lg:scale-75 scale-[0.6]">
              <img src="/gwoc-about1.jpg" alt="" className="  object-contain" />
            </div>
            <div className="absolute w-64 p-2 bg-gray-300 rotate-[20deg] ml-32 mt-16 lg:scale-90 scale-[0.7]">
              <img src="/gwoc-about.jpg" alt="" className=" object-contain" />
            </div>
          </div>
          <div className=" w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center mb-10">
            <p className="md:max-w-xl text-white font-medium md:px-16 px-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              sed ipsum, animi ipsa praesentium corrupti mollitia rerum tenetur
              culpa? Numquam atque minus ducimus asperiores vitae? Voluptates
              perspiciatis dicta est. Tempora. A, dolore natus! Excepturi iure
              quaerat dicta natus similique dolor adipisci numquam amet, nostrum
              ea corporis a ipsa est debitis. Delectus cum ab tempora error
              ullam asperiores debitis alias voluptate! Laboriosam est dolorum
              saepe voluptatum voluptates repellendus inventore praesentium
              consequuntur eligendi accusantium id dolor maiores ullam hic modi
              ipsum voluptas porro aliquid, magni consectetur, totam delectus?
              Nemo amet dolore quasi? Vel sequi perferendis reiciendis
              blanditiis impedit ad expedita eveniet consequuntur quia. Minus
              rem voluptatem qui, neque quia accusamus sunt beatae quas ea esse
              incidunt, dicta corporis deleniti at quibusdam in!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:snap-start lg:h-screen w-screen bg-blue-500 flex flex-col justify-center max-lg:items-center">
        <h1 className="lg:mb-32 w-full text-center max-lg:mt-11">hello</h1>
        <div className="lg:flex lg:justify-evenly justify-center max-lg:mt-10">
          <div className="h-96 w-72 bg-gray-300 flex flex-col items-center max-lg:mt-7">
            <img
              src="/gwoc-about.jpg"
              alt=""
              className="h-20 w-20 rounded-full -mt-9"
            />
            <p className="mt-10 ml-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, velit laudantium. Natus libero mollitia ut molestiae
              minima sequi soluta numquam consequatur omnis nihil nobis, ipsum
              quibusdam dicta debitis fugit dolor?
            </p>
          </div>
          <div className="h-96 w-72 bg-gray-300 flex flex-col items-center max-lg:mt-14">
            <img
              src="/gwoc-about.jpg"
              alt=""
              className="h-20 w-20 rounded-full -mt-9"
            />
            <p className="mt-10 ml-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              corrupti error exercitationem, asperiores incidunt architecto amet
              consectetur aliquam nobis eius placeat quis sapiente quia fugit
              fugiat! Facilis dolores vitae dolorum.
            </p>
          </div>
          <div className="h-96 w-72 bg-gray-300 flex flex-col items-center max-lg:mt-14 max-lg:mb-11">
            <img
              src="/gwoc-about.jpg"
              alt=""
              className="h-20 w-20 rounded-full -mt-9"
            />
            <p className="mt-10 ml-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              corrupti error exercitationem, asperiores incidunt architecto amet
              consectetur aliquam nobis eius placeat quis sapiente quia fugit
              fugiat! Facilis dolores vitae dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
