import Head from "next/head";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function WelcomeCard() {
  return (
    <div className=" pt-10 w-[100%] sm:w-[75%] mx-auto">
      <h1 className="text-lg sm:text-3xl md:text-5xl text-center heading-font">
        WELCOME TO VAYAM DESIGNERS
      </h1>
      <p
        className="  my-2 w-[90%] sm:my-10 sm:w-[70%] mx-auto text-sm text-gray-400 text-justify"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        We're thrilled to have you here! Explore a world where design isn't just
        about visuals but about capturing the essence of your brand. Our mission
        is to bring your ideas to life with precision, passion, and a touch of
        innovation. From stunning graphics to complete brand transformations,
        we're dedicated to crafting designs that make a lasting impression.
      </p>
      <div className="flex justify-center  ">
        <button
          className=" flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 mt-5 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          Learn More <MdOutlineKeyboardArrowRight className="mt-1" />
        </button>
      </div>
      <style jsx>
        {`
          .heading-font {
            font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
          }
        `}
      </style>
    </div>
  );
}
