import Heading from "@/components/heading/Heading";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/1.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "02",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/2.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
    {
      id: "03",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
      img: "/assets/images3/awards/3.jpg",
      recipient: "Viral Shah",
      movie: "Kutch Express",
    },
  ];

  return (
    <div className="container">
      <div>
        <Heading headTitle="Awards" />
      </div>
      <div className="row d-flex flex-column flex-md-row justify-content-center">
        {awardsData.map((award, index) => (
          <div
            className="col-sm-1 col-md-3 text-center"
            key={index}
            // style={{ margin: "5px" }}
          >
            <img src={award.img} alt={award.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardMovie;
