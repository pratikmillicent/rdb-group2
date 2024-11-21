// check
"use client";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Heading from "@/components/heading/Heading";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcon from "@/components/social-icon/SocialIcon";
import OfficeAddress from "./components/OfficeAddress";
import ContactComponent from "./components/ContactComponent";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div style={{ position: "relative", height: "94vh" }}>
        <Image
          src="/assets/images3/contact/banner-2.jpg"
          className="circle-img contact-banner banner"
          alt="carrer page"
          style={{ objectFit: "cover" }}
          // width={800}
          // height={500}
          // objectFit="contain"
          objectFit="cover"
          fill
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            {/* <h3 className="banner-heading hero-heading">Contact us</h3> */}
            <Heading headTitle="Contact Us" color="white" isSpace={false} />

            {/* <div
              style={{
                width: "90px",
                height: "3px",
                borderTop: "solid 2px var(--golden) !important",
                borderLeft: "none",
                borderRight: "none",
                display: "block",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            ></div> */}
          </div>
        </div>
      </div>
      <div className="container mt-60">
        <div className="d-flex gap-3">
          <div className="col-12">
            {/* <Heading headTitle="Contact Us!" /> */}
            {/* <section className="contact-crev mt-30">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5" style={{ paddingLeft: 0 }}>
                    <div className="sec-lg-head mb-60">
                      <h2 className="fz-50">
                        Let's get in <br /> touch with us.
                      </h2>
                      <p className="fz-15 mt-10">
                        If you would like to work with us or just want to get in
                        touch, we’d love to hear from you!
                      </p>
                      <div className="phone fz-30 fw-600 mt-30">
                        <a href="#0" className="text-decoration-none">
                          +91 9877737776
                        </a>
                      </div>
                      <div className="d-flex justify-content-start">
                        <SocialIcon />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1 valign">
                    <div className="full-width">
                      <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages"></div>
                        <div className="controls row">
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <input
                                style={{ background: "white" }}
                                id="form_name"
                                type="text"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <input
                                style={{ background: "white" }}
                                id="form_email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group mb-30">
                              <input
                                style={{ background: "white" }}
                                id="form_subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <textarea
                                style={{ background: "white" }}
                                id="form_message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                              ></textarea>
                            </div>
                            <div className="mt-30 mb-20">
                              <button
                                type="submit"
                                className="butn butn-md butn-bord radius-30"
                              >
                                <span className="text">Let's Talk</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <ContactComponent />
            <div className="gap-3 section-padding">
              <div className="mt-30 mb-60">
                <Heading headTitle="Registered Offices" />
                {/* <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Global Ventures Pvt.Ltd.:
                    </p>
                    <p>50l, 5th Floor Dalamal House,</p>
                    <p>206 Jamnalal Bajal Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021,</p>
                    <p>CIN no. U01100MH2917PTC301477</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>Aspect House,2 Floor-3,Plot-66,</p>
                    <p>Shaikh Memon Sreet,</p>
                    <p>Zaveri Bazar,Klbadevi,</p>
                    <p>Mumbai - 400002.</p>
                    <p>CIN no U65999MH2011PTC217736</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Aspect Infrastructure:</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 318,Village Bandra,</p>
                    <p>CIN no.U74999MH2017PTC302872</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">Aspect Reality</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 1318,Village Bandra,</p>
                    <p>Bandra West, Mumbai - 400050</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>4th Floor,12 A Nichani Kutir,</p>
                    <p>CTS no. 996.TPS - 11,</p>
                    <p>Juhu Tara Rd,Mumbai - 400049,</p>
                    <p>CIN no. U01100MH2013PTC249055</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Ecomix Concrete:</p>
                    <p>Survey No.229(A), Off Eastern Freeway,</p>
                    <p>Before Bhakti Park Exit, Next to Apple</p>
                    <p>Cricket Ground, Wadala - 400074, </p>
                    <p>CIN no.ABD-0877</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">Aspect Reality</p>
                    <p>Office No.7,Ground Floor,</p>
                    <p>Railway Road,</p>
                    <p>Near Chinpurni Mata Mandir,</p>
                    <p>Sec-05,Gurgaon,</p>
                    <p>Haryana-22001,</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>501,5th Floor, Dalamal House,</p>
                    <p>206 Jamnalal Bajaj Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Email ID:</p>
                    <p>info@aspectglobal</p>
                  </div>
                </div> */}
                <OfficeAddress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
