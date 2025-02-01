import { useRouter } from "next/router";
import React from "react";

export default function NavigationNumbers() {
  const router = useRouter();
  return (
    <div
      className="w-[100%] pb-10 sm:px-24 md:px-36  lg:px-48 flex justify-between bg-black py-10 px-3"
      style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
    >
      <div>
        <h1
          className="text-[30px] sm:text-[50px] md:text-[80px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/about");
          }}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          01
        </h1>
        <p className="text-white underline tracking-widest  text-[10px]  sm:text-[12px] md:text-[20px] ">
          About Us
        </p>
      </div>
      <div>
        <h1
          className="text-[30px]  sm:text-[50px] md:text-[80px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/services");
          }}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          02
        </h1>
        <p className="text-white underline tracking-widest text-[10px] sm:text-[12px] md:text-[20px] ">
          Our Services
        </p>
      </div>
      <div>
        <h1
          className="text-[30px]  sm:text-[50px] md:text-[80px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/works");
          }}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          03
        </h1>
        <p className="text-white underline tracking-widest text-[10px] sm:text-[12px] md:text-[20px] ">
          Our Works
        </p>
      </div>
      <div>
        <h1
          className="text-[30px] sm:text-[50px] md:text-[80px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/contact");
          }}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          04
        </h1>
        <p className="text-white underline tracking-widest text-[10px] sm:text-[12px] md:text-[20px] ">
          Contact
        </p>
      </div>
    </div>
  );
}
