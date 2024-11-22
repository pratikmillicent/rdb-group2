//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Heading from "@/components/heading/Heading";
import { Modal } from "react-bootstrap";
import "../movies/gallery2.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import ImageModal from "@/components/ImageModal";

SwiperCore.use([Navigation, Pagination]);

interface IEvent {
  image: string;
  title: string;
}

interface IImage {
  image: string;
}

const events: IEvent[] = [
  {
    image: "/assets/images/career/gallary/1.jpg",
  },
  {
    image: "/assets/images/career/gallary/2.jpg",
  },
  {
    image: "/assets/images/career/gallary/3.jpg",
  },
];

function CarrerGallery() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    // console.log("index", index);
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

  const renderSlide = (item: IImage, i) => (
    <div className="" style={{}}>
      <div>
        <div style={{ position: "relative", height: "300px" }}>
          <Image
            style={{ objectFit: "cover" }}
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            fill
          />

          <h3
            style={{
              position: "absolute",
              bottom: "0",
              left: "20px",
              color: "#fff",
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
      <section>
        <div className="container">
          <div className="container-fluid rest">
            <div className="row">
              <div className="col-12" style={{ position: "relative" }}>
                <div className="work-crus work-crus2">
                  {loadSwiper && (
                    <Swiper
                      {...swiperOptions}
                      id="content-carousel-container-unq-w"
                      className="swiper-container"
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      {events.map((item, i) => (
                        <span key={i} className="text-center">
                          <SwiperSlide onClick={() => openModal(i)} key={i}>
                            {renderSlide(item, i)}
                          </SwiperSlide>
                        </span>
                      ))}
                      {/* <div className="swiper-pagination" /> */}
                    </Swiper>
                  )}
                </div>

                <div
                  className="swiper-button-next text-dark fw-600 swiper-arrow-mobile-right-carrer-gallery"
                  style={{
                    fontWeight: "600",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    right: "-60px",
                    right: "-60px !important",
                    top: "59%",
                    transform: "translateY(-50%)",
                  }}
                ></div>

                <div
                  className="swiper-button-prev text-dark swiper-arrow-mobile-left-carrer-gallery"
                  style={{
                    fontWeight: "600",
                    height: "40px",
                    left: "-60px",
                    width: "40px",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "-60px !important",
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

      {/* Modal for displaying images */}
      {/* <div>
        <Modal size="md" show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Swiper
              // spaceBetween={0}
              slidesPerView={1}
              initialSlide={activeIndex}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              navigation
              modules={[Navigation]}
            >
              {events.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-image-container">
                    <img
                      style={{ maxHeight: "450px" }}
                      src={image.image}
                      alt={image.image}
                      className="landscape-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="btn btn-golden">
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div> */}

      <ImageModal
        showModal={showModal}
        images={events}
        onClose={() => setShowModal(false)}
        initial={activeIndex}
      >
        {(i) => <img style={{ maxHeight: "450px" }} src={i.image} />}
      </ImageModal>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  slidesPerView: 4,
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
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-arrow-mobile-right-carrer-gallery",
    prevEl: ".swiper-arrow-mobile-left-carrer-gallery",
  },
};

export default CarrerGallery;
