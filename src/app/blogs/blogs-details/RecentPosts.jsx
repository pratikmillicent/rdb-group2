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
              id: 1,
              date: "August 6, 2022",
              title: "Free advertising for your online business.",
              image:
                "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h1.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
            }}
          />
          <BlogCard
            item={{
              id: 1,
              date: "August 6, 2022",
              title: "Free advertising for your online business.",
              image:
                "https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/h1.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
