import parallaxie from "@/common/parallaxie";
import Heading from "@/components/heading/Heading";
import { useEffect } from "react";
import "./../(home)/SectionImage.css";

function FractoSectionImage() {
  useEffect(() => {
    parallaxie(".back-image.parallaxie", 0.35);
  }, []);

  return (
    <div
      className="section-container d-md-flex flex-md-row"
      style={{ width: "100vw" }}
    >
      <div
        className="vision-container col-md-6 d-flex flex-column align-items-center"
        style={{ backgroundColor: "var(--navy)", paddingBottom: "30px" }}
      >
        <div className={`tab-content slide-in`}>
          <Heading
            headTitle="Vision"
            color="#fff"
            textAlign="left"
            isMargin="mt-30"
          />
          <p style={{ color: "#fff" }} className="text-foreground w-100">
            To become India's leading real estate investment platform by
            simplifying access to high-yield opportunities and creating
            long-term value for our investors and stakeholders.
          </p>

          <Heading
            headTitle="Mission"
            color="#fff"
            textAlign="left"
            isMargin="mt-30"
          />
          <p style={{ color: "#fff" }} className="text-foreground">
            To transform real estate investing by leveraging technology and
            data, creating a seamless, transparent, and accessible platform that
            empowers investors and redefines the investment landscape.
          </p>
        </div>
      </div>

      <div
        className={`col-md-6 position-relative p-0 slide-in d-none d-sm-none d-md-block d-lg-block d-xl-block`}
      >
        <div
          className="back-image bg-img parallaxie"
          data-background="/assets/images3/fracto/vision-mission.webp"
          // data-overlay-dark="3"
          data-parallaxie={{
            speed: "-0.4",
            size: "auto",
          }}
          style={{
            height: "100%",
            backgroundSize: "50vw 100%",
          }}
        />
      </div>
    </div>
  );
}

export default FractoSectionImage;
