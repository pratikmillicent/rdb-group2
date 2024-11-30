import Heading from "@/components/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "./award.css";
import { useEffect, useState } from "react";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/1.webp",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "02",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/2.webp",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "03",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/3.webp",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
  ];

  const swiperOptions = {
    // modules: [Navigation, Autoplay],
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    slidesPerView: 3,
    loop: false,
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div className="container">
      <div>
        <Heading headTitle="Awards" />
      </div>
      <div className="">
        {loadSwiper && (
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-blog"
            className="swiper-container"
          >
            <div className="row d-flex flex-column flex-md-row justify-content-center">
              {awardsData.map((award, index) => (
                <SwiperSlide
                  key={index}
                  className="wow fadeInUp d-flex justify-content-center align-items-center "
                  data-wow-delay=".1s"
                >
                  <div
                    className="col-sm-1 col-md-3 text-center"
                    style={{ width: "70%" }}
                  >
                    <img src={award.img} alt={award.title} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default AwardMovie;
