import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title:
      "Why NRIs are investing in Indian real estate: Top reasons explained",
    // cover: "/assets/images/home/news2.jpg",
    cover: "/assets/images/news/news-detail-1.jpg",
    author: "Admin",
    day: "18",
    month: "Nov",
    date: "November 18, 2024",
    category: "Real Estate",
    description:
      "NRIs are increasingly investing in Indian real estate due to favourable exchange rates, government reforms like RERA, and the country's...",
    url: "https://www.moneycontrol.com/news/business/why-nris-are-investing-in-indian-real-estate-top-reasons-explained-12869437.html",
  },
  {
    id: 2,
    title: "Must watch 2025 real estate trends you must know",
    cover: "/assets/images/news/news-detail-2.jpg",
    author: "Admin",
    day: "18",
    month: "Nov",
    date: "November 18, 2024",
    category: "Real Estate",
    description:
      "As we approach 2025, the real estate industry is set to undergo significant changes shaped by emerging trends that focus on sustainability...",
    url: "https://www.bizzbuzz.news/videos/must-watch-2025-real-estate-trends-you-must-know-1342593",
  },
  {
    id: 3,
    title:
      "Mumbai real estate: 5 Bollywood stars who have invested nearly ₹80 crore in properties in Bandra",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "13",
    month: "Nov",
    date: "November 13, 2024",
    category: "Real Estate",
    description:
      "Mumbai’s Bandra is synonymous with Bollywood as this is the place where several actors and actresses ...",
    url: "https://www.hindustantimes.com/real-estate/mumbai-real-estate-5-bollywood-stars-who-have-invested-in-properties-in-bandra-101731395034148.html",
  },
  {
    id: 4,
    title:
      "Jhamkudi OTT release date ShemarooMe: When to watch this Manasi Parekh-starrer Gujarati blockbuster",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "17",
    month: "Oct",
    date: "Octber 17, 2024",
    category: "Real Estate",
    description:
      "Popular influencer Viraj Ghelani made his Gujarati debut with Jhamkudi earlier this year and it chan...",
    url: "https://www.indiatimes.com/entertainment/binge/when-to-watch-jhamkudi-online-ott-shemaroome-release-date-manasi-parekh-gujarati-movie-644019.html",
  },
  {
    id: 5,
    title:
      "Jhamkudi Week 1 Box Office: Gujarati horror-com trends extraordinarily; Nets 5.50 crores to emerge a super-hit",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "07",
    month: "Jun",
    date: "Jun 07, 2024",
    category: "Real Estate",
    description:
      "Gujarati horror-comedy Jhamkudi, directed by Umang Vyas and...",
    url: "https://www.pinkvilla.com/entertainment/box-office/jhamkudi-week-1-box-office-gujarati-horror-com-trends-extraordinarily-nets-5-50-crores-to-emerge-a-super-hit-1314094",
  },
  {
    id: 6,
    title:
      "Guj CM congratulates ‘Kutch Express’ team for bagging three national awards",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "16",
    month: "Aug",
    date: "August 16, 2024",
    category: "Real Estate",
    description:
      "Ahmedabad, Aug 16 (PTI) Gujarat Chief Minister Bhupendra Patel on Friday congratulated the producers...",
    url: "https://theprint.in/feature/guj-cm-congratulates-kutch-express-team-for-bagging-three-national-awards/2226467/",
  },
  {
    id: 7,
    title:
      "Fractional real estate is the 'new Gold' for savvy festive season investors",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "31",
    month: "Oct",
    date: "Oct 31, 2024",
    category: "Real Estate",
    description:
      "Fractional ownership in real estate allows investors to invest even a small amount in a property. The investors can buy a ‘share’...",
    url: "https://www.etnownews.com/real-estate/fractional-real-estate-is-the-new-gold-for-savvy-festive-season-investors-article-114818609",
  },
  {
    id: 8,
    title:
      "Fractional Ownership: This realty segment to rise over 10 times by 2030 | Here are 3 top hotspots",
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg",
    author: "Admin",
    day: "29",
    month: "May",
    date: "May 29, 2024",
    category: "Real Estate",
    description:
      "Fractional ownership in real estate allows investors to invest even a small amount in a..",
    url: "https://www.etnownews.com/real-estate/fractional-real-https://www.financialexpress.com/money/fractional-ownership-this-realty-segment-to-rise-over-10-times-by-2030-here-are-3-top-hotspots-3506007/estate-is-the-new-gold-for-savvy-festive-season-investors-article-114818609",
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
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

function News2() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section
      className="blog-modern overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="container">
        <Heading headTitle="Latest News" />
        <div className="blog-carousel">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-blog"
              className="swiper-container"
            >
              {data?.map(item => (
                <SwiperSlide
                  key={item.id}
                  className="wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <Link href={item?.url} target="_blank">
                    <div className="max-w-sm rounded overflow-hidden bg-white position-relative">
                      {/* Image */}
                      <div className="">
                        <Image
                          src={item.cover}
                          alt={item.title}
                          width={100}
                          height={100}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* Content */}
                      <div className="bg-grey" style={{ padding: "30px 40px" }}>
                        <div className="fw-700 fz-10 text-golden">LAW FIRM</div>
                        <div className="fw-600 fz-22 mb-2">{item.title}</div>
                        <p className="fz-16 fw-400">{item.description}</p>
                        {/* Author */}
                        <div className="px-6 pt-4 pb-2">
                          <span className="text-grey news-firm">
                            Fynley Wilkinson
                          </span>
                          <div className="bg-dark date-banner">
                            {/* <DateBanner /> */}
                            <div
                              className="date-wrapper bg-golden"
                              style={{
                                position: "absolute",
                                // backgroundSize: "cover",,
                                // bottom: "445px",
                                top: "0px",
                                left: "5px",
                                // borderRadius: "5px",
                              }}
                            >
                              <div
                                className="date-box text-white bg-golden"
                                style={{ fontSize: "32px", fontWeight: 700 }}
                              >
                                {item.day}
                              </div>
                              <div
                                className="date-letter-box py-2 text-white"
                                style={{
                                  backgroundColor: "#D29530",
                                  fontSize: "12px",
                                }}
                              >
                                {item.month}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Navigation Buttons */}
        {/* <div
          className="swiper-button-next text-dark fw-600 news-arrow-mobile-right"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            // right: "-60px",
            // top: "59%",
            top: "18%",
            transform: "translateY(-50%)",
          }}
        ></div>

        <div
          className="swiper-button-prev text-dark news-arrow-mobile-left"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            position: "absolute",
            // left: "-60px",
            top: "18%",
            // top: "59%",
            transform: "translateY(-50%)",
          }}
        /> */}
      </div>
    </section>
  );
}

// const DateBanner = ({ date }) => {
//   return (
//     <div className="date-wrapper bg-golden">
//       <span>{date}</span>
//     </div>
//   );
// };

export default News2;

// const DateBanner = () => {
//   return (
//     <>
//       <div
//         className="date-wrapper bg-golden"
//         style={{
//           position: "absolute",
//           backgroundSize: "cover",
//           bottom: "445px",
//           left: "5px",
//           borderRadius: "5px",
//         }}
//       >
//         <div
//           className="date-box text-white bg-golden"
//           style={{ fontSize: "32px", fontWeight: 700 }}
//         >
//           10
//         </div>
//         <div
//           className="date-letter-box py-2 text-white"
//           style={{ backgroundColor: "#D29530", fontSize: "12px" }}
//         >
//           NOV
//         </div>
//       </div>
//     </>
//   );
// };
