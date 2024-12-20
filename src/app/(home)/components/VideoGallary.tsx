//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Heading from "@/components/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Modal, Row } from "react-bootstrap";
import ImageModal from "@/components/ImageModal";

SwiperCore.use([Navigation, Pagination]);

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}

const data: Video[] = [
  {
    image: "/assets/images3/home/gallary/grand-opening.jpg",
    video: "/assets/video/video-gallery/grand-opening.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/grand-opening-2.png",
    video: "/assets/video/video-gallery/grand-opening-2.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/100cr.webp",
    video: "/assets/video/video-gallery/100cr.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/area_conference.webp",
    video: "/assets/video/video-gallery/area-conference.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/codeword_upgrade.webp",
    video: "/assets/video/video-gallery/codeword-upgreade.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/deliver.webp",
    video: "/assets/video/video-gallery/deliver.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/jamkudi.webp",
    video: "/assets/video/video-gallery/jumkudi.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },

  {
    image: "/assets/images3/home/gallary/kandivali.webp",
    video: "/assets/video/video-gallery/kandivali.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/grand_celebration.webp",
    video: "/assets/video/video-gallery/grand-celebrate.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/project_lauched.webp",
    video: "/assets/video/video-gallery/new-project.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/rudra_paradise.webp",
    video: "/assets/video/video-gallery/rundra-paradise.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/span_insta.webp",
    video: "/assets/video/video-gallery/span-insta.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images3/home/gallary/statum_event.webp",
    video: "/assets/video/video-gallery/stratum.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];

function VideoGallary() {
  const swiperRef = useRef<SwiperCore>(null);
  const vidRef = useRef();
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoData, setVideoData] = useState([]);

  console.log("videoData", videoData);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const renderSlide = (item: Video, i: number) => (
    <div className="">
      <div
        onClick={(e) => {
          openModal(i);
          setShowModal?.(e, item);
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,.3)",
            }}
          >
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
          </div>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={400}
            height={800}
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Heading headTitle="Our Gallery" />
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
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                  >
                    {data.map((item, i) => (
                      <SwiperSlide key={i}>{renderSlide(item, i)}</SwiperSlide>
                    ))}
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
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Body>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={activeIndex}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              navigation
              modules={[Navigation]}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-image-container p-0">
                    <div className="align-items-center">
                      <div className="text-center">
                        <video width="500" height="500" controls>
                          <source src={item?.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-golden bg-primary"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div> */}

      <ImageModal
        images={data}
        initial={activeIndex}
        onClose={() => {
          setShowModal(false);
        }}
        onChange={(i) => {
          if (vidRef.current) {
            vidRef.current.pause();
            vidRef.current.currentTime = 0;

            vidRef.current.src = i.video;
            vidRef.current.load();
          }
        }}
        showModal={showModal}
      >
        {(i) => (
          <video
            ref={vidRef}
            src={i.video}
            loading="lazy"
            width="500"
            style={{ maxHeight: "450px", maxWidth: "65dvw" }}
            autoPlay
            controls
          >
            {/* <source src={i?.video} type="video/mp4" /> */}
          </video>
        )}
      </ImageModal>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 40,
  loop: false,
  centeredSlides: false,
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
      spaceBetween: 60,
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

export default VideoGallary;
