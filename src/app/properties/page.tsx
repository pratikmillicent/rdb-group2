"use client";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import { FaWarehouse } from "react-icons/fa6";
import {
  GiFactory,
  GiFamilyHouse,
  GiGraduateCap,
  GiHospital,
  GiTakeMyMoney,
} from "react-icons/gi";
import { MdPointOfSale, MdRealEstateAgent } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

function Properties() {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }}>
          <Image
            src="/assets/images3/properties/banner-2.jpg"
            className="w-100 d-block  news-banner banner hero-height"
            // className="w-100 d-block  news-banner hero-height"
            alt="News Banner"
            style={{ objectFit: "cover" }}
            width={800}
            height={500}
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
                // padding: "0 20px",
              }}
            >
              <Heading headTitle="Properties" color="white" isSpace={false} />
            </div>
          </div>
        </div>

        {/* <FrameSlider data={data} /> */}
        <div className="container">
          <Heading headTitle="Overview" />
          <p className="">
            <span className="text-golden">“Real Estate consultancy firm”</span>
            offering a full spectrum of real estate services, helping clients
            navigate every step from market entry and location advisory to
            property sourcing, transaction management, and investment sales.
            Whether you're looking to buy, sell, lease, or invest, we cover
            diverse sectors including residential, commercial, retail,
            education, healthcare, banking, hospitality, and warehousing. With a
            solution-driven mindset, we deliver value at every stage of the
            property lifecycle. Our expertise and commitment to excellence have
            established us as a trusted leader in the real estate industry.
          </p>

          <div className="container section-padding">
            <h3
              style={{
                color: "var(--navy)",
                width: "100%",
                marginBottom: "40px",
              }}
            >
              Key Verticals in RD Brothers Properties
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "80px" }}>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <GiFamilyHouse fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Residential
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <GiFactory fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Commercial
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <MdPointOfSale fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Retail
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <GiGraduateCap fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Education
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <GiHospital fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Healthcare
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <FaWarehouse fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Loan and Finances
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <RiHotelFill fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Hospitality
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <MdRealEstateAgent fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Warehouseing and Industrial
                </p>
              </div>
              <div
                className="shadow p-4"
                style={{ width: "calc((100% / 3) - 80px)" }}
              >
                <GiTakeMyMoney fontSize={46} color="var(--golden)" />
                <p
                  className="mt-2"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Prelease & Investment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "40px 0" }}>
          <a
            href="https://rdbrothers.com"
            target="_blank"
            style={{
              width: "fit-content",
              display: "block",
              margin: "0 auto",
              border: "none",
              background: "var(--navy)",
              color: "#fff",
              padding: "8px 16px",
            }}
          >
            Go to page
          </a>
        </div>
      </main>
    </>
  );
}

export default Properties;
