import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 40,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    onSwiper: (swiper) => {
      setTimeout(() => {
        swiper.navigation.init();
        swiper.navigation.update();
      }, 0);
    },
  };

  return (
    <div>
      <section className="blog-modern">
        <div className="container">
          <div className="sec-lg-head">
            <div className="row">
              <div className="col-lg-12">
                <Heading headTitle="Projects" />
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              gap: "12px",
              fontSize: "18px",
              fontWeight: "500",
              color: "var(--navy)",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
              }}
            >
              Upcoming
            </div>

            <div
              style={{
                position: "absolute",
                left: "2px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>
          <div className="position-relative">
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {upcomingProjectsData.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="wow fadeInUp"
                      data-wow-delay=".100s"
                    >
                      <div className="item pb-5 mb-3">
                        <div className="img img-container">
                          <Image
                            src={item.image}
                            alt={item.description}
                            style={{
                              height: "320px",
                              objectFit: "cover",
                              width: "100%",
                              borderRadius: "8px",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="cont mt-30">
                          <h6 className="fw-600">{item.description}</h6>
                          <Link
                            href={"/realty/" + item.id}
                            className="mt-6 ls1 sub-title fw-500"
                            style={{
                              color: "#333",
                              fontSize: "14px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            Read More{" "}
                            <i
                              className="ml-5"
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.3s" }}
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div
              className="d-none d-md-block swiper-button-next text-dark fw-600 swiper-arrow-mobile"
              style={{
                fontWeight: "600",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                right: "-60px",
                top: "56%",
                transform: "translateY(-50%)",
              }}
            />

            <div
              className=" d-none d-md-block swiper-button-prev text-dark swiper-arrow-mobile d-none d-md-block"
              style={{
                fontWeight: "600",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                position: "absolute",
                left: "-60px",
                top: "56%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

const ongoingProjectsData = [
  {
    id: 1,
    image: "/assets/images/realty/projects/2.webp",
    description: "Skyline Tower in South Mumbai - Expected Completion in 2025",
  },
  {
    id: 2,
    image: "/assets/images/realty/projects/3.webp",
    description: "Tech Park in Andheri - Expected Completion in 2024",
  },
];

const completedProjectsData = [
  {
    id: 1,
    image: "/assets/images/realty/projects/1.webp",
    description: "Luxury Apartments in South Mumbai - Completed in 2023",
  },
  {
    id: 2,
    image: "/assets/images/realty/projects/4.webp",
    description: "Commercial Complex in Andheri - Completed in 2022",
  },
  {
    id: 3,
    image: "/assets/images/realty/projects/5.webp",
    description: "Eco-Friendly Villas in Pune - Completed in 2021",
  },
];

const upcomingProjectsData = [
  {
    id: 1,
    image: "/assets/images3/realty/projects/borivali.webp",
    description: "Borivali West",
  },
];
