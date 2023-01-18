import { menuState } from "@/atoms/modalAtom";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React from "react";
import { useRecoilState } from "recoil";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Gallary() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col h-screen bg-blue-500">
      <Header />
      <div className="h-screen w-full border-2 border-red-500">
        <Slider {...settings} className="w-full h-full">
          <div
            className="w-full h-full"
            style={{ backgroundImage: "url(/gwoc-gallary1.jpg)" }}
          ></div>
          <div className="">
            <img alt={"image1"} src={"/gwoc-gallary1.jpg"} className="" />
          </div>
          <div className="">
            <img alt={"image1"} src={"/gwoc-gallary1.jpg"} className="" />
          </div>
          <div className="">
            <img alt={"image1"} src={"/gwoc-gallary1.jpg"} className="" />
          </div>
        </Slider>
      </div>
      {showMenu && <Menu />}
    </div>
  );
}

export default Gallary;
