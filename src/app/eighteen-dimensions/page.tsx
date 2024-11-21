"use client";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

function EighteenDimensions() {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }}>
          <Image
            src="/assets/images3/eighteen-dimensions/banner.webp"
            className="w-100 d-block  news-banner banner hero-height"
            // className="w-100 d-block  news-banner hero-height"
            alt="News Banner"
            style={{ objectFit: "cover" }}
            width={800}
            height={500}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                // padding: "0 20px",
              }}
            >
              <Heading
                headTitle="Eighteen Dimensions"
                color="white"
                isSpace={false}
              />
            </div>
          </div>
        </div>

        {/* <FrameSlider data={data} /> */}
        <div className="container">
          <Heading headTitle="Overview" />
          <p className="">
            Eighteen Dimensions is a multifaceted consultancy firm that
            seamlessly blends creativity, strategy, and technology to elevate
            architectural and interior design projects. Specializing in
            innovative design solutions, the company offers expert guidance in
            architecture, interior design, and space planning, creating
            functional and visually striking environments. Additionally,
            Eighteen Dimensions excels in marketing, providing tailored
            strategies to boost brand visibility and engagement. The company
            also plans and executes impactful events and product launches,
            ensuring each occasion resonates with the target audience. With a
            focus on cutting-edge interactive technology, Eighteen Dimensions
            crafts immersive experiences that enhance’s user interaction and
            drive’s engagement across various platforms, making it a one-stop
            solution provider for all creative and marketing needs.
          </p>
        </div>

        <div style={{ padding: "40px 0" }}>
          <a
            href="https://eighteen-dimensions-staging.netlify.app"
            target="_blank"
            style={{
              width: "fit-content",
              display: "block",
              margin: "0 auto",
              border: "none",
              background: "var(--navy)",
              color: "#fff",
              padding: "8px 16px",
            }}
          >
            Go to page
          </a>
        </div>
      </main>
    </>
  );
}

export default EighteenDimensions;
