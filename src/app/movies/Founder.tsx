import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import "../fracto/howtowork2.css";

function Founder() {
  return (
    <div style={{ background: "var(--background)", paddingTop: "20px" }}>
      <div
        style={{
          display: "flex",
          margin: "60px auto",
          gap: "40px",
        }}
        className="container founder-mobile"
      >
        <div style={{ flex: "1" }}>
          <Heading headTitle="Our Founder" />
          <p className="mobile-justify">
            With an extensive background of 20-years in the real estate sector
            spanning across India and Dubai, he has personally overseen
            countless projects. Currently, he spearheads a pioneering fractional
            ownership initiative, revolutionizing conventional business
            paradigms. Now, he leverages his profound financial, operational,
            and technological expertise to drive innovation in the realm of film
            production.
          </p>
          <p className="mobile-justify">
            He inspires his team, fostering collaboration and creativity, and
            believes growth is about building a sustainable, innovative future.
            Dhaval’s vision has expanded the company’s reach and set new
            industry standards, keeping the business agile and competitive.
          </p>
        </div>
        <div style={{ flex: ".4", position: "relative" }}>
          <Image
            alt="Dhaval Thakkar"
            src="/assets/images3/directors/dhaval.jpg"
            style={{ zIndex: 1 }}
            width={100}
            height={100}
          />

          <div
            className="frame-mobile"
            style={{
              position: "absolute",
              inset: 0,
              border: "5px solid var(--golden)",
              left: "20px",
              top: "-20px",
              right: "-20px",
              bottom: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
