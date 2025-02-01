import React from "react";

export default function GrpahicDesign() {
  return (
    <div className="divBody ">
      <video
        src="/waterfalls.mp4"
        autoPlay
        loop
        preload
        playsInline
        muted
        className="w-screen h-[100px] mt-52"
      />
      <svg height="500px" width="100%" className="mt-52  ">
        <defs>
          <mask
            id="mask"
            x={0}
            y={0}
            height="500px"
            width="100px"
            className="mt-10 bg-black"
          >
            <rect
              x={0}
              y={0}
              height="500px"
              width="100%"
              className="bg-black"
            />
            <text x="" y="80%" fill="red" className="">
              I Love SVG
            </text>
          </mask>
        </defs>
        <rect
          x={0}
          y={0}
          height="500px"
          width="100%"
          className="w-screen bg-black"
        />
      </svg>

      <style jsx>
        {`
          svg {
            font-family: "Montserrat";
            font-size: 5em;
            font-weight: bold;
            text-transform: Uppercase;
            position: absolute;
            top: 0;
            left: 0;
            height: 100px;
          }

          svg rect {
            fill: white;
            mask: url(#mask);
          }
        `}
      </style>
    </div>
  );
}
