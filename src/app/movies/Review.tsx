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
              background: "url(/assets/images3/movies/film_projector.webp)",
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
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="item"
                        style={{ border: "1px solid var(--golden)" }}
                      >
                        <div className="cont">
                          <div className="rate-stars mb-20 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </div>
                          <div>
                            <div className="info">
                              <h6 className="fz-16">{item.author}</h6>
                            </div>
                          </div>
                          <p className="fw-400">{item.content}</p>
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
      "Superb movie. Amazing combination of Comedy+Horror+Drama\nAll characters were just superb with their acting. Mansi Parekh as Jhamkudi really played the best role😱. From start to end of the movie, you won’t stop laughing 😂.",

    author: "Vanashree Viradiya",
  },
  {
    id: 2,
    content:
      "Awesome movie ..\nMust watch... All characters played their role very well.. Gujarati movie industry is growing... Nice to see such a great horror thriller comedy mystery movie in Gujarati.. nice songs ... Especially the last one ek Raja ne so so raani .. just like Bollywood style song... If this is the track..  guj film industries will grow at its best level... \nKudos to all team members of Jhamkudi movie..",

    author: "Miral",
  },
  {
    id: 3,
    content:
      "A fantastic movie. Must watch for all Gujju families. Excellent presentation, super cinematography. Congratulations to all cast and team. Will be a super hit Gujarati movie. Best wishes.",

    author: "Dhaval Bhatt",
  },
  {
    id: 4,
    content:
      "It is horror as well as very funny the way they catches jhamkudi is very very funny story line is also amazing and suspense till the end part is very interesting it It is one of the best movie I have seen till now I just liked it so much and I will highly recommended you all to watch that movie I assure it that you will like it alot if you can understand gujrati nicely",

    author: "Bharat Shah",
  },
  {
    id: 5,
    content:
      "One of the best Gujarati movie full comedy full masti plus trilllar end is surprised 👍👍 Gujarati film is superb must watched movie best Gujarati movie ever watch with your family totally entertainment.",

    author: "Bipin Dave",
  },
];
