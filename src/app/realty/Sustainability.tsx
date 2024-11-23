import Heading from "@/components/heading/Heading";
import React, { useEffect } from "react";
import "./sustainability.css";
import parallaxie from "@/common/parallaxie";

const Sustainability = () => {
  useEffect(() => {
    parallaxie(".back-image.parallaxie", 0.35);
  }, []);
  return (
    <div className="bussines_banner" style={{ marginTop: 0 }}>
      <Heading headTitle="Sustainability" />
      <div
        className="banner_text sust_hght Sustainability_banner back-image bg-img parallaxie"
        style={{
          backgroundImage: `url(/assets/images3/realty/sustainability/sustainability-banner-2.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 0px 2000px inset",
        }}
      >
        <div className="container">
          <div
            className="banner_content inherits"
            style={{ padding: "40px 0px" }}
          >
            <div>
              <span className="fz-20 text-golden">
                <span className="line"></span>Building for the future
              </span>
              <h4 className="text-white" style={{ fontSize: "45px" }}>
                Sustainability
              </h4>
              <p
                className="text-white mb-3 sustainability-para"
                style={{
                  fontSize: "15px",
                  letterSpacing: ".8px",
                  color: "#fff",
                  marginBottom: "0",
                  marginTop: "24px",
                  maxWidth: "890px",
                  textAlign: "justify",
                }}
              >
                We are committed to sustainable development practices that
                enhance both the environment and the communities we serve. Our
                approach to real estate emphasizes eco-friendly construction,
                energy-efficient designs, and responsible resource management.
                We strive to create spaces that are sustainable, ensuring that
                our projects contribute positively to the environment and stand
                the test of time. We believe that it’s this investment that will
                last as legacy for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
