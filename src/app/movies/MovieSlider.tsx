import loadBackgroudImages from "@/utils/loadBackground";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./movieslider.css"; // Make sure to import Swiper CSS

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i]
        .querySelector(".bg-img")
        .setAttribute("data-swiper-parallax", 0.75 * swiper.width);
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: ".showcase-full .swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  navigation: {
    nextEl: ".showcase-full .swiper-button-next",
    prevEl: ".showcase-full .swiper-button-prev",
  },
};

function MovieSlider() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    if (loadSwiper) loadBackgroudImages();
  }, [loadSwiper]);

  return (
    <header
      className="slider showcase-full position-relative"
      style={{
        height: "80vh",
      }}
    >
      {loadSwiper && (
        <Swiper {...swiperOptions} className="swiper-container parallax-slider">
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <div className="bg-img valign" data-background={item.background}>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      )}
      <div
        style={{
          display: "flex",
          position: "absolute",
          zIndex: 1,
          top: "50%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // height: "100%",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <h4 className="banner-heading banner">
          Creating Stories that Inspire, Entertain, and Resonate.
        </h4>
      </div>

      <div className="slider-control position-absolute top-50 start-0 w-100 d-flex justify-content-between translate-middle-y">
        <div className="swiper-button-prev swiper-nav-ctrl d-flex align-items-center justify-content-center rounded-circle bg-light shadow-sm cursor-pointer">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="swiper-button-next swiper-nav-ctrl d-flex align-items-center justify-content-center rounded-circle bg-light shadow-sm cursor-pointer">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </header>
  );
}

export default MovieSlider;

const data = [
  {
    id: 2,
    background:
      "https://www.justwatch.com/images/backdrop/302387776/s640/kutch-express/kutch-express",
    year: "2023",
    type: "movie",
    title: "Kutch Express",
  },
  {
    id: 3,
    background:
      "https://theunbiasedguy.com/wp-content/uploads/2024/05/Jhamkudi.png",
    year: "2024",
    type: "movie",
    title: "Jhamkudi",
  },
];
