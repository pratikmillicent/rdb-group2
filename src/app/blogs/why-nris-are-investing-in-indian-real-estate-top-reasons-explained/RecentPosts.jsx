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
                "How Proptech Is Revolutionizing Real Estate: Insights from RD Brothers",
              image: "/assets/images/blog/blog-2.webp",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "mumbai-real-estate-5-bollywood-stars-who-have-invested-in-properties-in-bandra",
            }}
          />
          <BlogCard
            item={{
              id: 2,
              date: "August 6, 2022",
              title:
                "10 Key Factors to Consider When Investing in Real Estate in India",
              image: "/assets/images/blog/blog-1.webp",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "must-watch-2025-real-estate-trends-you-must-know",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
