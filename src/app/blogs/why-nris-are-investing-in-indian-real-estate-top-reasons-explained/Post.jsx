"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Post() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <div className="d-flex align-items-center">
                    <span className="fz-60 fw-600 main-color line-height-1 mr-5">
                      I
                    </span>
                    <p>
                      ndian real estate has long been a lucrative investment
                      destination for Non-Resident Indians (NRIs). Over the
                      years, the sector has witnessed growth, driven by
                      urbanization, infrastructure development, and increasing
                      demand for housing.
                    </p>
                  </div>
                  <p>
                    Over the past decade, a combination of economic reforms,
                    favorable policies, and the inherent growth potential of the
                    Indian market has significantly increased NRI investments.
                    With the Indian government introducing measures like RERA
                    (Real Estate Regulation and Development Act) and tax
                    benefits, investing in Indian properties has become more
                    transparent and secure for NRIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    NRIs are particularly drawn to properties in metropolitan
                    areas and tier-2 cities that promise high returns. From
                    luxury apartments and villas to commercial properties, the
                    choices are vast. Many developers are now catering
                    specifically to NRI preferences by offering tailored
                    amenities and exclusive services. This, coupled with the
                    weakening of the Indian Rupee against foreign currencies,
                    has made real estate investment in India a strategic and
                    profitable choice.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">
                    Why Indian Real Estate Appeals to NRIs
                  </h5>
                </div>
                <div className="text mt-20">
                  <p>
                    Indian real estate has consistently been an attractive
                    investment avenue for Non-Resident Indians (NRIs).
                    Currently, the sector offers exceptional opportunities
                    across residential and commercial properties. Several
                    factors drive NRIs to invest in Indian real estate, ranging
                    from emotional connections to lucrative financial returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-qoute mt-50">
                <h6 className="fz-20">
                  <span className="l-block">
                    Increase your site traffic and gain new customers with a
                    beautiful and functional blog.
                  </span>
                  <span className="sub-title main-color mt-20 mb-0">
                    {" "}
                    - ThemesCamp Universe
                  </span>
                </h6>
              </div>
            </div>
          </div> */}

          {/* <div className="mb-50 mt-50">
            <div className="row">
              <div className="col-sm-6">
                <div className="iner-img sm-mb30">
                  <img src="/dark/assets/imgs/blog/b2.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iner-img">
                  <img src="/dark/assets/imgs/blog/b3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div> */}

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">Current Appeal of Indian Real Estate</h5>
              </div>

              <div className="text mb-20">
                <p>
                  A new report highlights that NRIs are increasingly drawn to
                  high-growth cities such as Bengaluru, Mumbai, and Hyderabad.
                  These cities promise excellent rental yields and steady
                  property appreciation. The weakening rupee also makes property
                  investments more affordable for NRIs, providing a unique
                  window for strategic investments.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                <ul className="rest">
                  <li>Yet this above sewed flirted opened ouch</li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>
                    Abominable this abidin far successfully then like piquan
                  </li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> Favorable policies, such as RERA and GST
                    reforms
                  </li>
                  <li>
                    <span>02 -</span> Transparent processes boosting investor
                    confidence
                  </li>
                  <li>
                    <span>03 -</span> Expanding urban infrastructure driving
                    demand
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  However, real estate investment also serves as a way for NRIs
                  to maintain connections with their homeland. In some cases,
                  these investments are for retirement planning or as a legacy
                  for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="info-area flex mt-20 pb-20">
          <div>
            <div className="tags flex">
              <div className="valign">
                <span>Tags :</span>
              </div>
              <div>
                <Link href="/dark/blog-classic">Tech</Link>
                <Link href="/dark/blog-classic">Geekfolio</Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="share-icon flex">
              <div className="valign">
                <span>Share :</span>
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              <div className="img">
                <img
                  src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.jpg"
                  alt=""
                  className="circle-img"
                />
              </div>
            </div>
            <div className="cont valign">
              <div className="full-width">
                <h6 className="fw-600 mb-10">Chris Smith</h6>
                <p>
                  Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                  faucibus eros, vitae vulputate nibh libero ac metus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
          <div
            className="thumb-post bg-img"
            data-background="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.jpg"
          >
            <Link href="/dark/blog-details">
              <span className="fz-12 text-u ls1 main-color mb-15">
                <i className="pe-7s-angle-left"></i> Prev Post
              </span>
              <h6 className="fw-600 fz-16">
                Ways to quickly traffic to <br /> your website.
              </h6>
            </Link>
          </div>
          <div
            className="thumb-post ml-auto text-right bg-img"
            data-background="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.jpg"
          >
            <Link href="/dark/blog-details">
              <span className="fz-12 text-u ls1 main-color mb-15">
                Next Post <i className="pe-7s-angle-right"></i>
              </span>
              <h6 className="fw-600 fz-16">
                How to Handle Your Good Employee.
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
