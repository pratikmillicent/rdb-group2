import Heading from "@/components/heading/Heading";
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title: "Best Actress - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/7.jpg",
      recipient: "Manasi Parekh",
      movie: "Kutch Express",
    },
    {
      id: "02",
      title: "Best Costume Design - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/8.jpg",
      recipient: "Niki Joshi",
      movie: "Kutch Express",
    },
    {
      id: "03",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images/movie/awards/6.jpg",
      recipient: "Viral Shah",
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
          <div className="col-sm-1 col-md-3 text-center" key={index}>
            <img src={award.img} alt={award.title} />
            <span className="award-info">
              <span className="fs-4 pt-3">{award.recipient}</span>
              <i className="text-golden">{award.movie}</i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardMovie;