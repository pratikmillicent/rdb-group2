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
              id: 6,
              date: "August 6, 2022",
              title:
                "Guj CM congratulates ‘Kutch Express’ team for bagging three national awards",
              image:
                "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h6.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "guj-cm-congratulates-kutch-express-team-for-bagging-three-national-awards",
            }}
          />
          <BlogCard
            item={{
              id: 7,
              date: "August 6, 2022",
              title:
                "Fractional real estate is the 'new Gold' for savvy festive season investors",
              image:
                "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h6.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "fractional-real-estate-is-the-new-gold-for-savvy-festive-season-investors",
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