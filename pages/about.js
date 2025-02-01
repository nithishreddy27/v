import React, { useState } from "react";
import { motion } from "motion/react";

export default function About() {
  const [liked, setLiked] = useState([false, false, false, false, false]);

  // Function to toggle the like state for a specific image
  const toggleLike = (index) => {
    const newLikedState = [...liked];
    newLikedState[index] = !newLikedState[index];
    setLiked(newLikedState);
  };

  return (
    <div className="bg-black text-white  pb-24  pt-28 min-h-screen min-w-[300px]">
      {" "}
      <div className=" mt-5 ml-10 sm:ml-16 md:ml-20 flex items-center relative">
        <h1
          className="text-[50px] sm:text-[60px] md:text-[70px] lg:text-[90px] relative "
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          01
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
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col md:flex-row my-5  md:my-10 px-5">
        <div className="w-[100%] mx-auto bg-white md:w-[50%] h-[50vh] md:h-[70vh] flex justify-center items-center">
          <img src="/wbLogo.png" />
        </div>
        <div
          className="w-[100%] md:w-[50%] h-[50vh] md:mx-5 md:h-[70vh] mx-auto my-5 text-center md:text-start"
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          <div className="mx-2">
            <h1 className="text-lg sm:text-xl md:text-4xl lg:text-5xl">
              Get to Know Us
            </h1>
            <p className="mx-2 mt-2 w-[100%] md:mt-10 md:w-[80%] text-justify md:text-justify text-lg text-gray-400">
              We are a unique creative agency for all things visual and digital.
              We specialize in graphic design, photography, and videography,
              offering a wide range of services to meet the diverse needs of
              businesses and individuals alike.
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:pt-10 text-justify md:text-center w-[100%] md:w-[50%] mx-auto my-10"
        style={{
          fontFamily: "Futura LT W01 Medium",
        }}
      >
        <h1 className="text-5xl text-center my-5">OUR VISION</h1>
        <p className="text-lg mx-5 text-gray-400">
          Our mission is to enhance your brand presence and communication
          effectiveness through comprehensive and innovative solutions. Whether
          you need striking visuals, captivating videos, or a dynamic web
          presence, our talented team is dedicated to bringing your vision to
          life. Explore our portfolio to see how we can help you stand out in a
          crowded marketplace.
        </p>
      </div>
      <div className="w-[100%] md:w-[80%]  pd-2 md:mx-auto flex flex-col md:flex-row justify-center  mt-24 ">
        <div
          className="w-[100%] md:w-[50%] md:mt-24"
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-5 mx-auto">
            Our Valued Clients
          </h1>
          <p className="text-sm  md:mx-auto text-gray-400 my-2 mb-5 md:mb-2 text-justify mx-5 md:w-[60%] ">
            Our clients are at the heart of everything we do. We work
            collaboratively with businesses and individuals across various
            industries, creating impactful visual content and design solutions
            to meet their unique needs.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] md:h-[75vh] ">
          <div className="flex justify-between">
            <div className="bg-white w-full mx-1  overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group">
                <img
                  src="/companies/EVOLVESKILLS.png"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white w-full mx-1 h-full overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group h-full ">
                <img
                  src="/companies/LNT7.png"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 scale-150 mt-5 group-hover:scale-160"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white w-full mx-1  overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group">
                <img
                  src="/companies/NASSCOM.png"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className="bg-white w-full mx-1  overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group">
                <img
                  src="/companies/MRCE.jpg"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white w-full mx-1  overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group">
                <img
                  src="/companies/TTPOC.jpeg"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white w-full mx-1  overflow-hidden cursor-pointer relative">
              <div className="bg-white relative group">
                <img
                  src="/companies/YUMMYTAILS.jpg"
                  alt="Bike"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-350 opacity-0 group-hover:opacity-100"></div>

                <div
                  onClick={() => toggleLike(0)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[0] ? "red" : "none"} // Red fill when liked
                    viewBox="0 0 24 24"
                    stroke={liked[0] ? "red" : "gray"} // Red stroke when liked
                    className="w-6 h-6"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
