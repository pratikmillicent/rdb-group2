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
            className="cont"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <div
              className="fracto-text"
              style={{ color: "var(--navy)", width: "100%", padding: "60px" }}
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
            <div
              className=""
              style={{
                display: "flex",
                // height: "100%",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <div
                className=""
                style={{
                  fontSize: "20px",
                  background: "var(--navy)",
                  color: "#fff",
                  height: "50%",
                  width: "50%",
                  textAlign: "center",
                  lineHeight: "1000%",
                }}
              >
                1. Stable Income
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  color: "var(--navy)",
                  background: "#fff",
                  height: "50%",
                  width: "50%",
                  textAlign: "center",
                  lineHeight: "1000%",
                }}
              >
                2. High Returns
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  color: "var(--navy)",
                  background: "#fff",
                  height: "50%",
                  width: "50%",
                  textAlign: "center",
                  lineHeight: "1000%",
                }}
              >
                3. Portfolio Diversification
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  background: "var(--navy)",
                  color: "#fff",
                  height: "50%",
                  width: "50%",
                  textAlign: "center",
                  lineHeight: "1000%",
                }}
              >
                4. Capital Appriciation
              </div>
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
