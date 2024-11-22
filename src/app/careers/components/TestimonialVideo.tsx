//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import "./videogallery.css";
import Heading from "@/components/heading/Heading";

SwiperCore.use([Navigation, Pagination]);

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}

const data: Video[] = [
  {
    image: "/assets/images/career/testimonial-1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/career/testimonial-2.jpeg",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/career/testimonial-3.jpg",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];

function TestimonialVideo() {
  const swiperRef = useRef<SwiperCore>(null);
  const [loadSwiper, setLoadSwiper] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const renderSlide = (item: Video) => (
    <div className="">
      <div onClick={e => openVideo?.(e, item)}>
        <div style={{ position: "relative" }}>
          <svg
            style={{
              position: "absolute",
              width: "100px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="video-overlay-play-button"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              strokeWidth="15"
              stroke="#fff"
            />
            <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
          </svg>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={800}
            height={300}
            style={{ height: "250px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Heading headTitle="Employee Testimonials" />
      <div className="container">
        <div className="container-fluid rest">
          <div className="row" style={{ marginBottom: "120px" }}>
            <div className="col-12" style={{ position: "relative" }}>
              <div className="work-crus work-crus2">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-w"
                    className="swiper-container"
                    onSwiper={swiper => (swiperRef.current = swiper)}
                  >
                    {data.map((item, i) => (
                      <SwiperSlide key={i}>{renderSlide(item)}</SwiperSlide>
                    ))}
                    {/* <div className="swiper-pagination" /> */}
                  </Swiper>
                )}
              </div>

              <div
                className="swiper-button-next text-dark fw-600 swiper-arrow-mobile-right-2"
                style={{
                  fontWeight: "600",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  right: "-60px",
                  top: "59%",
                  transform: "translateY(-50%)",
                }}
              ></div>

              <div
                className="swiper-button-prev text-dark swiper-arrow-mobile-left-1"
                style={{
                  fontWeight: "600",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "-60px",
                  top: "59%",
                  transform: "translateY(-50%)",
                }}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-arrow-mobile-right-2",
    prevEl: ".swiper-arrow-mobile-right-1",
  },
};

export default TestimonialVideo;
