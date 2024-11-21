import Heading from "@/components/heading/Heading";
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/1.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "02",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/2.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "03",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/3.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "04",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/4.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "05",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/5.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "12",
      title: "Best Costume Design - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/12.jpg",
      recipient: "Niki Joshi",
      movie: "Kutch Express",
    },
    {
      id: "13",
      title: "Best Costume Design - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/13.jpg",
      recipient: "Niki Joshi",
      movie: "Kutch Express",
    },
  ];

  return (
    <div className="container">
      <div>
        <Heading headTitle="Awards" />
      </div>
      <div className="row d-flex flex-column flex-md-row justify-content-center">
        {awardsData.map((award, index) => (
          <div
            className="col-sm-1 col-md-3 text-center"
            key={index}
            // style={{ margin: "5px" }}
          >
            <img src={award.img} alt={award.title} />
            {/* <span className="award-info">
              <span className="fs-4 pt-3">{award.recipient}</span>
              <i className="text-golden">{award.movie}</i>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardMovie;
