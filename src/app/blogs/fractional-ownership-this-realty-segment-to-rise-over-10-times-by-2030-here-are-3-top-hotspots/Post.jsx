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
                      F
                    </span>
                    <p>
                      The real estate industry is seeing a significant rise in
                      fractional ownership, with forecasts predicting that this
                      segment could grow by over 10 times by 2030. A trusted
                      insider in the industry has highlighted some key hotspots
                      for fractional ownership investments.
                    </p>
                  </div>
                  <p>
                    Fractional ownership allows multiple investors to own a
                    share of high-value real estate, making it more accessible
                    and cost-effective. This innovative model is disrupting
                    traditional property investments and is expected to
                    revolutionize the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    According to the latest reports, fractional ownership is
                    expected to see substantial growth in the coming decade. By
                    2030, it is projected to account for a large portion of real
                    estate transactions, especially in key markets where the
                    demand for luxury real estate is on the rise.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">
                    What is Fractional Ownership and Why Is It Gaining
                    Popularity?
                  </h5>
                </div>
                <div className="text mt-20">
                  <p>
                    Fractional ownership involves multiple parties sharing the
                    ownership of a single asset, such as a piece of real estate.
                    The arrangement allows individuals to invest in high-value
                    properties without the financial burden of sole ownership.
                    This model has become increasingly popular due to its
                    affordability, flexibility, and the ability to diversify
                    investment portfolios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">
                  Top 3 Hotspots for Fractional Ownership Investment
                </h5>
              </div>

              <div className="text mb-20">
                <p>
                  As fractional ownership gains traction, certain regions are
                  emerging as key hotspots for investors. These areas are seeing
                  increased demand due to their appeal in the luxury market,
                  prime real estate locations, and high returns on investment.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">Top 3 Locations:</h6>
                <ul className="rest">
                  <li>
                    Miami, Florida – A rising hotspot for vacation homes and
                    luxury investments.
                  </li>
                  <li>
                    Dubai, UAE – Offering high-end properties with great rental
                    yields and tax advantages.
                  </li>
                  <li>
                    London, UK – A classic choice for real estate investors,
                    known for its stability and growth.
                  </li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">Key Benefits of Fractional Ownership:</h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> Reduced financial risk due to shared
                    ownership.
                  </li>
                  <li>
                    <span>02 -</span> Access to high-value properties that would
                    otherwise be out of reach.
                  </li>
                  <li>
                    <span>03 -</span> Increased liquidity and flexibility in the
                    real estate market.
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  As the market continues to evolve, fractional ownership will
                  play a pivotal role in shaping the future of real estate
                  investment. Industry experts believe that this segment’s
                  growth will be instrumental in democratizing access to
                  high-value properties, making it a viable option for more
                  investors.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  faucibus eros, vitae vulputate nibh libero ac metus. Chris
                  Smith is a leading expert in real estate investment with years
                  of experience in fractional ownership.
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
                Understanding the Future of Smart Cities.
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
                The Rise of Green Building Technologies.
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
