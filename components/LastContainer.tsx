import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function LastContainer() {
  return (
    <div className="h-full">
      <div className="md:w-[500px] lg:w-[800px] h-full p-4 md:px-20 flex flex-col md:justify-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
          Explore More Now
        </h1>
        <ul className="text-gray-200 md:font-medium text-sm md:text-lg p-3 md:p-6">
          <li className="flex items-center gap-4 hover:underline cursor-pointer">
            <ChevronDoubleRightIcon className="w-6 h-6 text-gray-200" />{" "}
            Checkout Gallery
          </li>
          <li className="flex items-center gap-4 hover:underline cursor-pointer">
            <ChevronDoubleRightIcon className="w-6 h-6 text-gray-200" /> Find
            out more about us
          </li>
          <li className="flex items-center gap-4 hover:underline cursor-pointer">
            <ChevronDoubleRightIcon className="w-6 h-6 text-gray-200" /> Like
            something? Send a request now
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LastContainer;
