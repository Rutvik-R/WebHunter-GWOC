import { useEffect, useRef } from "react";
import { TbCornerDownLeft, TbCornerDownRight } from "react-icons/tb";

function CardSlider() {
  const styleLeft = `absolute group w-48 h-64 lg:w-64 lg:h-96 -mt-16 rounded-xl -rotate-[25deg] scale-75 mr-48 shadowed overflow-hidden transition-all ease-[cubic-bezier(0.77,0,0.18,1] delay-25 hover:-rotate-[30deg] hover:mr-52`;
  const styleMiddle = `absolute group w-48 h-64 lg:w-64 lg:h-96 -mt-16 rounded-xl rotate-0 shadowed overflow-hidden transition ease-[cubic-bezier(0.77,0,0.18,1] delay-25 hover:scale-[1.03] z-10`;
  const styleRight = `absolute group w-48 h-64 lg:w-64 lg:h-96 -mt-16 rounded-xl rotate-[25deg] scale-75 ml-48 shadowed overflow-hidden transition-all ease-[cubic-bezier(0.77,0,0.18,1] delay-25 hover:rotate-[30deg] hover:ml-52`;

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    if (timeRef.current) {
      timeRef.current.addEventListener("animationiteration", () => {
        handleClickLeft();
      });
    }
  };

  const handleClick = (direction: string) => {
    if (direction === "left") {
      handleClickLeft();
    } else {
      handleClickRight();
    }
    if (timeRef.current) {
      timeRef.current.className = "rounded-md";
      timeRef.current.offsetWidth;
      timeRef.current.className = "inner rounded-md";
    }
  };

  const animatePlay = () => {
    if (timeRef.current) {
      timeRef.current.style.animationPlayState = "running";
    }
  };

  const animatePause = () => {
    if (timeRef.current) {
      timeRef.current.style.animationPlayState = "paused";
    }
  };

  function handleClickLeft() {
    if (ref1.current) {
      if (ref1.current.className === styleLeft)
        ref1.current.className = styleMiddle;
      else if (ref1.current.className === styleMiddle)
        ref1.current.className = styleRight;
      else if (ref1.current.className === styleRight)
        ref1.current.className = styleLeft;
    }
    if (ref2.current) {
      if (ref2.current.className === styleLeft)
        ref2.current.className = styleMiddle;
      else if (ref2.current.className === styleMiddle)
        ref2.current.className = styleRight;
      else if (ref2.current.className === styleRight)
        ref2.current.className = styleLeft;
    }
    if (ref3.current) {
      if (ref3.current.className === styleLeft)
        ref3.current.className = styleMiddle;
      else if (ref3.current.className === styleMiddle)
        ref3.current.className = styleRight;
      else if (ref3.current.className === styleRight)
        ref3.current.className = styleLeft;
    }
  }

  function handleClickRight() {
    if (ref1.current) {
      if (ref1.current.className === styleLeft)
        ref1.current.className = styleRight;
      else if (ref1.current.className === styleMiddle)
        ref1.current.className = styleLeft;
      else if (ref1.current.className === styleRight)
        ref1.current.className = styleMiddle;
    }
    if (ref2.current) {
      if (ref2.current.className === styleLeft)
        ref2.current.className = styleRight;
      else if (ref2.current.className === styleMiddle)
        ref2.current.className = styleLeft;
      else if (ref2.current.className === styleRight)
        ref2.current.className = styleMiddle;
    }
    if (ref3.current) {
      if (ref3.current.className === styleLeft)
        ref3.current.className = styleRight;
      else if (ref3.current.className === styleMiddle)
        ref3.current.className = styleLeft;
      else if (ref3.current.className === styleRight)
        ref3.current.className = styleMiddle;
    }
  }

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="relative w-full md:w-[50vw] h-[70vh] md:h-full p-4 flex items-center justify-center md:mr-6">
      <div
        className="-mr-52 lg:-mr-60 mt-28 z-10 cursor-pointer rounded-full p-2 hover:bg-white group flex justify-center items-center"
        onClick={() => handleClick("right")}
        onMouseEnter={animatePause}
        onMouseLeave={animatePlay}
      >
        <TbCornerDownLeft className="w-10 h-10 text-white -rotate-[80deg] group-hover:text-[gray]" />
      </div>
      <div
        ref={ref1}
        className={styleLeft}
        onMouseEnter={animatePause}
        onMouseLeave={animatePlay}
      >
        <img
          src="/picture_3.jpeg"
          className="w-48 h-64 lg:w-64 lg:h-96  rounded-xl rotate-0 shadow-2xl object-cover"
          alt="image"
        />
      </div>
      <div
        ref={ref2}
        className={styleMiddle}
        onMouseEnter={animatePause}
        onMouseLeave={animatePlay}
      >
        <img
          src="/picture_7.jpeg"
          className="w-48 h-64 lg:w-64 lg:h-96  rounded-xl rotate-0 shadow-2xl object-cover group-hover:scale-110 transition ease-in-out"
          alt="image"
        />
      </div>
      <div
        ref={ref3}
        className={styleRight}
        onMouseEnter={animatePause}
        onMouseLeave={animatePlay}
      >
        <img
          src="/pic_1.jpeg"
          className="w-48 h-64 lg:w-64 lg:h-96  rounded-xl rotate-0 shadow-2xl object-cover"
          alt="image"
        />
      </div>
      <div
        className="-ml-48 lg:-ml-60 mt-28 z-10 cursor-pointer rounded-full p-2 hover:bg-white group flext justify-center items-center"
        onClick={() => handleClick("left")}
        onMouseEnter={animatePause}
        onMouseLeave={animatePlay}
      >
        <TbCornerDownRight className="w-10 h-10 text-white rotate-[80deg] group-hover:text-[gray]" />
      </div>

      <div className="flex space-x-0.5 items-end absolute z-10 mt-72 md:mt-96">
        <div className="hidden w-6 h-1.5 bg-white rounded-lg"></div>
        <div className="w-16 h-2.5 bg-white rounded-md">
          <div ref={timeRef} className="rounded-md inner"></div>
        </div>
        <div className="hidden w-6 h-1.5 bg-white rounded-lg"></div>
      </div>
    </div>
  );
}

export default CardSlider;
