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
                      hamkudi OTT Release Date, The highly anticipated Gujarati
                      film "Jhamkudi," starring Manasi Parekh, is set to release
                      on ShemarooMe. Fans of the actress and Gujarati cinema
                      have been eagerly awaiting this movie, which promises to
                      be a big hit.
                    </p>
                  </div>
                  <p>
                    "Jhamkudi" is a charming and dramatic film that brings
                    together powerful storytelling and engaging performances.
                    Manasi Parekh, known for her versatile acting skills, plays
                    the lead role in this gripping narrative. The film is
                    expected to captivate audiences with its heartfelt plot,
                    strong characters, and emotional depth.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>
                    The release date for "Jhamkudi" on ShemarooMe is set for
                    [Insert Release Date]. Fans can tune in to watch this
                    Gujarati blockbuster at their convenience on the OTT
                    platform. The film is expected to gain significant traction,
                    especially among Gujarati-speaking audiences and those fond
                    of unique regional cinema.
                  </p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">What Makes "Jhamkudi" Stand Out?</h5>
                </div>
                <div className="text mt-20">
                  <p>
                    "Jhamkudi" stands out for its blend of emotional depth and
                    relatable storytelling. The movie delves into themes of
                    love, family, and personal growth, all while maintaining a
                    distinct Gujarati cultural touch. The performances,
                    especially that of Manasi Parekh, have garnered praise for
                    their authenticity and emotion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">
                  The Release of "Jhamkudi" on ShemarooMe
                </h5>
              </div>

              <div className="text mb-20">
                <p>
                  If you're a fan of Gujarati cinema, you won't want to miss
                  "Jhamkudi" on ShemarooMe. The film offers a fresh take on
                  contemporary Gujarati stories while staying true to the heart
                  of regional cinema. Make sure to mark your calendars for its
                  release and enjoy the film from the comfort of your home.
                </p>
              </div>

              <div className="unorder-list mb-30">
                <h6 className="mb-10">Why Watch "Jhamkudi"?</h6>
                <ul className="rest">
                  <li>Heartfelt and emotionally driven storyline</li>
                  <li>Strong performances, especially by Manasi Parekh</li>
                  <li>Unique cultural perspective in a modern setting</li>
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
                  Get ready for an engaging and emotional cinematic experience
                  when "Jhamkudi" hits ShemarooMe. The release is just around
                  the corner, and it is sure to become one of the most
                  talked-about films in Gujarati cinema this year.
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
