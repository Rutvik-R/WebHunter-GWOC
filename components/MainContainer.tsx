import { Nunito } from "@next/font/google";
import CardSlider from "./CardSlider";
const nunito = Nunito({ weight: ["800", "600"], subsets: ["latin"] });

function MainContainer() {
  return (
    <main className="h-screen w-screen md:h-full flex flex-col md:flex-row-reverse">
      <CardSlider />
      <div className="w-full md:w-[50vw] h-fit md:h-full p-4 md:px-12 lg:px-20  flex flex-col justify-center">
        <h1
          className={`text-white font-extrabold text-4xl min-w-max ${nunito.className}`}
        >
          Old Made Better
        </h1>
        <p
          className={`text-gray-200 text-sm md:tracking-wide leading-5 py-2 md:leading-6 lg:text-xl ${nunito.className} font-medium`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </main>
  );
}

export default MainContainer;
