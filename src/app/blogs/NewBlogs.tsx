import { Row } from "react-bootstrap";
import BlogCard from "./BlogCard";

const NewBlogs = () => {
  const data = [
    {
      id: 1,
      date: "August 6, 2022",
      title:
        "Navigating the Indian Real Estate Landscape: Insights from RD Brothers",
      image: "/assets/images/blog/blog-3.jpg",
      tags: ["Marketing", "Design"],
      author: "Admin",
      url: "why-nris-are-investing-in-indian-real-estate-top-reasons-explained",
    },
    {
      id: 2,
      date: "August 6, 2022",
      title:
        "10 Key Factors to Consider When Investing in Real Estate in India",
      image: "/assets/images/blog/blog-1.webp",
      tags: ["Marketing", "Design"],
      author: "Admin",
      url: "must-watch-2025-real-estate-trends-you-must-know",
    },
    {
      id: 3,
      date: "August 6, 2022",
      title:
        "How Proptech Is Revolutionizing Real Estate: Insights from RD Brothers",
      image: "/assets/images/blog/blog-2.jpg",
      tags: ["Marketing", "Design"],
      author: "Admin",
      url: "mumbai-real-estate-5-bollywood-stars-who-have-invested-in-properties-in-bandra",
    },
    // {
    //   id: 4,
    //   date: "August 6, 2022",
    //   title:
    //     "Jhamkudi OTT release date ShemarooMe: When to watch this Manasi Parekh-starrer Gujarati blockbuster",
    //   image: "/assets/images3/blogs/movies.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    //   url: "when-to-watch-jhamkudi-online-ott-shemaroome-release-date-manasi-parekh-gujarati-movie",
    // },
    // {
    //   id: 5,
    //   date: "August 6, 2022",
    //   title:
    //     "Jhamkudi Week 1 Box Office: Gujarati horror-com trends extraordinarily; Nets 5.50 crores to emerge a super-hit",
    //   image: "/assets/images3/blogs/movie5.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    //   url: "jhamkudi-week-1-box-office-gujarati-horror-com-trends-extraordinarily-nets-5-50-crores-to-emerge-a-super-hit",
    // },
    // {
    //   id: 6,
    //   date: "August 6, 2022",
    //   title:
    //     "Guj CM congratulates ‘Kutch Express’ team for bagging three national awards",
    //   image: "/assets/images3/blogs/movie6.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    //   url: "guj-cm-congratulates-kutch-express-team-for-bagging-three-national-awards",
    // },
    // {
    //   id: 7,
    //   date: "August 6, 2022",
    //   title:
    //     "Fractional real estate is the 'new Gold' for savvy festive season investors",
    //   image: "/assets/images3/blogs/building1.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    //   url: "fractional-real-estate-is-the-new-gold-for-savvy-festive-season-investors",
    // },
    // {
    //   id: 8,
    //   date: "August 6, 2022",
    //   title:
    //     "Fractional Ownership: This realty segment to rise over 10 times by 2030 | Here are 3 top hotspots",
    //   image: "/assets/images3/blogs/building2.jpg",
    //   tags: ["Marketing", "Design"],
    //   author: "Admin",
    //   url: "fractional-ownership-this-realty-segment-to-rise-over-10-times-by-2030-here-are-3-top-hotspots",
    // },
  ];
  return (
    <div>
      <section className="blog-list-half crev sub-bg">
        <div className="container">
          <Row>
            {data.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default NewBlogs;
