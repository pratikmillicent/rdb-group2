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
import "./properties.css";

function Properties() {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }} className="hero-responsive">
          <Image
            src="/assets/images3/properties/banner.webp"
            className="w-100 d-block  news-banner banner hero-height"
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

            <div className="property-box">
              <div className="shadow p-4 circle-div">
                <GiFamilyHouse fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Residential</p>
              </div>
              <div className="shadow p-4 circle-div">
                <GiFactory fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Commercial</p>
              </div>
              <div className="shadow p-4 circle-div">
                <MdPointOfSale fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Retail</p>
              </div>
              <div className="shadow p-4 circle-div">
                <GiGraduateCap fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Education</p>
              </div>
              <div className="shadow p-4 circle-div">
                <GiHospital fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Healthcare</p>
              </div>
              <div className="shadow p-4 circle-div">
                <FaWarehouse fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Loan and Finances</p>
              </div>
              <div className="shadow p-4 circle-div">
                <RiHotelFill fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Hospitality</p>
              </div>
              <div className="shadow p-4 circle-div">
                <MdRealEstateAgent fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Warehouseing and Industrial</p>
              </div>
              <div className="shadow p-4 circle-div">
                <GiTakeMyMoney fontSize={30} color="var(--golden)" />
                <p className="mt-2 content">Prelease & Investment</p>
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
