"use client";
const DashboardCount = lazy(() => import("@/components/DashboardCount"));
import CallToAction from "./components/CallToAction";
// import CoreValue2 from "./components/CoreValue2";
// import Team from "./components/Team";
import DirectorCard from "./components/DirectorCard";
import SectionImage from "../(home)/components/SectionImage";
import TeamSection2 from "./components/TeamSection2";
import Team from "./components/Team";
import Experience from "./components/Experience";
import { useInView } from "react-spring";
import { lazy } from "react";
import AboutSectionImage from "./components/AboutSectionImage";
import Director2 from "./components/Director2";
import Image from "next/image";
import Heading from "@/components/heading/Heading";

const data = [
  { value: 1000, suffix: "+", label: "Developer Relationships" },
  { value: 5000, suffix: "+", label: "Happy Customers" },
  {
    value: 8,
    suffix: (
      <>
        <span style={{ marginLeft: "4px" }}></span>
        <span style={{ fontSize: "17px", fontWeight: 500, marginLeft: "4px" }}>
          Cities + GCC
        </span>
      </>
    ),
    label: "Market Presence",
  },
  { value: 50, suffix: "+", label: "Projects Launched" },
  { value: 200, suffix: "+", label: "Team Strength" },
];

function About() {
  const [ref, inView] = useInView({ once: true });
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images3/about/banner.jpg"
          className="w-100 d-block  news-banner banner hero-height"
          // className="w-100 d-block  news-banner hero-height"
          alt="News Banner"
          style={{ objectFit: "fill" }}
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
            <Heading headTitle="About Us" color="white" isSpace={false} />
          </div>
        </div>
      </div>

      <Experience />
      <AboutSectionImage />
      <Director2 />
      <CallToAction />
      <Team />
      <div style={{ marginTop: "10px" }} ref={ref}>
        {/* @ts-ignore */}
        {inView && <DashboardCount data={data} />}
      </div>
    </>
  );
}

export default About;
