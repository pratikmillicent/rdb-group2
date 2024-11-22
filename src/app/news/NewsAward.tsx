// @ts-ignore

import Heading from "@/components/heading/Heading";
import React, { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "../movies/award.css";
import { Navigation, Autoplay } from "swiper";

const AwardNews = () => {
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

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    // <div className="container">
    //   <div>
    //     <Heading headTitle="Awards" />
    //   </div>
    //   <div className="row d-flex flex-column flex-md-row justify-content-center">
    //     {awardsData.map((award, index) => (
    //       <div
    //         className="col-sm-1 col-md-3 text-center"
    //         key={index}
    //         // style={{ margin: "5px" }}
    //       >
    //         <img
    //           src={award.img}
    //           alt={award.title}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container">
      <Heading headTitle="Awards" />
      <div className="">
        {loadSwiper && (
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-blog"
            className="swiper-container"
          >
            <div className="row d-flex flex-column flex-md-row justify-content-center">
              {awardsData.map((award, index) => (
                <SwiperSlide
                  key={index}
                  className="wow fadeInUp d-flex justify-content-center align-items-center "
                  data-wow-delay=".1s"
                >
                  <div
                    className="col-sm-1 col-md-3 text-center"
                    style={{ width: "70%" }}
                  >
                    <img src={award.img} alt={award.title} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}
      </div>

      {/* Navigation Buttons */}
      {/* <div
        className="swiper-button-next text-dark fw-600 news-arrow-mobile-right"
        style={{
          fontWeight: "600",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          // right: "-60px",
          // top: "59%",
          top: "18%",
          transform: "translateY(-50%)",
        }}
      ></div>

      <div
        className="swiper-button-prev text-dark news-arrow-mobile-left"
        style={{
          fontWeight: "600",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          position: "absolute",
          // left: "-60px",
          top: "18%",
          // top: "59%",
          transform: "translateY(-50%)",
        }}
      /> */}
    </div>
  );
};

export default AwardNews;
