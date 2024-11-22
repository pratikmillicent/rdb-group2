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
                      N
                    </span>
                    <p>
                      avigating the Indian real estate landscape has become a
                      promising venture for Non-Resident Indians (NRIs) seeking
                      financial growth and emotional connections to their
                      homeland. Insights from RD Brothers highlight the sector's
                      transformative potential driven by urbanization,
                      infrastructure development, and favorable policies.
                    </p>
                  </div>
                  <p>
                    Over the last decade, government initiatives like the
                    <strong>
                      {" "}
                      Real Estate Regulation and Development Act (RERA)
                    </strong>{" "}
                    and <strong>GST reforms</strong> have significantly enhanced
                    transparency and investor confidence. With the Indian
                    Rupee's weakening against foreign currencies, NRIs have a
                    strategic window for lucrative investments.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    Major cities like <strong>Bengaluru</strong>,{" "}
                    <strong>Mumbai</strong>, and <strong>Hyderabad</strong> are
                    emerging as prime destinations, offering high rental yields
                    and strong capital appreciation. Developers increasingly
                    cater to NRI preferences with tailored amenities, ensuring a
                    seamless investment experience.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">
                    Why Indian Real Estate Appeals to NRIs
                  </h5>
                </div>
                <div className="text mt-20">
                  <p>
                    Indian real estate is not just a financial opportunity but a
                    way for NRIs to maintain ties with their roots. Beyond
                    high-value returns, these investments often symbolize
                    long-term planning for retirement or creating a legacy for
                    future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">Key Drivers of the Sector</h5>
              </div>

              <div className="text mb-20">
                <p>
                  A combination of economic reforms and growth opportunities has
                  made the Indian real estate market a global investment magnet.
                  Here are the key factors driving this transformation:
                </p>
              </div>

              <div className="order-list mb-30">
                <ul className="rest">
                  <li>
                    <span>01 -</span> <strong>Government Policies:</strong>{" "}
                    Measures like RERA and GST reforms ensure transparency and
                    investor confidence.
                  </li>
                  <li>
                    <span>02 -</span> <strong>Urban Infrastructure:</strong>{" "}
                    Expanding metro networks, smart cities, and enhanced
                    connectivity boost demand.
                  </li>
                  <li>
                    <span>03 -</span> <strong>Market Potential:</strong> High
                    rental yields and property appreciation in tier-1 and tier-2
                    cities.
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  RD Brothers continues to guide NRIs through this dynamic
                  landscape, offering unparalleled expertise in selecting the
                  best investments to ensure lasting returns and satisfaction.
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
                  As an industry expert, Chris Smith specializes in market
                  trends and insights, guiding investors in the real estate
                  landscape with valuable expertise.
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
                Ways to Quickly Drive Traffic to <br /> Your Website.
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
                How to Manage and Retain Top Talent.
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
