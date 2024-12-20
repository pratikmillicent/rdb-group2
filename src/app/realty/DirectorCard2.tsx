import React from "react";
import Image from "next/image";
import "./directorcard2.css";

const DirectorCard2 = () => {
  return (
    <ul className="container" id="stack-cards">
      <li className="stack-card" id="card1">
        <div className="stack-card-body">
          <Image
            src="/assets/images3/directors/raj.webp"
            alt="Raj Thakkar"
            width={600}
            height={400}
            className="img-responsive rounded"
            loading="lazy"
            style={{
              objectFit: "scale-down",
              height: "450px",
            }}
          />

          <div className="px-0 px-lg-4">
            <h5 className="mt-2 mt-lg-0 main-color3">RAJ THAKKAR</h5>
            <p className="m-0 main-color4">Founder</p>
            <hr className="p-0 mt-2 mb-4" />
            <p className="">
              <strong> Raj Thakkar</strong> is a visionary leader with over 2
              decades of experience, deeply committed to driving growth and
              innovation.Known for his bold yet compassionate approach, Raj
              inspires and empowers his team, fostering a collaborative and
              inclusive work environment. He values authentic relationships
              built on trust and respect, focusing on long-term success rather
              than quick wins. <br />
              Under Raj’s guidance, the company has achieved remarkable
              milestones, delivering over 1.2 million square feet of
              transformative projects. His keen insight into market trends and
              innovative strategies have been pivotal in the company’s success
              and expansion. Raj’s dedication to excellence and his genuine,
              forward-thinking leadership continue to steer the organization
              towards new horizons and greater achievements in the global
              marketplace.
            </p>
          </div>
        </div>
      </li>
      <li className="stack-card" id="card2">
        <div className="stack-card-body">
          <Image
            className="img-responsive rounded"
            src="/assets/images3/directors/dhaval.webp"
            alt="Raj Thakkar"
            width={600}
            height={400}
            loading="lazy"
            style={{
              objectFit: "scale-down",
              height: "450px",
            }}
          />

          <div className="px-0 px-lg-4">
            <h5 className="mt-2 mt-lg-0 main-color3">Dhaval THAKKAR</h5>
            <p className="m-0 main-color4">Founder</p>
            <hr className="p-0 mt-2 mb-4" />
            <p className="">
              <strong> Dhaval Thakkar </strong> is a dynamic leader with over 2
              decades of experience in commercial and retail real estate,
              renowned for his attention to detail and passion for innovation.
              His leadership has been instrumental in the company’s growth,
              driving the delivery of over 1.5 million square feet of prime real
              estate across India. Dhaval’s approach is bold and
              forward-thinking, emphasizing diversification and embracing new
              technologies to create meaningful value from every challenge.
              <br />
              In addition to his expertise in real estate, Dhaval plays a
              pivotal role in managing real estate funds for developers and
              contributing to the production and distribution of movies. His
              multifaceted involvement reflects his strategic vision and
              adaptability across diverse industries.
              <br />
              What sets Dhaval apart is his ability to inspire his team,
              fostering a culture of collaboration and creativity. His
              dedication to continuous improvement has expanded the company’s
              reach and set new industry standards, ensuring the business
              remains agile and competitive in an ever-changing market.
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default DirectorCard2;
