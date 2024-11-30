import "./ourmission.css";

const AboutUs = () => {
  return (
    <>
      <section
        id="section-highlight"
        className="relative text-light"
        data-bgcolor="var(--background)"
        style={{
          backgroundColor: "var(--background)",

          borderBottom: "3px solid var(--golden)",
        }}
      >
        <div className="container">
          <div className="movie-about-spacing">
            <div
              className="row align-items-center"
              style={{ marginBottom: "60px" }}
            >
              <div className="col-md-4" style={{}}>
                <br />
                <div style={{ width: "fit-content", position: "relative" }}>
                  <h2
                    className="wow fadeInUp animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "#000",
                    }}
                  >
                    About Us
                  </h2>
                  <div
                    className="border-line position-absolute "
                    style={{
                      // width: borderWidth,
                      left: "12.5%",
                      right: "12.5%",
                      top: "100%",
                    }}
                  ></div>
                </div>
                <div className="small-border sm-left" style={{}}></div>
              </div>
              <div className="col-md-8" style={{}}>
                <p
                  className="wow fadeInRight animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                    // color: "#000",
                    fontWeight: "400",
                  }}
                >
                  <span className="text-golden">
                    “Movie production company”
                  </span>{" "}
                  dedicated to bringing compelling stories to life on the big
                  screen. With a passion for creativity and cinematic
                  excellence, we produce a diverse range of films that captivate
                  audiences and leave a lasting impact. From concept development
                  to post-production, our team of visionary filmmakers, writers,
                  and producers collaborates to craft engaging narratives across
                  various genres. Whether it’s a thought-provoking drama, an
                  inspiring biopic, or a light-hearted comedy, RD Brothers
                  Movies is committed to delivering high-quality films that
                  entertain, inspire, and resonate globally.
                </p>
              </div>
            </div>
            <div className="spacer-double" style={{}}></div>
          </div>
        </div>
      </section>

      <section className="no-top relative z1000 about-card">
        <div className="container" style={{}}>
          <div className="row" style={{ display: "flex", gap: "40px" }}>
            <div
              className="col-md-5 mb-sm-30 wow fadeInRight animated"
              style={{
                background: "var(--navy)",
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInRight",
                padding: "20px",
              }}
            >
              <div className="" style={{}}>
                <div className="" style={{}}>
                  <div className="c-inner" style={{}}>
                    <h4>
                      <i className="icofont-people"></i>
                      <span style={{ color: "var(--golden)" }}>Mission</span>
                    </h4>
                    <p style={{ color: "#fff" }}>
                      To create impactful cinematic experiences that blend
                      creativity with business acumen, ensuring our films
                      captivate audiences worldwide and contribute to the growth
                      of the entertainment industry.
                    </p>
                    <div className="spacer20" style={{}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 mb-sm-30 wow fadeInRight animated"
              style={{
                background: "var(--navy)",
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInRight",
                padding: "20px",
              }}
            >
              <div className="" style={{}}>
                <div className="" style={{}}>
                  <div className="c-inner" style={{}}>
                    <h4>
                      <i className="icofont-home"></i>
                      <span style={{ color: "var(--golden)" }}>Vision</span>
                    </h4>
                    <p style={{ color: "#fff" }}>
                      To promote meaningful filmmaking, delivering captivating
                      stories that connect with audiences on a cultural and
                      commercial level, while fostering innovation in film
                      production.
                    </p>
                    <div className="spacer20" style={{}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
