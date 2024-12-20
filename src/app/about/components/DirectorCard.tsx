import Heading from "@/components/heading/Heading";
import React from "react";
import Image from "next/image";

const DirectorCard = () => {
  return (
    <>
      <div className="px-2">
        <Heading headTitle="Our Leaders" />
        <div className="container">
          <div className="row">
            <div className=" p-0 px-md-2 col-12 col-lg-6 mb-4">
              <div className="text-center">
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    height: "347px",
                    width: "277px",
                  }}
                >
                  <Image
                    src="/assets/images2/Raj.webp"
                    alt="Raj Thakkar"
                    width={800}
                    height={500}
                    className=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      top: "10px", // shift down
                      right: "10px", // shift right
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      // right: "-10px",
                      left: "-30px",
                      height: "100%",
                      width: "100%",
                      border: "3px solid var(--golden)", // original border
                      zIndex: "-1",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "20.5%",
                      // right: "-31.5%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#eaa636E6", // Semi-transparent background
                      color: "#fff", // White text color
                      padding: "8px 10px",
                      width: "60%",
                      clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)", // Trapezoid shape
                    }}
                  >
                    <h4
                      className="text-left"
                      // className="text-right"
                      style={{ margin: "0", fontSize: "20px" }}
                    >
                      Raj Thakkar
                      <br />
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "18px",
                        }}
                      >
                        Founder
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p
                  className="director-p"
                  style={{
                    padding: "108px 20px 72px 20px",
                    background: "var(--background) !important",
                    position: "relative",
                    top: "-89px",
                    zIndex: "-2",
                    borderRadius: "50px 0px 50px 0px",
                    height: "calc(100% - 300px)",
                    border: "3px solid var(--golden)",
                    borderTop: "none",
                    borderRight: "none",
                  }}
                >
                  <strong> Raj Thakkar</strong> is a visionary leader with over
                  2 decades of experience, deeply committed to driving growth
                  and innovation. Known for his bold yet compassionate approach,
                  Raj inspires and empowers his team, fostering a collaborative
                  and inclusive work environment. He values authentic
                  relationships built on trust and respect, focusing on
                  long-term success rather than quick wins. <br />
                  Under Raj’s guidance, the company has achieved remarkable
                  milestones, delivering over 1.2 million square feet of
                  transformative projects. His keen insight into market trends
                  and innovative strategies have been pivotal in the company’s
                  success and expansion. Raj’s dedication to excellence and his
                  genuine, forward-thinking leadership continue to steer the
                  organization towards new horizons and greater achievements in
                  the global marketplace.
                </p>
              </div>
            </div>
            <div className="p-0 px-md-2 col-12 col-lg-6 mb-4">
              <div className="text-center">
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    height: "347px",
                    width: "277px",
                  }}
                >
                  <Image
                    src="/assets/images2/Dhaval.webp"
                    alt="Dhaval Thakkar"
                    width={800}
                    height={500}
                    className=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      top: "10px", // shift down
                      right: "10px", // shift right
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "10px",
                      height: "100%",
                      width: "100%",
                      border: "3px solid var(--golden)",
                      zIndex: "-1",
                    }}
                  ></div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "-38.5%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#eaa636E6", // Semi-transparent background
                      color: "#fff", // White text color
                      padding: "8px 15px",
                      width: "70%",
                      clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)", // Trapezoid shape
                    }}
                  >
                    <h4
                      className="text-end"
                      style={{ margin: "0", fontSize: "20px" }}
                    >
                      Dhaval Thakkar
                      <br />
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "18px",
                        }}
                      >
                        Founder & CEO
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p
                  className="director-p"
                  style={{
                    padding: "108px 20px 20px 20px",
                    background: "var(--background) !important",
                    position: "relative",
                    top: "-89px",
                    zIndex: "-2",
                    borderRadius: "0px 50px 0px 50px",
                    height: "calc(100% - 300px)",
                    border: "3px solid var(--golden)",
                    borderTop: "none",
                    borderLeft: "none",
                  }}
                >
                  <strong> Dhaval Thakkar </strong> is a dynamic leader with 15
                  years of experience in commercial and retail real estate,
                  known for his attention to detail and passion for innovation.
                  His leadership has been instrumental in the company’s growth,
                  driving the delivery of over 1.5 million square feet of prime
                  real estate across 14 cities in India. Dhaval’s approach is
                  bold and forward-thinking, always focused on diversification
                  and embracing new technologies to create meaningful value from
                  every challenge. <br />
                  What sets Dhaval apart is his ability to inspire his team,
                  fostering a culture of collaboration and creativity. He
                  believes that growth isn’t just about numbers—it's about
                  building a sustainable future where innovation and technology
                  come together to make a real impact. His vision and dedication
                  to continuous improvement have not only expanded the company’s
                  reach but also set new standards in the industry, ensuring
                  that the business remains agile and competitive in a
                  constantly changing market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorCard;
