"use client";
// import Heading from "@/components/heading/Heading";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import Advantage2 from "./Advantage2";
import Contact from "./Contact";
import Cre from "./Cre";
import Founder from "./Founder";
import FractoAdvantage from "./FractoAdvantage";
import FractoAdvantageMobile from "./FractoAdvantageMobile";
import FractoSectionImage from "./FractoVisionMission";
import "./howtowork2.css";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          style={{ objectFit: "cover" }}
          objectFit="cover"
          src="/assets/images3/fracto/banner-2.jpg"
          // className="w-100 news-banner banner "
          className="w-100 news-banner banner"
          alt="fracto"
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
            <Heading headTitle="FractoProp" color="white" isSpace={false} />
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="container"
          style={{
            marginBottom: "60px !important",
          }}
        >
          <Heading headTitle="About Us" />
          <p className="my-4 mobile-justify">
            <span className="text-golden">“Asset management firm”</span>{" "}
            specializing in real estate development and investment for clients
            in India and globally. With a disciplined and proactive management
            approach, we leverage India’s dynamic growth potential as a
            distinctive asset class to drive long-term value.
          </p>
          <p className="my-4 mobile-justify">
            Our deep insights into India's economic landscape empower us to
            expertly manage and develop assets that deliver consistent returns
            for our clients. We are committed to high-conviction, thoroughly
            researched investment strategies, co-investing alongside our clients
            to achieve predictable, robust outcomes. This approach aligns with
            our philosophy of early identification and analysis of macro and
            microeconomic trends, enhancing our ability to deliver sustainable
            growth.
          </p>
        </div>
        <FractoSectionImage />

        <Founder />

        <Cre />

        <div className="d-block d-lg-none">
          <FractoAdvantageMobile />
        </div>
        <div className="d-none d-lg-block">
          <FractoAdvantage />
        </div>

        <Advantage2 />
        <Contact />
      </div>
    </>
  );
};

export default page;
