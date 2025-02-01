import React from "react";

export default function Hero({ divRef }) {
  return (
    <div
      className="min-h-[80vh] sm:min-h-screen text-white flex justify-center items-center"
      ref={divRef}
    >
      <img src="/l.png" className="h-[50%] w-[50%]" />
    </div>
  );
}
