import Heading from "@/components/heading/Heading";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    title: "Tising in our life became a info noise",
    cover:
      "https://gdoc.io/uploads/Twitter_Real_Estate_Newspaper_2_1600_900_1artboards_.webp",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 2,
    title: "We create some things success in future growth",
    cover:
      "https://images.squarespace-cdn.com/content/5c115fec9d5abbba78a23c93/1597936991711-BPDT1FFFWNAGVDCD0EP7/How+Is+Commercial+Real+Estate+Valued-01.webp?format=1500w&content-type=image%2Fjpeg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 3,
    title: "We create some things success in future growth",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oK8Ovykk09mja3ilBvtk2Y6e-zIZYtURvA&s",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
];

function News2() {
  return (
    <section className="blog-modern overflow-hidden position-relative">
      <div className="container">
        <Heading headTitle="Latest News" />
        <div>
          {data?.map((item) => (
            <div key={item.id} className="position-relative">
              <div>
                <div className="max-w-sm rounded overflow-hidden bg-white mb-3 relative">
                  <div className="relative">
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
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 10,
                      }}
                    >
                      <DateBanner />
                    </div>
                  </div>
                  <div className="bg-grey" style={{ padding: "30px 40px" }}>
                    <div className="fw-700 fz-10 text-golden">LAW FIRM</div>
                    <div className="fw-600 fz-22 mb-2">{item.title}</div>
                    <p className="fz-16 fw-400">{item.description}</p>
                    <div className="px-6 pt-4 pb-2">
                      <span className="text-grey news-firm">
                        Fynley Wilkinson
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="swiper-button-prev"
          style={{ left: "0", right: "10px", top: "16px", color: "#000" }}
        ></div>
        <div
          className="swiper-button-next"
          style={{ left: "0", right: "10px", top: "16px", color: "#000" }}
        ></div>
      </div>
    </section>
  );
}

const DateBanner = () => (
  <div className="date-wrapper bg-golden">
    <div
      className="date-box text-white bg-golden"
      style={{ fontSize: "32px", fontWeight: 700 }}
    >
      10
    </div>
    <div
      className="date-letter-box py-2 text-white"
      style={{ backgroundColor: "#D29530", fontSize: "12px" }}
    >
      NOV
    </div>
  </div>
);

export default News2;
