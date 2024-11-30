// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import FrameSlider from "./RealtySlideShow";
import OngoingProject from "./OngoingProject";
import gsap from "gsap";
import SectionImage from "../(home)/components/SectionImage";
import CompletedProjects from "./CompletedProject";
import UpcomingProject from "./UpcomingProject";
import Careers from "./Carrer";
import ResumeUpload from "../careers/components/ResumeUpload";
import FractoAdvantage from "./FractoAdvantage";
import Project from "./Project";
import Experience from "../about/components/Experience";
import DirectorCard from "../about/components/DirectorCard";
import Sustainability from "./Sustainability";
import ContactComponent from "../contact-us/components/ContactComponent";
import MissionVision from "./MissionVision";
import MissionVisionMobile from "./MissionVisionMobile";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import MissionVisionV2 from "./MissionVisionV2";
import DirectorCard2 from "./DirectorCard2";
import { TbNumber20Small } from "react-icons/tb";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineConstruction } from "react-icons/md";

const Realty = () => {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }} className="hero-responsive">
          <Image
            style={{ objectFit: "cover" }}
            src="/assets/images3/realty/banner.webp"
            className="w-100 d-block  news-banner banner hero-height"
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
                padding: "0 20px",
              }}
            >
              <Heading headTitle="Realty" color="white" isSpace={false} />
            </div>
          </div>
        </div>

        <div className="container">
          <Heading headTitle="Overview" />
          <p className="">
            <span className="text-golden">
              “A Premier real estate developer”
            </span>{" "}
            dedicated to creating innovative and high-quality spaces that
            redefine modern living. With a focus on sustainable development and
            architectural excellence, we craft residential, commercial, and
            mixed-use properties that meet the evolving needs of our clients.
            Our projects are built on a foundation of trust, innovation, and
            precision, delivering exceptional value to homeowners, businesses,
            and investors alike. At RD Brothers Realty, we don't just build
            properties—we create thriving communities designed for a better
            tomorrow.
          </p>
        </div>
        <div>
          <MissionVisionV2 />
        </div>
        <DirectorCard2 />
        <Project />
        <Sustainability />
        <ContactComponent />
      </main>
    </>
  );
};

export default Realty;

const data = [
  {
    id: 1,
    background: "/assets/images/realty/banner.webp",
    year: "",
    type: "",
    title:
      "Taking real estate development to the next level with a customer-first attitude.",
  },
  {
    id: 2,
    background: "/assets/images/realty/banner-2.webp",
    year: "2023",
    type: "Ongoing Project",
    title: "Estella",
  },
  {
    id: 3,
    background: "/assets/images/realty/banner-3.webp",
    year: "2023",
    type: "Upcoming Project",
    title: "Sumatinath CHS",
  },
  {
    id: 4,
    background: "/assets/images/realty/banner-4.webp",
    year: "2023",
    type: "Upcoming Project",
    title: "Alka CHS",
  },
  // {
  //   id: 5,
  //   background:
  //     "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   year: "2023",
  //   type: "Real Estate",
  //   title: "Modern Villa",
  // },
];
