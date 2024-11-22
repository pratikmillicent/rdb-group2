import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Modal } from "react-bootstrap";
import "./newgroup.css";
import ImageModal from "@/components/ImageModal";

function DarkVariantExample({ spliti }: any) {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);

  const handleClose = () => setShowModal(false);

  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".blog-modern .swiper-button-next",
      prevEl: ".blog-modern .swiper-button-prev",
    },
  };

  return (
    <>
      <div className="container">
        {spliti?.map((item: any, index: any) => (
          <Row key={index}>
            <Col lg={3} className="p-0 d-none d-md-flex">
              <div className="d-flex align-self-center gap-4 mb-3 mb-lg-0">
                <div
                  className="bg-navy fw-semibold fs-5 align-self-center py-2 px-3"
                  style={{ height: "fit-content" }}
                >
                  {item.date.split(" ")?.map((part, index) => {
                    let styles = {};
                    if (index === 0) {
                      styles = {
                        fontSize: "30px", // for '1'
                        display: "block",
                        fontWeight: "400",
                        lineHeight: 1.2,
                      };
                    } else if (index === 1) {
                      styles = {
                        fontSize: "24px", // for 'Aug'
                        display: "block",
                        fontWeight: "300",
                      };
                    } else if (index === 2) {
                      styles = {
                        fontSize: "17px", // for '2023'
                        display: "block",
                        fontWeight: "300",
                        marginTop: "-6px",
                      };
                    }

                    return (
                      <span
                        className="date bg-navy text-light text-center"
                        key={index}
                        style={styles}
                      >
                        {part}
                      </span>
                    );
                  })}
                </div>
                <div
                  className="fw-semibold fs-1 align-self-center text-uppercase"
                  style={{
                    height: "fit-content",
                    width: "160px",
                    display: "block",
                  }}
                >
                  {item.title.split("<br />")?.map((line, index) => (
                    <React.Fragment key={index}>
                      <span
                        className="fw-semibold fs-6 text-uppercase fz-20"
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        {line}
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Col>

            <Col className="d-inline d-md-none p-0 p-md-2">
              <div>
                <div className="p-0 p-md-2 fs-7" key={index}>
                  {item?.date}
                </div>
              </div>

              <span>
                {item.title.split("<br />")?.map((line, index) => (
                  <React.Fragment key={index}>
                    <span className="fw-bold fs-6 px-0 px-md-2">{line}</span>
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </Col>

            <Col lg={9} className="p-0">
              <div className="container gallery-img">
                <div className="blog-carsouel">
                  {loadSwiper && (
                    <Swiper
                      onClick={() => {
                        setActiveIndex(item.id);
                        setShowModal(true);
                      }}
                      {...swiperOptions}
                      id="content-carousel-container-unq-blog"
                      className="swiper-container"
                    >
                      {item.images.map((item) => (
                        <SwiperSlide
                          key={item.id}
                          className="wow fadeInUp mb-2"
                          data-wow-delay=".1s"
                        >
                          <div className="item p-0 mb-5">
                            <div className="w-100 h-100">
                              <Image
                                src={item}
                                alt={item.description}
                                style={{
                                  height: "160px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                width={800}
                                height={500}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>

      {/* <div style={{ maxHeight: "50vh" }}>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              modules={[Navigation]}
            >
              {spliti
                .find((i) => i.id === activeIndex)
                ?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-image-container">
                      <Image
                        width={500}
                        height={300}
                        style={{ height: "300px" }}
                        src={image}
                        alt={image}
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
        images={spliti.find((i) => i.id === activeIndex)?.images}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      >
        {(i) => <img style={{ maxHeight: "450px" }} src={i} />}
      </ImageModal>
    </>
  );
}

function splitToNChunks(array, n) {
  let result: any[] = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const directionButtons = (direction) => {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        // bottom: "0",
        ...(direction === "Next" ? { right: "-80%" } : { left: "-80%" }),
        width: "fit-content",
        height: "fit-content",
        color: "black",
        fontWeight: "bold",
        padding: "10px 40px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`${direction} === Next ? button-next : button-prev swiper-arrow-mobile d-none d-md-block`}
    >
      {direction === "Next" ? (
        <IoIosArrowForward fontSize={48} />
      ) : (
        <IoIosArrowBack fontSize={48} />
      )}
    </span>
  );
};

const CarouselEvent = ({ data }) => {
  return (
    <Carousel
      interval={4000}
      controls={true}
      indicators={false}
      variant="dark"
      nextIcon={directionButtons("Next")}
      prevIcon={directionButtons("Previous")}
      className="d-flex flex-column gap-2  mb-3 mx-0 mx-md-3"
    >
      {splitarr.map((spliti, index) => {
        return (
          <CarouselItem key={index}>
            <DarkVariantExample spliti={spliti} data={data} />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};
export default CarouselEvent;

const carouselData = [
  {
    id: 1,
    date: "31 Oct 2022",
    title: "Codeword Boss CP Meet",
    images: [
      "/assets/images/news/events/Codeword Boss CP Meet/img (1).jpeg",
      "/assets/images/news/events/Codeword Boss CP Meet/img (2).jpeg",
      "/assets/images/news/events/Codeword Boss CP Meet/img (3).jpeg",
      "/assets/images/news/events/Codeword Boss CP Meet/img (4).jpeg",
    ],
  },
  {
    id: 2,
    date: "1 Aug 2023",
    title: "Codeword Edge Channel Partner Meet",
    images: [
      "/assets/images/news/events/Codeword Edge Channel Partner Meet/img (1).JPG",
      "/assets/images/news/events/Codeword Edge Channel Partner Meet/img (2).JPG",
      "/assets/images/news/events/Codeword Edge Channel Partner Meet/img (3).JPG",
      "/assets/images/news/events/Codeword Edge Channel Partner Meet/img (4).JPG",
      "/assets/images/news/events/Codeword Edge Channel Partner Meet/img (5).JPG",
    ],
  },
  {
    id: 3,
    date: "1 Aug 2023",
    title: "Codeword Edge Pooja",
    images: [
      "/assets/images/news/events/Codeword Edge Pooja/img (1).JPG",
      "/assets/images/news/events/Codeword Edge Pooja/img (2).JPG",
    ],
  },
  {
    id: 4,
    date: "1 Aug 2023",
    title: "Estella Success Party",
    images: [
      "/assets/images/news/events/Estella Success Party/img (1).jpeg",
      "/assets/images/news/events/Estella Success Party/img (2).jpeg",
      "/assets/images/news/events/Estella Success Party/img (3).jpeg",
      "/assets/images/news/events/Estella Success Party/img (4).jpeg",
      "/assets/images/news/events/Estella Success Party/img (5).jpeg",
      "/assets/images/news/events/Estella Success Party/img (6).jpeg",
      "/assets/images/news/events/Estella Success Party/img (7).jpeg",
      "/assets/images/news/events/Estella Success Party/img (8).jpeg",
      "/assets/images/news/events/Estella Success Party/img (9).jpeg",
    ],
  },
  {
    id: 5,
    date: "1 Aug 2023",
    title: "Jhamkudi Movie Mumbai Premier",
    images: [
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (1).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (2).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (3).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (4).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (5).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (6).JPG",
      "/assets/images/news/events/Jhamkudi Movie Mumbai Premier/img (7).JPG",
    ],
  },
  {
    id: 6,
    date: "1 Aug 2023",
    title: "Jhamkudi Movie Ahemdabad Premier",
    images: [
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (1).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (2).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (3).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (4).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (5).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (6).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (7).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (8).JPG",
      "/assets/images/news/events/Jhamkudi Movie Ahemdabad Premier/img (9).JPG",
    ],
  },
];

const splitarr = splitToNChunks(carouselData, 3);
