import React from "react";
import Heading from "@/components/heading/Heading";

const OfficeAddress = () => {
  const branchOffice = [
    {
      branch: "Surat",
      address:
        "304, Eco Futurz,Opp. Samarth Aquastic,Near Om Terrace,New City light Road,Surat - 395007",
      phone: "+1 123-456-7890",
      email: "surat@rdbrothers.com",
      image: "/assets/images3/contact/offices/surat.webp",
    },
    {
      branch: "Vadodara",
      address:
        "Office No. 420,Neptune Edge,Sarabhai Campus,Nr. Genda Circle, Vadiwadi,Vadodara - 390023",
      email: "info@example.com",
      phone: "+1 123-456-7890",
      image: "/assets/images3/contact/offices/baroda.webp",
    },
    {
      branch: "Ahmedabad",
      address:
        "C 2/01,The First Commercial Complex,B/H Keshav Baug Party,Plot Near Shivalik High Street,Vastrapur, Ahmedabad - 380015",
      phone: "+1 123-456-7890",
      email: "ahmedabad@rdbrothers.com",
      image: "/assets/images3/contact/offices/ahmedabad.webp",
    },
  ];

  return (
    <div>
      <div className="">
        <Heading headTitle="Mumbai" textAlign="left" />
        <div className="d-md-flex d-block gap-3">
          <div className="col-md-4" style={{ backgroundSize: "cover" }}>
            <img
              src={"/assets/images3/contact/offices/goregaon.webp"}
              alt=""
              className="img-fluid"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              Goregaon{" "}
              <span style={{ fontSize: "16px", color: "var(--golden)" }}>
                Mumbai Corporate Office
              </span>
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  {" "}
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>
                <span>
                  Plot No. T-1, Cama Estate, Walbhat Road, Goregaon East, Mumbai
                  - 400 063
                </span>
              </span>
              {/* <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span>
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </span> */}
              {/* <span>
                <i className="id-color fa fa-file-pdf-o fa-lg"></i>
                <a href="#">Download Brochure</a>
              </span> */}
            </address>
          </div>
          <div className="col-md-4" style={{ backgroundSize: "cover" }}>
            <img
              src={"/assets/images3/contact/offices/borivali-2.webp"}
              alt=""
              className="img-fluid"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              Borivali
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  {" "}
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>
                <span>
                  Office No. 1, 2nd floor,Esspee Tower,Opp. Oberoi Sky
                  City,Datta Pada Road,Off W.E. Highway,Borivali (E) Mumbai -
                  400066
                </span>
              </span>
              {/* <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span> */}
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:borivali@rdbrothers.com">
                  borivali@rdbrothers.com
                </a>
              </span>
            </address>
          </div>
          <div className="col-md-4" style={{ backgroundSize: "cover" }}>
            <img
              src={"/assets/images3/contact/offices/mumbai-metro.webp"}
              alt=""
              className="img-fluid"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              Andheri
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  {" "}
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>
                <span>
                  302/303, 3rd Floor, 72 Empire,WEH Metro Station, Gate No. 8,
                  Near Western Express Highway, Andheri East. Mumbai - 400 099.
                </span>
              </span>
              {/* <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span> */}
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:info@rdbrothers.com">info@rdbrothers.com</a>
              </span>
            </address>
          </div>
        </div>
      </div>

      <Heading headTitle="Gujarat" textAlign="left" />
      <div className="row">
        {branchOffice.map((item, index) => (
          <div
            key={index}
            className="col-md-4 "
            style={{ backgroundSize: "cover", marginBottom: "20px" }}
          >
            <img
              src={item.image}
              alt=""
              className="img-fluid mb30"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              {item.branch}
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>

                <span>{item.address}</span>
              </span>
              {/* <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span>
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </span> */}
            </address>
          </div>
        ))}
      </div>

      <div className="">
        <Heading headTitle="West Bengal" textAlign="left" />
        <div className="d-flex gap-3">
          <div className="col-md-4" style={{ backgroundSize: "cover" }}>
            <img
              src={"/assets/images3/contact/offices/kolkata.avif"}
              alt=""
              className="img-fluid"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              Kolkata
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  {" "}
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>
                <span>
                  10, Camac Street, Industry House, 11th Floor, Kolkata - 700017
                </span>
              </span>
              <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +91 91379 61485
              </span>
              {/* <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:prem.parasia@rdbrothers.com">
                  prem.parasia@rdbrothers.com
                </a>
              </span> */}
            </address>
          </div>
        </div>
      </div>

      <div className="">
        <Heading headTitle="United Arab Emirates" textAlign="left" />
        <div className="d-flex gap-3">
          <div className="col-md-4" style={{ backgroundSize: "cover" }}>
            <img
              src={"/assets/images3/contact/offices/dubai.webp"}
              alt=""
              className="img-fluid"
              style={{ marginBottom: "15px", height: "250px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              Dubai
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  {" "}
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>
                <span>1102, Regal Towers,Business Bay</span>
              </span>
              {/* <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span> */}
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:prem.parasia@rdbrothers.com">
                  prem.parasia@rdbrothers.com
                </a>
              </span>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAddress;
