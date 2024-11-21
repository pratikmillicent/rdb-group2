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
                      G
                    </span>
                    <p>
                      ujarat Chief Minister (CM) recently congratulated the team
                      behind the ‘Kutch Express’ for winning three national
                      awards. The team’s outstanding contribution to promoting
                      the region’s rich culture and heritage through this
                      project was recognized at the national level.
                    </p>
                  </div>
                  <p>
                    The ‘Kutch Express’ project has successfully brought to
                    light the diverse cultural elements of the Kutch region,
                    showcasing its traditional arts, music, and architecture.
                    The awards highlight the importance of preserving and
                    promoting local culture, and the CM has praised the team for
                    their hard work and dedication in bringing this vision to
                    life.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    The awards, which were presented by eminent personalities at
                    a prestigious ceremony, were a testament to the team’s
                    creativity and determination. The ‘Kutch Express’ project is
                    expected to further inspire similar cultural initiatives
                    across the country.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">What is ‘Kutch Express’ about?</h5>
                </div>
                <div className="text mt-20">
                  <p>
                    ‘Kutch Express’ is a unique cultural initiative that aims to
                    showcase the vibrancy of Kutch, a region in Gujarat known
                    for its handicrafts, music, dance, and picturesque
                    landscapes. The project includes an exhibition that travels
                    across the country, highlighting the beauty and diversity of
                    the region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">
                  The significance of national recognition for the Kutch Express
                  team.
                </h5>
              </div>

              <div className="text mb-20">
                <p>
                  Winning three national awards is a remarkable achievement for
                  the ‘Kutch Express’ team, as it not only acknowledges their
                  efforts but also brings much-needed attention to the cultural
                  richness of Kutch. This recognition will help in further
                  promoting the region’s heritage on a global scale.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">
                  Key Achievements of the Kutch Express Team:
                </h6>
                <ul className="rest">
                  <li>Successfully highlighting Kutch's culture</li>
                  <li>Receiving national recognition for creativity</li>
                  <li>
                    Bringing attention to local craftsmanship and traditions
                  </li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">
                  Future Impact of the Kutch Express Project
                </h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> Inspiring other regions to preserve their
                    cultural heritage.
                  </li>
                  <li>
                    <span>02 -</span> Encouraging national and international
                    tourism to Kutch.
                  </li>
                  <li>
                    <span>03 -</span> Promoting traditional crafts and
                    craftsmanship across India.
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  The recognition from the Gujarat CM and the national awards
                  mark a pivotal moment for the project, positioning Kutch
                  Express as a significant cultural initiative with far-reaching
                  implications for both the region and the country.
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
