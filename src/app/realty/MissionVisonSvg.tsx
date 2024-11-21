import React from "react";

function MissionVisonSvg() {
  return (
    <svg
      className="slider-shape"
      style={{
        verticalAlign: "middle",
        scale: 0.7,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
    >
      <g>
        <path
          data-depth="0.05"
          id="shape-1"
          fill="#eaa636"
          d="M355.43 45.1C398 31.19 442.59 29 484 39.88c55.11 14.5 117.25 54.91 134.57 160.78 0 0 18.6 99.41-12.78 232 0 0-38.65 142.61-90.66 192 0 0-59 61.95-148.78 59.18 0 0-42.15 0-102.34-27.17 0 0-184-88.78-240.17-199S11 211.81 150.69 135.43C241.1 86 314.73 58.41 355.43 45.1z"
          opacity=".25"
        ></path>
        <path
          data-depth="0.07"
          id="shape-2"
          fill="#eaa636"
          d="M105.78 387.15c-15.76-38.08-21-79.83-14.15-120.46C100.79 212.61 133 148.14 228 116.38c0 0 89-32 211.88-21.76 0 0 132.5 15.66 181.18 57.51 0 0 60.65 46.59 64.69 131.66 0 0 3.11 39.73-17.22 100.45 0 0-67.27 186.43-163.35 255.44S282.55 687.58 202.89 567c-51.57-78-82.04-143.42-97.11-179.85z"
          opacity=".25"
        ></path>
        <path
          data-depth="0.09"
          id="shape-3"
          fill="#eaa636"
          d="M112.59 129.56c18.72-39.73 47.85-73.83 84.82-97.56 49.2-31.55 123.12-52.4 216.29-.29 0 0 89.1 47.22 169.11 151.43 0 0 82.67 115.68 84.6 184.07 0 0 6.77 81.22-57.4 145.42 0 0-29.09 30.94-91.54 58.46 0 0-195.21 80.68-318.52 54.43S2.54 484.38 40.43 335.12C65 238.51 94.68 167.58 112.59 129.56z"
          opacity=".25"
        ></path>
        <path
          id="shape-4"
          d="M129.39 153.77C146.74 117 173.73 85.35 208 63.38c45.59-29.25 114.09-48.57 200.42-.28 0 0 82.56 43.75 156.7 140.31 0 0 76.61 107.2 78.4 170.57 0 0 6.27 75.26-53.19 134.75 0 0-27 28.67-84.82 54.17 0 0-180.89 74.76-295.15 50.43S27.41 482.55 62.52 344.24c22.74-89.52 50.27-155.24 66.87-190.47z"
          opacity="0"
        ></path>
        <clipPath id="shape-img">
          <use xlinkHref="#shape-4" style={{ overflow: "visible" }}></use>
        </clipPath>
      </g>
      <image
        data-depth="0.1"
        clip-path="url(#shape-img)"
        height="100%"
        width="100%"
        // xlinkHref="assets/images2/our-vision-mission-large.jpg"
        xlinkHref="https://megaone.acrothemes.com/agency-hotspot/images/slider-img.png"
      ></image>
    </svg>
  );
}

export default MissionVisonSvg;
