import React from "react";
import "./missionvisionV2.css";

const MissionVision = () => {
  return (
    <div className="mission-vision-container position-relative">
      <span className="border-dot">
        <span
          className="dot position-absolute"
          style={{ top: "-4px", left: "-5px" }}
        ></span>
        <span
          className="dot position-absolute"
          style={{ right: " -4px", bottom: "-5px" }}
        ></span>
      </span>
      <div className="mission-section">
        <h2 className="section-title ps-4 pb-4">MISSION</h2>

        <div className="mission-para">
          <p className="section-description">
            To be the leading force in real estate, known for{" "}
            <span>excellence</span> in property development, continuously{" "}
            <span>innovating and enduring</span> value.
          </p>
        </div>
      </div>

      <div className="vision-section">
        <h2 className="section-title ps-4 main-color3 pb-4">VISION</h2>
        <div
          className="mission-para"
          style={{
            backgroundColor: "var(--background)",
          }}
        >
          <p className="section-description">
            Our mission is to deliver exceptional real estate solutions that
            embody <span>luxury, innovation, and functionality</span> by
            building a legacy of
            <span>trust and excellence</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
