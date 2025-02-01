import ImageCarousel from "@/components/ImageCarousel";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { GrFacebook } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import VideoCarousel from "@/components/VideoCarousel";
export default function VideographyWork() {
  const corporatePhotos = [
    "https://res.cloudinary.com/dyf6jb0yu/video/upload/v1733063059/pot_tjlkr3.mp4",
    "https://res.cloudinary.com/dyf6jb0yu/video/upload/v1733063059/pot_tjlkr3.mp4",
  ];

  const potraitPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/4_2_zth4lv.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/3_imqlaj.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/2_2_rmxui2.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058363/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/IMG_2261.jpeg_of75th.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058357/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/5_pg8ed8.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/1_xt8kln.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058357/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/4_ui4m10.jpg",
  ];

  const travelPhotos = [
    "https://res.cloudinary.com/dyf6jb0yu/video/upload/v1733064834/1_gfm3jm.mp4",
    "https://res.cloudinary.com/dyf6jb0yu/video/upload/v1733064845/2_igfhyr.mov",
  ];

  const foodPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058354/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/2_2_1_xjjczs.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Copy_of_Moodale_2_hevdgo.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058356/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Screenshot_2024-04-14_111446_viqsbd.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/MOJITO_tquzbp.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Screenshot_2024-04-14_111654_r8a2ij.png",
  ];

  return (
    <div
      className=" bg-black text-white py-10"
      style={{
        fontFamily: "Futura LT W01 Medium",
      }}
    >
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          CORPORATE VIDEOGRAPHY
        </h1>
        <VideoCarousel videos={corporatePhotos} groupIndex={0} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          POTRAIT VIDEOGRAPHY
        </h1>
        <VideoCarousel videos={corporatePhotos} groupIndex={1} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          TRAVEL VIDEOGRAPHY
        </h1>
        <VideoCarousel videos={travelPhotos} groupIndex={2} />
      </main>
      {/* <div className="flex flex-col sm:flex-row justify-between px-5 min-h-[40vh] my-10">
        <div className="w-[100%] my-2 sm:w-[33%] sm:my-0 py-5 sm:py-0 border border-white flex justify-center items-center flex-col">
          <IoCallOutline size={30} />
          <h1 className="my-5 text-2xl">Phone</h1>
          <span className="text-gray-300">+918520937627</span>
        </div>
        <div className="w-[100%] my-2 sm:w-[35%] sm:my-0 py-5 sm:py-0  border border-white flex justify-center items-center flex-col">
          <MdOutlineMailOutline size={30} />
          <h1 className="my-5 text-2xl">Email</h1>
          <span className="text-gray-300">nithishreddygade@gmail.com</span>
        </div>
        <div className="w-[100%] my-2 sm:w-[33%] sm:my-0 py-5 sm:py-0  border border-white flex justify-center items-center flex-col">
          <BiLike size={30} />
          <h1 className="my-5 text-2xl">Connect</h1>
          <div className="flex justify-center w-[50%] ">
            <div className="mx-2">
              <FaFacebookF color="white" size={15} />
            </div>
            <div className="mx-2">
              <GrTwitter color="white" size={17} />
            </div>
            <div className="mx-2">
              <FaLinkedin color="white" size={17} />
            </div>
            <div className="mx-2">
              <FaInstagram color="white" size={17} />
            </div>
          </div>
        </div>
      </div>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          POTRAIT PHOTOGRAPHY
        </h1>
        <ImageCarousel images={potraitPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          TRAVEL PHOTOGRAPHY
        </h1>
        <ImageCarousel images={travelPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          PRODUCT PHOTOGRAPHY
        </h1>
        <ImageCarousel images={travelPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          FOOD PHOTOGRAPHY
        </h1>
        <ImageCarousel images={foodPhotos} />
      </main> */}
    </div>
  );
}
