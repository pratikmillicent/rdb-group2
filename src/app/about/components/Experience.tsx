import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center text-md-start py-5">
          <div className="col-lg-4">
            <div
              className=" p-4 d-flex flex-col align-items-center justify-content-center"
              style={{ border: "2px solid #eaa636" }}
            >
              <h1 className="experience-font">20+</h1>
              <p className="year-exp">years of Experience</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 text-white d-flex flex-col justify-content-center ">
            <h6 className="h-letter pt-2 text-center text-lg-start">
              About Us
            </h6>
            <h4 className="exp-font">
              Transforming real estate development with a focus on customer
              excellence.
            </h4>
          </div>
          <div className="col-lg-4 d-flex flex-col justify-content-center">
            <p
              style={{
                fontSize: "16px",
                color: "var(--navy)",
                textAlign: "justify",
              }}
            >
              RD Brothers Group is a global leader with a distinct vision to
              shape a sustainable future across the industries we serve. With
              over 2 decades plus of experience and a strong global presence, we
              specialize in a diverse portfolio that encompasses Real Estate
              Services, Property Development, Fractional Property Investments,
              and Movie Production. Our commitment to excellence, integrity, and
              innovation allows us to consistently deliver value, foster
              meaningful change, and create impactful experiences in all our
              ventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
