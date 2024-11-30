//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect, act } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./gallery2.css";
import Heading from "@/components/heading/Heading";
import { Modal } from "react-bootstrap";
import ImageModal from "@/components/ImageModal";

SwiperCore.use([Navigation, Pagination]);

interface IEvent {
  image: string;
  title: string;
}

interface IImage {
  image: string;
}

const mumbai: IImage[] = [
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (1).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (2).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (3).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (4).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (5).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (6).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (7).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (8).webp",
  },
  {
    image: "/assets/images3/movies/gallary/mumbai-premier/i (9).webp",
  },
];
const ahemdabad: IImage[] = [
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (1).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (2).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (3).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (4).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (5).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (6).webp",
  },
  {
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (7).webp",
  },
];

const bts: { src: string } = [
  { src: "/assets/video/video-gallery/bts-1.mp4", type: "video" },
  { src: "/assets/video/video-gallery/bts-2.mp4", type: "video" },
  { src: "/assets/video/video-gallery/bts-3.mp4", type: "video" },
];

const events: IEvent[] = [
  {
    title: "Jhamkudi Movie Mumbai Premier",
    image: "/assets/images3/movies/gallary/mumbai-premier/i (1).webp",
    items: mumbai,
  },
  {
    title: "Jhamkudi Movie Ahemdabad Premier",
    image: "/assets/images3/movies/gallary/ahemadabad-premier/i (1).webp",
    items: ahemdabad,
  },
  {
    title: "Behind The Scenes",
    image: "/assets/images3/movies/gallary/bts.webp",
    items: bts,
  },
];

function Gallary2() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

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

  const renderSlide = (item: IImage) => (
    <div className="mobile-padding" style={{ width: "100%" }}>
      <div className="">
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={800}
            height={300}
            style={{
              width: "100%",
              // height: "250px",
              objectFit: "cover",
            }}
          />
          <h3
            style={{
              position: "absolute",
              bottom: "0",
              left: "20px",
              color: "var(--white)",
              fontSize: "28px",
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        style={{
          background: "var(--background)",
          backgroundSize: "cover",
          padding: "30px 0",
        }}
      >
        <Heading headTitle="Our Gallery" />
        <div
          className="container"
          style={{
            overlayX: "hidden",
          }}
        >
          <div className="container-fluid rest">
            <div className="row movie-gallery">
              <div className="" style={{ position: "relative" }}>
                <div className="work-crus work-crus2">
                  {loadSwiper && (
                    <Swiper
                      {...swiperOptions}
                      id="content-carousel-container-unq-w"
                      className="swiper-container"
                      onSwiper={swiper => (swiperRef.current = swiper)}
                    >
                      {events.map((item, i) => (
                        <SwiperSlide onClick={() => openModal(i)} key={i}>
                          {renderSlide(item)}
                        </SwiperSlide>
                      ))}
                      {/* <div className="swiper-pagination" /> */}
                    </Swiper>
                  )}
                </div>

                <div
                  className="swiper-button-next text-dark fw-600 swiper-arrow-mobile-right"
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
                  className="swiper-button-prev text-dark swiper-arrow-mobile-left"
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
      </section>

      <ImageModal
        images={events[activeIndex].items}
        showModal={showModal}
        onClose={handleClose}
      >
        {i =>
          i.type === "video" ? (
            <video style={{ maxHeight: "450px" }} src={i.src} autoPlay />
          ) : (
            <img style={{ maxHeight: "450px" }} src={i.image} />
          )
        }
      </ImageModal>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  // spaceBetween: 40,
  loop: false,
  centeredSlides: false,
  slidesPerView: 3,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 60,
    // },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default Gallary2;
