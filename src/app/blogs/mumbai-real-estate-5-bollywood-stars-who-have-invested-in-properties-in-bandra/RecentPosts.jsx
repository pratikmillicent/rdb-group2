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
              image: "/assets/images3/blogs/movie6.jpg",
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
              image: "/assets/images3/blogs/building1.jpg",
              tags: ["Marketing", "Design"],
              author: "Admin",
              url: "fractional-real-estate-is-the-new-gold-for-savvy-festive-season-investors",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
