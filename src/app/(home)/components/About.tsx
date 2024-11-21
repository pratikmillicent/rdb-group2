// check

import React from "react";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";

function About() {
  const parallax = useParallax<HTMLDivElement>({
    speed: 10,
    translateY: [40, -40],
  });

  return (
    <section className="intro-serv section-padding">
      <div className="container">
        <div className="row md-marg justify-content-center">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <div className="mb-50">
                <h6 className="sub-title mb-15 fw-500">ABOUT US</h6>
                <h3>We want to bring business & the digital world together.</h3>
              </div>
              <div className="item d-flex align-items-center pb-20 mb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    <Image
                      src={`/assets/images2/icon1.png`}
                      alt="Landscape picture"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <h6>Shortlist your Property</h6>
                  <p>
                    Simply browse through our listings, <br /> till you find a
                    few properties that you like.
                  </p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="item d-flex align-items-center pb-20 mb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    {/* <img src={`/assets/images2/icon2.png`} alt="icon2" /> */}
                    <Image
                      src={`/assets/images2/icon2.png`}
                      alt="Landscape picture"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <h6>Contact our Agent</h6>
                  <p>
                    Once you've made your list, <br /> get in touch with us and
                    our agents will take it from there.
                  </p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="item d-flex align-items-center pb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    {/* <img src={`/assets/images2/icon3.png`} alt="icon3" /> */}
                    <Image
                      src={`/assets/images2/icon3.png`}
                      alt="Landscape picture"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <h6>Visit Properties</h6>
                  <p>
                    Our agents will then set up field visits for you to find
                    your perfect property.
                  </p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="image-container" ref={parallax.ref}>
              <div className="image-frame"></div>
              {/* <img src={`/assets/images2/about-img.jpg`} alt="person image" /> */}
              <Image
                src={`/assets/images2/about-img.jpg`}
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
