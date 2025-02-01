import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default function VideoCarousel({ videos }) {
  const [likedImages, setLikedImages] = useState(
    Array(videos.length).fill(false)
  );

  const toggleLike = (index) => {
    const updatedLikes = [...likedImages];
    updatedLikes[index] = !updatedLikes[index];
    setLikedImages(updatedLikes);
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {videos.map((src, index) => (
            <div
              className="relative p-4 group"
              key={index}
              onMouseEnter={(e) =>
                e.currentTarget.querySelector("video").play()
              }
              onMouseLeave={(e) =>
                e.currentTarget.querySelector("video").pause()
              }
            >
              {/* Video */}
              <video
                src={src}
                muted
                loop
                className="block h-[75vh] w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  onClick={() => toggleLike(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className={`w-12 h-12 cursor-pointer transition-colors duration-300 ${
                    likedImages[index] ? "text-red-500" : "text-white"
                  }`}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <MdKeyboardArrowLeft color="black" className="w-12 h-12" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <MdKeyboardArrowRight color="black" className="w-12 h-12" />
      </button>
    </div>
  );
}
