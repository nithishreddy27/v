import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "motion/react";

export default function Work() {
  return (
    <div className="min-h-screen bg-black pb-10   pt-28 text-white">
      <div className=" mt-5 ml-10 sm:ml-16 md:ml-40 lg:ml-64 flex items-center relative">
        <h1
          className="text-[50px] sm:text-[60px] md:text-[70px] lg:text-[90px] relative "
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          03
          <motion.span
            className="absolute w-[calc(100%+80px)] h-[10px]  top-1/2 left-[-20px] transform -translate-y-1/2"
            style={{ backgroundColor: "rgb(252,0,0)" }}
            initial={{ width: "0%" }} // Initial width
            animate={{ width: "calc(100% + 40px)" }} // Final width
            transition={{
              duration: 2, // Duration of the animation in seconds
              ease: "easeInOut", // Easing function
            }}
          ></motion.span>
        </h1>
        <h1
          className="text-[30px] sm:text-[50px] md:text-[70px] lg:text-[90px] ml-10 sm:ml-16 font-semibold "
          style={{ color: "rgb(252,0,0)", fontFamily: "Futura LT W01 Medium" }}
        >
          OUR WORKS
        </h1>
      </div>
      <div className="w-[100%] md:w-[68%] px-5 md:px-auto md:mx-auto">
        <p className="text-[20px] md:text-[35px] font-semibold ">
          Explore our diverse portfolio of creative projects. We invite you to
          witness our work and get inspired to create something extraordinary
          for your brand.
        </p>
      </div>
      <div
        className="relative mt-10   h-[107px] sm:h-[150px] md:h-[207px] lg:h-[407px] bg-cover bg-center"
        style={{ backgroundImage: "url('/works/PHOTOGRAPHYBG.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[57px] cursor-pointer font-semibold heading tracking-wider ml-2 sm:ml-12 md:ml-24  ">
            PHOTOGRAPHY
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer hover:text-red-500 viewHeading  font-extralight text-sm  ml-2 sm:ml-12 md:ml-24 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="relative    h-[107px] sm:h-[150px] md:h-[207px] lg:h-[407px] bg-cover bg-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732775255/video_kev0pf.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[57px] cursor-pointer font-semibold heading tracking-wider ml-2 sm:ml-12 md:ml-24  ">
            VIDEOGRAPHY
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer hover:text-red-500 viewHeading  font-extralight text-sm  ml-2 sm:ml-12 md:ml-24 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>
      <div
        className="relative   h-[107px] sm:h-[150px] md:h-[207px] lg:h-[407px] bg-cover bg-center"
        style={{ backgroundImage: "url('/works/GRAPHICDESIGNBG.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[57px] cursor-pointer font-semibold heading tracking-wider ml-2 sm:ml-12 md:ml-24  ">
            GRAPHIC DESIGN
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer hover:text-red-500 viewHeading  font-extralight text-sm  ml-2 sm:ml-12 md:ml-24 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="relative  h-[407px]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732775255/video_kev0pf.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
            <p className="text-white text-[57px] cursor-pointer font-semibold heading tracking-wider ml-24 ">
              VIDEOGRAPHY
            </p>
            <div className="">
              <span className="text-gray-200 flex  cursor-pointer viewHeading  font-extralight text-sm ml-28 ">
                V I E W <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className="relative  h-[407px] bg-cover bg-center"
        style={{ backgroundImage: "url('/works/GRAPHICDESIGNBG.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[57px] cursor-pointer font-semibold heading tracking-wider ml-24 ">
            GRAPHIC DESIGN
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer viewHeading  font-extralight text-sm ml-28 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div> */}

      <style jsx>
        {`
          .heading {
            font-family: "Futura LT W01 Medium";
          }
          .viewHeading {
            font-family: "Futura LT W01 Medium";
          }
        `}
      </style>
    </div>
  );
}
