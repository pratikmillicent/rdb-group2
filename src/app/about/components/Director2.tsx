import loadBackgroudImages from "@/utils/loadBackground";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const Director2 = () => {
  const RajThakkar = (
    <>
      <h5>Raj Thakkar - Founder</h5>
      <p>
        With over 21 years of experience in his family’s real estate business,
        Raj has lent his focus to residential real estate in Mumbai. He has
        delivered more than 1.2 million sq. ft., exclusively leading several
        project marketing initiatives with some leading developers. Over the
        years, he has sought to add an element of transparency to all aspects of
        the business, prioritising relationships over deals. His charming and
        friendly nature add a certain warmth to the business, while his
        dedication and professionalism have earned him the trust of many
        satisfied customers.
      </p>
    </>
  );

  const DhavalThakkar = (
    <>
      <h3 className="text-center" style={{ color: "var(--navy)" }}>
        Our Story
      </h3>
      <p>
        With over 20 years’ experience, Raj and Dhaval Thakkar are the driving
        forces behind RD Group’s remarkable growth and industry leadership.
        Their forward-thinking approach and shared vision have transformed the
        company into a key player in commercial and retail real estate,
        delivering over 2.7 million square feet of prime real estate across
        India.
        <br />
        Together, they bring a unique blend of strategic insight and innovation.
        Raj’s ability to anticipate market trends and build strong, long-term
        relationships based on trust and integrity has been instrumental in
        shaping the company’s trajectory. Meanwhile, Dhaval’s passion for
        integrating emerging technologies and embracing new opportunities has
        fueled RD Group’s expansion, setting new standards in diversified
        industries.
        <br />
        Their leadership is defined by a relentless pursuit of excellence, with
        a focus on creating value-driven solutions and fostering a
        collaborative, inclusive work culture. Raj and Dhaval’s visionary
        approach continues to propel RD Group forward, redefining industry
        benchmarks and positioning the company for sustained success in the
        global marketplace.
      </p>
    </>
  );

  const [info, setInfo] = useState("");

  const handleMouseEnter = (text: any) => {
    setInfo(text);
  };

  const handleMouseLeave = () => {
    setInfo("");
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      <section className="pg-about pb-60 pt-60 sub-bg">
        <div className="container">
          <Row
            className="flex-column flex-md-row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Col xs={4}>
              <div>
                <Image
                  // src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstory-about.b32157e6.webp&w=750&q=75"
                  src="/assets/images/about/leaders.jpg"
                  // className="circle-img blog-banner"
                  style={{ height: "412px", objectFit: "contain" }}
                  alt="Landscape picture"
                  width={800}
                  height={500}
                />
              </div>
            </Col>

            <Col className="d-flex justify-content-center align-items-baseline">
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div>{DhavalThakkar}</div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Director2;
