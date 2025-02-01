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
export default function GraphicDesignWork() {
  const logoPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058342/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/4_r0m1z0.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/2_mtisji.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/1_lgpc9x.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058347/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/7_snlz2x.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058354/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/3_dppivj.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/5_fvuez2.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058353/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/6_beswbp.png",
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

  const printPhotos = [
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065142/4_nnt6ti.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065354/3_v47ogx.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065354/2_zpaags.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065353/1_g0olnp.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065144/24_1_tyqsge.png",
  ];

  const foodPhotos = [
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065357/2_2_1_rmbpmw.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065356/Screenshot_2024-04-14_111654_is1zuh.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065356/Shiba_Inu_tafmxc.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065354/Copy_of_Moodale_2_fuuwfk.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065355/MOJITO_vesv7b.png",
    "https://res.cloudinary.com/dyf6jb0yu/image/upload/v1733065355/Screenshot_2024-04-14_111446_mhxwob.png",
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
          LOGO AND BRANDING
        </h1>
        <ImageCarousel images={logoPhotos} />
      </main>

      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          UI/UX
        </h1>
        <ImageCarousel images={potraitPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          PRINT DESIGN
        </h1>
        <ImageCarousel images={printPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          PACKAGE AND LABELLING
        </h1>
        <ImageCarousel images={printPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          VISUAL DESIGN
        </h1>
        <ImageCarousel images={foodPhotos} />
      </main>
    </div>
  );
}
