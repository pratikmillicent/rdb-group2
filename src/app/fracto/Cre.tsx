import Heading from "@/components/heading/Heading";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMoebiusTriangle, GiTakeMyMoney } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import "./cre.css";

const Cre = () => {
  return (
    <section className="" style={{ background: "var(--background)" }}>
      <div className="">
        <div className="sec-lg-head">
          <div
            className="d-flex row justify-content-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="col-lg-6 fracto-text"
              style={{ color: "var(--navy)" }}
            >
              <Heading
                headTitle="Why Fracto?"
                fontSize="40px"
                textAlign="left"
                isMargin="0"
              />

              <p>
                Investing in commercial real estate has historically been one of
                the most lucrative options, providing strong returns, long-term
                stability, and portfolio diversification. Unlike other
                investment avenues, CRE offers higher yields, rental income, and
                appreciation potential while mitigating volatility. With Fracto,
                we make it easier for individual investors to tap into this
                high-value asset class, traditionally available only to
                institutional players.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                style={{ height: "80vh" }}
                src="/assets/images3/fracto/fracto.webp"
                alt="cre"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cre;

const data = [
  {
    id: 1,
    title: "High Returns",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    id: 2,
    title: "Stable Income",
    icon: <GiTakeMyMoney />,
  },
  {
    id: 3,
    title: "Portfolio Diversification",
    icon: <GiMoebiusTriangle />,
  },
  {
    id: 4,
    title: "Capital Appreciation",
    icon: <ImProfile />,
  },
];
