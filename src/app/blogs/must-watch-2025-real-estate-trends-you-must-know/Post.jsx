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
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">
                      T
                    </span>
                    <p>
                      he real estate market in 2025 is set to undergo
                      transformative shifts, driven by changing consumer
                      preferences, technological innovations, and economic
                      conditions.
                    </p>
                  </div>
                  <p>
                    These trends will redefine investment strategies and
                    property development worldwide. Let’s dive into the top
                    trends shaping the real estate landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    Whether you're a buyer, seller, investor, or simply curious
                    about where the market is heading, these trends will keep
                    you ahead of the game. Here's what you need to watch for in
                    2025
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">Sustainability Takes Center Stage</h5>
                </div>
                <div className="text mt-20">
                  <p>
                    Environmental consciousness is no longer optional.
                    Developers are embracing green building certifications like
                    LEED (Leadership in Energy and Environmental Design) and
                    EDGE (Excellence in Design for Greater Efficiencies).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">
                  Technology Revolutionizing the Market
                </h5>
              </div>

              <div className="text mb-20">
                <p>
                  The role of technology in real estate continues to expand.
                  From virtual property tours to blockchain-secured
                  transactions, tech-driven solutions are simplifying the buying
                  and selling process. Artificial Intelligence (AI) is also
                  making waves, offering predictive analytics to identify market
                  trends and ideal investment opportunities.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">
                  Key Highlights of 2025 Real Estate Trends
                </h6>
                <ul className="rest">
                  <li>
                    Sustainability will redefine the market with eco-friendly
                    designs and certifications.
                  </li>
                  <li>
                    Technology like PropTech, blockchain, and AI will streamline
                    real estate operations.
                  </li>
                  <li>
                    Suburban and Tier-2 cities will attract homebuyers due to
                    affordability and improved connectivity.
                  </li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">
                  Detailed Insights: 2025 Real Estate Trends
                </h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> Sustainability Takes Center Stage:
                    Developers are adopting green building certifications and
                    eco-friendly practices.
                  </li>
                  <li>
                    <span>02 -</span> PropTech Revolution: Blockchain and
                    virtual reality are making property transactions more
                    transparent and convenient.
                  </li>
                  <li>
                    <span>03 -</span> Rise in NRIs Investing: Favorable exchange
                    rates and improved regulations are driving NRI investments
                    in Indian real estate.
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  However, the 2025 real estate market is expected to see
                  significant changes with emerging trends shaping the industry.
                  Developers are focusing on eco-friendly projects, while
                  technological advancements like PropTech are streamlining
                  property transactions. Suburban areas are also gaining
                  traction due to affordability and improved connectivity.
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
