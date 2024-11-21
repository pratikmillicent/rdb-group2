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
                      M
                    </span>
                    <p>
                      Mumbai’s real estate market has always been a hotbed for
                      luxury investments, and Bollywood stars are among the
                      biggest players. Recently, several celebrities have
                      invested nearly ₹80 crore in prime properties located in
                      Bandra, one of Mumbai’s most sought-after neighborhoods.
                      These investments highlight the increasing appeal of
                      Mumbai’s high-end real estate market.
                    </p>
                  </div>
                  <p>
                    Bandra, known for its vibrant culture and proximity to the
                    city's film industry, has become a prime location for
                    Bollywood celebrities looking to invest in luxurious
                    properties. These stars are not only looking for lavish
                    homes but also a secure and prestigious address that aligns
                    with their high-profile status.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    Some of the biggest names in the Indian film industry, such
                    as Shah Rukh Khan, Salman Khan, and Amitabh Bachchan, have
                    already made significant investments in Bandra. These real
                    estate deals are seen as both status symbols and secure
                    long-term investments that reflect the booming demand for
                    high-end properties in Mumbai.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">
                    Why Bandra Remains a Hotspot for Bollywood Stars
                  </h5>
                </div>
                <div className="text mt-20">
                  <p>
                    Bandra’s prime location, rich cultural heritage, and
                    proximity to the film industry make it the perfect place for
                    Bollywood celebrities to invest. The area boasts luxurious
                    properties, exclusive apartments, and sprawling villas,
                    making it a top choice for actors and filmmakers. The value
                    of these properties has continued to rise, further cementing
                    Bandra’s position as the most coveted real estate
                    destination in Mumbai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">
                  Celebrities Leading the Investment Race in Bandra
                </h5>
              </div>

              <div className="text mb-20">
                <p>
                  Bollywood celebrities have been some of the biggest investors
                  in Mumbai’s real estate market. Recent reports suggest that a
                  group of A-list stars have together invested over ₹80 crore in
                  luxury homes across Bandra. These investments are part of a
                  growing trend where celebrities prefer Bandra over other parts
                  of the city due to its exclusivity and cultural significance.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">
                  Top 5 Bollywood Celebrities Who Have Invested in Bandra:
                </h6>
                <ul className="rest">
                  <li>
                    Shah Rukh Khan: ₹40 crore property in the heart of Bandra
                  </li>
                  <li>Salman Khan: Luxury villa overlooking the Arabian Sea</li>
                  <li>
                    Amitabh Bachchan: Exclusive penthouse in a high-rise tower
                  </li>
                  <li>
                    Ranbir Kapoor: Multi-bedroom apartment in a prestigious
                    location
                  </li>
                  <li>
                    Kareena Kapoor Khan: Property with panoramic views of the
                    city
                  </li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">
                  Property Trends Among Bollywood Celebrities
                </h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> Increase in demand for eco-friendly luxury
                    homes
                  </li>
                  <li>
                    <span>02 -</span> Preference for high-rise apartments with
                    sea views
                  </li>
                  <li>
                    <span>03 -</span> Investment in gated communities offering
                    high-end amenities
                  </li>
                  <li>
                    <span>04 -</span> Focus on locations that offer privacy and
                    exclusivity
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  The trend of Bollywood stars investing in Bandra has
                  significantly contributed to the area’s real estate boom.
                  These investments are seen as an endorsement of the
                  neighborhood’s prestige, further driving up property values.
                  As the demand for luxury real estate continues to rise, Bandra
                  remains at the forefront of Mumbai's high-end property market.
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
                <h6 className="fw-600 mb-10">John Doe</h6>
                <p>
                  A real estate expert with years of experience in analyzing
                  market trends. John specializes in luxury properties and has
                  an in-depth understanding of the Mumbai real estate scene,
                  particularly the celebrity-driven market.
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
                Exploring the Future of Mumbai's Real Estate Market
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
                Understanding the Role of Technology in Modern Real Estate
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
