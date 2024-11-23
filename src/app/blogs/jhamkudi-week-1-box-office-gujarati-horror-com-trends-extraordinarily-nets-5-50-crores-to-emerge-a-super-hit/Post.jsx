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
                      J
                    </span>
                    <p>
                      hamkudi the latest Gujarati horror-comedy film, has become
                      an unexpected blockbuster. In its first week at the box
                      office, the film has grossed an impressive ₹5.50 crores,
                      emerging as a massive hit in Gujarati cinema. Directed by
                      a fresh talent and starring Manasi Parekh, the movie is
                      captivating audiences with its unique blend of horror and
                      comedy.
                    </p>
                  </div>
                  <p>
                    The film has gained traction not only for its intriguing
                    storyline but also for its remarkable box office
                    performance. "Jhamkudi" delivers a thrilling yet hilarious
                    narrative that resonates with audiences looking for
                    something new in the Gujarati film industry. With its
                    success, it has paved the way for more regional films to
                    explore genre blending.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    The film's success can be attributed to its engaging
                    performances, especially by Manasi Parekh, who portrays a
                    charismatic lead role. Her impeccable acting, combined with
                    a well-written screenplay, has struck a chord with the
                    audience, leading to widespread word-of-mouth promotion.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">
                    What Contributed to "Jhamkudi's" Success?
                  </h5>
                </div>
                <div className="text mt-20">
                  <p>
                    "Jhamkudi" combines two highly popular genres – horror and
                    comedy – creating a unique cinematic experience for
                    audiences. The fusion of suspense, thrills, and humor has
                    made the film appealing to a broad demographic, leading to a
                    strong opening weekend. Additionally, the regional film
                    industry has embraced "Jhamkudi" for its fresh approach,
                    making it stand out in a competitive market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">Box Office Numbers for "Jhamkudi"</h5>
              </div>

              <div className="text mb-20">
                <p>
                  "Jhamkudi" has made waves in the Gujarati film industry,
                  pulling in ₹5.50 crores in its first week of release. Its
                  unprecedented box office performance is a clear sign of the
                  audience's growing appetite for fresh, experimental regional
                  cinema.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">Why Should You Watch "Jhamkudi"?</h6>
                <ul className="rest">
                  <li>Fresh blend of horror and comedy genres</li>
                  <li>Outstanding performances, especially by Manasi Parekh</li>
                  <li>Unexpected box office success and audience appeal</li>
                </ul>
              </div>

              <div className="order-list mb-30">
                <h6 className="mb-10">When is the Release Date?</h6>
                <ul className="rest">
                  <li>
                    <span>01 -</span> [Insert Release Date]: "Jhamkudi" launches
                    on ShemarooMe
                  </li>
                  <li>
                    <span>02 -</span> Watch anytime, anywhere on ShemarooMe
                  </li>
                  <li>
                    <span>03 -</span> Don't miss out on this Gujarati
                    blockbuster
                  </li>
                </ul>
              </div>

              <div className="text">
                <p>
                  Don't miss this incredible film that's creating a buzz in
                  Gujarati cinema. "Jhamkudi" is setting new trends and becoming
                  one of the year's most talked-about releases.
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
                  src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.webp"
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
            data-background="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.webp"
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
            data-background="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/blog/author1.webp"
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
