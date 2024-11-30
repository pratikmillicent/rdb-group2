"use client";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import { GiArchiveResearch, GiCycle, GiMoneyStack } from "react-icons/gi";
import "./stratum.css";

function Stratum() {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }} className="hero-responsive">
          <Image
            src="/assets/images3/stratum/banner.webp"
            className="w-100 d-block  news-banner banner hero-height"
            // className="w-100 d-block  news-banner hero-height"
            alt="News Banner"
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
              <Heading headTitle="Stratum" color="white" isSpace={false} />
            </div>
          </div>
        </div>

        {/* <FrameSlider data={data} /> */}
        <div className="container">
          <Heading headTitle="Overview" />
          <p className="">
            Mandate Company with over 50 years of combined real estate
            expertise, offers professional real estate consultancy services.
            Stratum proudly houses a powerhouse team of over 90 seasoned Real
            Estate professionals, strategically deployed across diverse
            functions including Sourcing, Closing, Marketing, and Pre-Sales,
            each pivotal in shaping our unparalleled achievements. With
            innovative technologies, Stratum provides seamless and comprehensive
            solutions for every client.
          </p>
        </div>

        <div className="container section-padding flex-box">
          <h3 style={{ color: "var(--navy)" }}>Services offered</h3>

          <div className="flex-box">
            <div className="shadow p-4" style={{ flex: 1 }}>
              <GiArchiveResearch fontSize={46} color="var(--golden)" />
              <p
                className="mt-2"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Pre planning research and guidance.
              </p>
            </div>
            <div className="shadow p-4" style={{ flex: 1 }}>
              <GiMoneyStack fontSize={46} color="var(--golden)" />
              <p
                className="mt-2"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Project financial planning assistant.
              </p>
            </div>
            <div className="shadow p-4" style={{ flex: 1 }}>
              <GiCycle fontSize={46} color="var(--golden)" />
              <p
                className="mt-2"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Embedded with project from start to finish.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "40px 0" }}>
          <a
            href="https://rdbrothers.com"
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

export default Stratum;
