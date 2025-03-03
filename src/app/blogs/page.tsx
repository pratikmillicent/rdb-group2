"use client";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import NewBlogs from "./NewBlogs";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          style={{ objectFit: "cover" }}
          src="/assets/images3/blogs/banner.webp"
          className="circle-img blog-banner banner"
          alt="Landscape picture"
          width={800}
          height={500}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
      </div>
      <section className="" style={{ paddingBottom: "60px" }}>
        <div className="container">
          <div className="sec-lg-head">
            <div className="mt-30 mb-60">
              <Heading headTitle="Blogs" />
            </div>
          </div>
          <NewBlogs />
        </div>
      </section>
    </>
  );
};

export default Blog;
