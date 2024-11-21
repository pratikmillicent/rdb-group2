import React from "react";
import BlogCard from "../BlogCard";

function RecentPosts() {
  return (
    <div className="recent-posts blog-list-half crev sub-bg section-padding mt-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-60">
              <h3>Recent Posts</h3>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginBottom: "40px",
          }}
        >
          <BlogCard
            item={{
              id: 3,
              date: "August 6, 2022",
              title:
                "Mumbai real estate: 5 Bollywood stars who have invested nearly ₹80 crore in properties in Bandra",
              image: "/assets/images/blog/blog-2.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "mumbai-real-estate-5-bollywood-stars-who-have-invested-in-properties-in-bandra",
            }}
          />
          <BlogCard
            item={{
              id: 4,
              date: "August 6, 2022",
              title:
                "Jhamkudi OTT release date ShemarooMe: When to watch this Manasi Parekh-starrer Gujarati blockbuster",
              image:
                "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h4.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "when-to-watch-jhamkudi-online-ott-shemaroome-release-date-manasi-parekh-gujarati-movie",
            }}
          />
          {/* <div className="col-lg-6">
            <div className="item mb-30">
              <div className="row rest">
                <div className="col-md-6">
                  <div className="img">
                    <img src="/dark/assets/imgs/blog/h6.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 valign">
                  <div className="cont">
                    <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                      August 6, 2022
                    </span>
                    <h5>
                      <a href="#0">Business meeting 2023 in San Francisco.</a>
                    </h5>
                    <div className="tags colorbg mt-15">
                      <a href="#0" className="me-1">
                        Marketing
                      </a>
                      <a href="#0">Design</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
