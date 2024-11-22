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
              id: 5,
              date: "August 6, 2022",
              title:
                "Jhamkudi Week 1 Box Office: Gujarati horror-com trends extraordinarily; Nets 5.50 crores to emerge a super-hit",
              image: "/assets/images3/blogs/movie5.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "jhamkudi-week-1-box-office-gujarati-horror-com-trends-extraordinarily-nets-5-50-crores-to-emerge-a-super-hit",
            }}
          />
          <BlogCard
            item={{
              id: 8,
              date: "August 6, 2022",
              title:
                "Fractional Ownership: This realty segment to rise over 10 times by 2030 | Here are 3 top hotspots",
              image: "/assets/images3/blogs/building2.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "fractional-ownership-this-realty-segment-to-rise-over-10-times-by-2030-here-are-3-top-hotspots",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
