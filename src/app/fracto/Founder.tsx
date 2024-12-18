import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

function Founder() {
  return (
    <div
      style={{ display: "flex", margin: "60px auto", gap: "40px" }}
      className="container founder-mobile"
    >
      <div style={{ flex: "1" }}>
        <Heading headTitle="Our Founder" />
        <p className="mobile-justify">
          Dhaval Thakkar is a dynamic leader with over two decades plus of
          experience in commercial and retail real estate, renowned for his
          attention to detail and passion for innovation. His leadership has
          been instrumental in the company’s growth, driving the delivery of
          over 1.5 million square feet of prime real estate across India.
          Dhaval’s approach is bold and forward-thinking, emphasizing
          diversification and embracing new technologies to create meaningful
          value from every challenge. What sets Dhaval apart is his ability to
          inspire his team, fostering a culture of collaboration and creativity.
        </p>
        <p className="mobile-justify">
          In addition to his expertise in real estate, Dhaval plays a pivotal
          role in managing real estate funds for developers and contributing to
          the production and distribution of movies. His multifaceted
          involvement reflects his strategic vision and adaptability across
          diverse industries.
        </p>
        <p className="mobile-justify">
          His dedication to continuous improvement has expanded the company’s
          reach and set new industry standards, ensuring the business remains
          agile and competitive in an ever-changing market.
        </p>
      </div>
      <div style={{ flex: ".4", position: "relative" }}>
        <Image
          alt="Dhaval Thakkar"
          src="/assets/images3/directors/dhaval.webp"
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
  );
}

export default Founder;
