"use client";
import React, { useEffect } from "react";
//= Scripts
import parallaxie from "@/common/parallaxie";
import SocialIcon from "@/components/social-icon/SocialIcon";

function HeaderBlog() {
  useEffect(() => {
    parallaxie(".bg-img.parallaxie", 0.4);
  }, []);

  return (
    <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <h1 className="fz-55 mt-30">
                How Proptech Is Revolutionizing Real Estate: Insights from RD
                Brothers
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img
                          src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.webp"
                          alt=""
                          className="circle-img"
                        />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">Rajneesh</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img parallaxie mt-80"
        data-background="/assets/images3/blogs/banner-mumbai.webp"
      ></div>
    </header>
  );
}

export default HeaderBlog;
