import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Heading from "@/components/heading/Heading";
//= Data

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  spaceBetween: 30,
  speed: 1000,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testim-controls .swiper-button-next",
    prevEl: ".testim-controls .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
};

function Review() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="testim-crv section-padding pt-1">
      <Heading headTitle="Reviews" />
      <div className="container">
        <div className="row ">
          <div
            className="col-lg-4 "
            style={{
              background: "url(/assets/images/movie/film_projector.jpg)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="col-lg-8">
            <div className="testim-swiper2">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                >
                  {data.map(item => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="item"
                        style={{ border: "1px solid var(--golden)" }}
                      >
                        <div className="cont mb-40">
                          <div className="rate-stars mb-20 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </div>
                          <p className="fw-400">{item.content}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-60">
                              <img
                                src={item.image}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6 className="fz-16">{item.author}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;

const data = [
  {
    id: 1,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/testimonial.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 2,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/testimonial2.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 3,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/testimonial3.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 4,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/testimonial4.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
];
