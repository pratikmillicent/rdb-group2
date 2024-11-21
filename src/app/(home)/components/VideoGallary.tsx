//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Heading from "@/components/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Modal, Row } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination]);

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}

const data: Video[] = [
  {
    image: "/assets/home/RDB_video_thumbnails/100cr.png",
    video: "/assets/video/JMKD_AHM_Premier_Compressed.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/home/RDB_video_thumbnails/area_conference.png",
    video: "/assets/video/JMKD_Mumbai_Premier.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/home/RDB_video_thumbnails/codeword_upgrade.png",
    video: "/assets/video/JMKD_Mumbai_Premier.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/home/RDB_video_thumbnails/deliver.png",
    video: "/assets/video/JMKD_Mumbai_Premier.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  // {
  //   image: "/assets/home/RDB_video_thumbnails/grand_celebration.png",
  //   video: "/assets/video/JMKD_Mumbai_Premier.mp4",
  //   title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
  //   videoId: "AzwC6umvd1s",
  //   channel: "youtube",
  // },

  {
    image: "/assets/home/RDB_video_thumbnails/jamkudi.png",
    video: "/assets/video/JMKD_Mumbai_Premier.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },

  {
    image: "/assets/home/RDB_video_thumbnails/kandivali.png",
    video: "/assets/video/JMKD_Mumbai_Premier.mp4",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];

function VideoGallary() {
  const swiperRef = useRef<SwiperCore>(null);
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

  const renderSlide = (item: Video) => (
    <div className="">
      <div
        onClick={(e) => {
          setShowModal?.(e, item);
          // console.log("first", item);
        }}
      >
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
            <polygon
              points="70, 55 70, 145 145, 100"
              fill="#fff"
            />
          </svg>
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
          <div
            className="row"
            style={{ marginBottom: "120px" }}
          >
            <div
              className="col-12"
              style={{ position: "relative" }}
            >
              <div className="work-crus work-crus2">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-w"
                    className="swiper-container"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                  >
                    {data.map((item, i) => (
                      <SwiperSlide
                        onClick={() => openModal(i)}
                        key={i}
                      >
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
      <div className="">
        <Modal
          show={showModal}
          onHide={handleClose}
        >
          <Modal.Body>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={activeIndex}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              navigation
              modules={[Navigation]}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-image-container p-0">
                    <div className="align-items-center">
                      <div className="text-center">
                        {/* <div className="w-100"> */}
                        <video
                          width="500"
                          height="500"
                          controls
                        >
                          <source
                            src={item?.video}
                            type="video/mp4"
                          />
                        </video>
                        {/* </div> */}
                        {/* <Image
                          src={item?.image}
                          className="circle-img"
                          alt="Landscape picture"
                          width={800}
                          height={300}
                          style={{ height: "250px" }}
                        /> */}
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
      </div>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,

  slidesPerView: 4,
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 60,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 60,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //   },
  // },
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
