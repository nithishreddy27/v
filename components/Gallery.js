import React from "react";

export default function Gallery() {
  return (
    <div className="px-3 mt-24">
      <h1 className="sideHeading text-center text-md sm:text-xl text-gray-200 font-extralight">
        Curated for You
      </h1>
      <h1 className="mainHeading text-center  text-[30px] sm:text-[45px] lg:text-[56px]  font-bold my-4">
        View Gallery
      </h1>

      <div className="flex">
        <div className="h-[30vh] sm:h-[110vh] w-[25%] mx-1">
          <div className="h-[15vh] sm:h-[52vh] bg-white my-2 overflow-hidden relative group">
            {/* Image with scaling effect */}
            <img
              src="/bike.png"
              alt="Bike"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Mask effect */}
            <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>
          </div>

          <div className="h-[15vh] sm:h-[52vh] bg-white my-2 overflow-hidden relative group">
            {/* Image with scaling effect */}
            <img
              src="/mountain.jpg"
              alt="Bike"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Mask effect */}
            <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="h-[30vh] sm:h-[105vh]  bg-white mx-1 w-[50%] my-2 overflow-hidden relative group">
          <img
            src="/dance.jpg"
            alt="Bike"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Mask effect */}
          <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>
        </div>
        <div className="h-[30vh] sm:h-[110vh]  w-[25%] mx-1">
          <div className="h-[15vh] sm:h-[52vh] bg-black my-2 overflow-hidden relative group">
            {/* Image with scaling effect */}
            <img
              src="/drink.png"
              alt="Bike"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Mask effect */}
            <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className="h-[15vh] sm:h-[52vh] bg-white my-2 overflow-hidden relative group">
            {/* Image with scaling effect */}
            <img
              src="/girl.jpg"
              alt="Bike"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Mask effect */}
            <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .sideHeading {
            font-family: "Noto Sans JP", sans-serif;
            font-optical-sizing: auto;
            font-weight: <weight>;
            font-style: normal;
          }

          .mainHeading {
            font-family: "IBM Plex Sans", sans-serif;
            font-weight: 700;
            font-style: normal;
          }
        `}
      </style>
    </div>
  );
}
