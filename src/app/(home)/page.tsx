//@ts-nocheck
"use client";
import { lazy, useEffect, useRef, useState } from "react";
import { useInView } from "react-spring";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import useMediaQuery from "./components/useMediaQuery";
import SectionImage from "./components/SectionImage";
import NewGroupGrid from "./components/NewGroup";
import Heading from "@/components/heading/Heading";
import News2 from "./News2";
import VideoGallary from "./components/VideoGallary";
import Card from "./components/Card";
import MobileCarousel from "./components/MobileCarousel";
import OldGroupGrid from "./components/oldNewGroupWebiste";
import Image from "next/image";
import "./SectionImage.css";
import NewMobile from "./components/NewMobile";

const DashboardCount = lazy(() => import("@/components/DashboardCount"));
const Carroussel3D = dynamic(() => import("./components/Carousel"), {
  ssr: false,
});

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

export default function Home() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [loopCount, setLoopCount] = useState(0);
  const [videoSrc, setVideoSrc] = useState("/assets/video/properties.mp4");
  const [headingText, setHeadingText] = useState("");
  const [linkHref, setLinkHref] = useState("/about");
  const [displayedText, setDisplayedText] = useState("");
  const videoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoData = [
    {
      src: "/assets/video/general-3.mp4",
      text: `Built On Experience`,
      link: "/about",
    },
    {
      src: "/assets/video/properties-3.mp4",
      text: "Properties",
      link: "/properties",
    },
    {
      src: "/assets/video/realty-3.mp4",
      text: "Realty",
      link: "/realty",
    },
    {
      src: "/assets/video/fracto-4.mp4",
      text: "FractoProp",
      link: "/fracto",
    },
    {
      src: "/assets/video/movies-2.mp4",
      text: "Movies",
      link: "/movies",
    },
    {
      src: "/assets/video/stratum-4.mp4",
      text: "Stratum",
      link: "/stratum",
    },
    {
      src: "/assets/video/18d-3.mp4",
      text: "Eighteen Dimensions",
      link: "/eighteen-dimensions",
    },
  ];

  const handleVideoEnd = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (loopCount < videoData.length - 1) {
        setLoopCount(loopCount + 1);
      } else {
        setLoopCount(0);
      }
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const { src, text, link } = videoData[loopCount];
    setVideoSrc(src);
    setLinkHref(link);
    videoRef?.current?.play();

    setHeadingText(text);
  }, [loopCount]);

  useEffect(() => {
    const { src, text, link } = videoData[loopCount];
    let typingTimeout;

    const typeText = (text) => {
      setDisplayedText((prev) => prev + text.slice(0, 1));

      typingTimeout = setTimeout(() => typeText(text.slice(1)), 100);
    };

    if (text) {
      typeText(text);
    }

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [loopCount]);

  return (
    <ParallaxProvider>
      <main className="mw-100">
        <div className="hero-responsive">
          <video
            style={{
              fontWeight: 600,
            }}
            className={`mw-100 ${isTransitioning ? "fade-out" : "fade-in"}`}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            onEnded={handleVideoEnd}
            ref={videoRef}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(117deg, rgba(23, 38, 57, 90%) 20%, rgba(1, 1, 1, 10%) 90%)",
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
                padding: "0 20px 20px 20px ",
              }}
            >
              <p
                className=""
                style={{
                  marginBottom: "20px",
                  lineHeight: "56px",
                  letterSpacing: "-1px",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: loopCount !== 0 ? "#fff" : "#fff",
                  transition: "all",
                }}
                dangerouslySetInnerHTML={{
                  __html: headingText,
                }}
              ></p>
              {loopCount !== 0 && (
                <a href={linkHref} className="block hero-button">
                  Know more
                </a>
              )}
            </div>
          </div>
        </div>

        <DashboardCount data={data} />

        <SectionImage />

        <NewGroupGrid />

        <div style={{ background: "var(--background)", padding: "60px 0" }}>
          <div className="heading">
            <Heading headTitle="Spotlight" isMargin="false" />
          </div>

          <div style={{ padding: "0" }}>
            {/* {isMediumScreen ? ( */}
            <div className="carousel-desktop d-none d-lg-block">
              <Carroussel3D
                cards={cards}
                height="400px"
                width="800px"
                margin="0 auto"
                offset={100}
                autoScrollInterval={10000}
                showArrows={false}
              />
            </div>
            <div className="d-lg-none">
              <MobileCarousel />
            </div>
          </div>
        </div>

        <News2 />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}

let cards = [
  {
    key: 1,
    content: <Card imagen="/assets/images3/home/spotlight/1.webp" />,
  },
  {
    key: 2,
    content: <Card imagen="/assets/images3/home/spotlight/2.webp" />,
  },
  {
    key: 3,
    content: <Card imagen="/assets/images3/home/spotlight/4.webp" />,
  },
  {
    key: 4,
    content: <Card imagen="/assets/images3/home/spotlight/3.webp" />,
  },
  {
    key: 5,
    content: <Card imagen="/assets/images3/home/spotlight/2.webp" />,
  },
  {
    key: 6,
    content: <Card imagen="/assets/images3/home/spotlight/4.webp" />,
  },
];

// CSS for the video transition
<style jsx>{`
  .fade-in {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  .fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`}</style>;
