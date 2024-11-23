"use client";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import ContactComponent from "./components/ContactComponent";
import OfficeAddress from "./components/OfficeAddress";

const ContactUs = () => {
  return (
    <>
      <div style={{ position: "relative", height: "94vh" }}>
        <Image
          src="/assets/images3/contact/banner.jpg"
          className="circle-img contact-banner banner"
          alt="carrer page"
          style={{ objectFit: "cover" }}
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
            <Heading headTitle="Contact Us" color="white" isSpace={false} />
          </div>
        </div>
      </div>
      <div className="container mt-60">
        <div className="d-flex gap-3">
          <div className="col-12">
            <ContactComponent />
            <div className="gap-3 section-padding">
              <div className="mt-30 mb-60">
                <Heading headTitle="Registered Offices" />

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
