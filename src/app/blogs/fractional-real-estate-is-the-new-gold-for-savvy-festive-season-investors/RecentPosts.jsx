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
              id: 5,
              date: "August 6, 2022",
              title:
                "Jhamkudi Week 1 Box Office: Gujarati horror-com trends extraordinarily; Nets 5.50 crores to emerge a super-hit",
              image: "/assets/images3/blogs/movie6.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "jhamkudi-week-1-box-office-gujarati-horror-com-trends-extraordinarily-nets-5-50-crores-to-emerge-a-super-hit",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
