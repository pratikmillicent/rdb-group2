"use client";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import CarrerGallery from "./CarrerGallery";
import ResumeUpload from "./components/ResumeUpload";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images3/careers/banner.webp"
          className="circle-img career-banner banner"
          alt="carrer page"
          style={{ objectFit: "cover" }}
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
            }}
          >
            <Heading headTitle="Careers" color="white" isSpace={false} />
          </div>
        </div>
      </div>

      <div className="">
        <div className="work-header ">
          <div>
            <div>
              <div className="caption text-grey">
                <section
                  className=""
                  style={{ background: "var(--background)" }}
                >
                  <div className="container">
                    <div className="sec-lg-head">
                      <div
                        className="d-flex row justify-content-center"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="col-lg-6"
                          style={{ color: "var(--navy)", padding: "90px 0" }}
                        >
                          <Heading
                            headTitle="Empower Your Career, Build with Purpose"
                            fontSize="40px"
                            textAlign="left"
                            isMargin="0"
                          />

                          <p>
                            We believe in nurturing talent and fostering growth.
                            Our employees are the heart of our success, and
                            their voices reflect the dynamism, inclusivity, and
                            forward-thinking culture we cultivate. Hear from our
                            team as they share their journeys, experiences, and
                            the impact they've made in reshaping a progressive
                            future with us.
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="/assets/images3/careers/motivation.webp"
                            alt="cre"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Heading headTitle=" Beyond the Desk" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-60">
          <div className="text-grey container">
            <CarrerGallery />

            <div>
              <Heading headTitle="Current Openings" />
            </div>
            <p className="text-black fz-16 fw-400">
              At RD Brothers, the growth of your career is as important to us as
              the success of our business. We're committed to creating an
              empowering workplace where everyone can thrive and succeed.
            </p>
            <div className="w-100">
              {CarrerData.map((data, i) => (
                <div
                  key={i}
                  className="apply_part w-100 positions-item justify-content-around text-light p-4 box-3d"
                >
                  <div className="w-100 align-items-center d-flex">
                    <p className="fw-bolder text-golden">{data.title}</p>
                    <div className="ms-auto apply-btn">
                      <a className="mt-1 fw-bolder">APPLY NOW</a>
                    </div>
                  </div>
                  {/* <div className="mt-5">
                    <strong>Positions </strong>- {data.position}
                  </div> */}
                  <div>
                    <strong>Description </strong>- {data.description}
                  </div>
                  <div>
                    <strong>Qualification and Experience required </strong>
                    -&nbsp;{data.qualifications}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <CardList data={cardData} /> */}

        <ResumeUpload />
      </div>
    </>
  );
};

export default page;

const CarrerData = [
  {
    title: "Director - Commercial",
    // position: "Project Manager",
    description:
      "Oversee and drive the commercial operations and strategies of the organization to maximize revenue and profitability.",
    qualifications:
      "MBA in Finance/Marketing or related field with 8 to 10 years of experience in commercial strategy and business development.",
  },
  {
    title: "Business Development Manager - School Presales",
    // position: "Project Head",
    description:
      "Responsible for generating leads, building relationships with schools, and presenting solutions to drive sales conversion.",
    qualifications:
      "Graduate/Postgraduate in Sales/Marketing with 3 to 5 years of experience in school sales or presales activities.",
  },
  {
    title: "Telecaller",
    // position: "Branch Manager",
    description:
      "Handle outbound calls to generate leads, follow up with prospective clients, and provide product/service information.",
    qualifications:
      "Graduate in any field with 1 to 2 years of experience in telecalling or customer engagement roles.",
  },
  {
    title: "Sourcing/Closing Executive",
    // position: "Branch Manager",
    description:
      "Manage sourcing activities, including identifying potential leads, coordinating with clients, and finalizing deals to close successfully.",
    qualifications:
      "Graduate/Postgraduate in HR/Business/Marketing with 2 to 3 years of relevant experience in sourcing and deal closing.",
  },
];
