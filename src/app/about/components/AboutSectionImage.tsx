import { useState } from "react";
import "../../(home)/SectionImage.css";

const images = {
  overview: "/assets/images/home/about3.jpg",
  vision: "/assets/images/about/vision.jpeg",
  mission: "/assets/images3/about/mission-2.jpg",
};

function AboutSectionImage() {
  const [selectedTab, setSelectedTab] = useState("vision");
  const [currentImage, setCurrentImage] = useState(images[selectedTab]);
  const [animate, setAnimate] = useState(false);

  const tabStyle = isSelected => ({
    backgroundColor: isSelected ? "var(--golden)" : "transparent",
    color: isSelected ? "white" : "white",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "50px",
    fontSize: "14px",
  });

  const handleTabClick = tab => {
    if (selectedTab !== tab) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setSelectedTab(tab);
        setCurrentImage(images[tab]);
      }, 100);
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div
      className="section-container d-md-flex flex-md-row"
      style={{ width: "100vw" }}
    >
      <div className="vision-container col-md-6 d-flex flex-column pt-40 align-items-center bg-navy">
        <div className="w-100 mb-2 d-flex justify-content-start align-items-start text-white fz-36 fw-600">
          RD Brothers
        </div>

        <div className="w-100 mb-4 d-flex flex-wrap justify-content-start">
          <button
            style={tabStyle(selectedTab === "vision")}
            onClick={() => handleTabClick("vision")}
            className="btn section-mobile"
          >
            Vision
          </button>
          <button
            style={tabStyle(selectedTab === "mission")}
            onClick={() => handleTabClick("mission")}
            className="btn section-mobile"
          >
            Mission
          </button>
        </div>
        <div className={`tab-content ${animate ? "slide-in" : ""}`}>
          {selectedTab === "vision" && (
            <p className="text-white fz-17 fw-400 w-100">
              To become a trusted leader in real estate and development, shaping
              vibrant communities and setting new industry benchmarks. We
              envision a future driven by integrity and innovation, where our
              work enriches lives, fosters sustainable growth, and creates
              lasting value for all.
            </p>
          )}
          {selectedTab === "mission" && (
            <p className="text-white fz-17 fw-400">
              Committed to creating meaningful impact through high-quality
              solutions that drive growth and enrich communities. With integrity
              and a vision for progress, we foster trusted partnerships and
              deliver sustainable value to our clients and stakeholders.
            </p>
          )}
        </div>
      </div>

      <div
        className={`col-md-6 position-relative p-0 ${
          animate ? "slide-in" : ""
        } d-none d-sm-none d-md-block d-lg-block d-xl-block`}
      >
        <div
          className="back-image bg-img"
          style={{
            backgroundImage: `url(${currentImage})`,
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
}

export default AboutSectionImage;
