import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="container about pt-4 ">
      <div className="row">
        <div className="col-lg-6 col-md-12 pt-4">
          <div className="about-content">
            <h1 data-aos="fade-right" data-aos-duration="1000" className="mb-3">
              Hi, I'm Taha Mahmoud
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-delay="200"
              className="mb-4"
            >
              Frontend developer based on Egypt
            </h2>
            <br />
            <p
              data-aos="fade-right"
              data-aos-duration="2200"
              data-aos-delay="600"
              className="mb-4"
            >
              I became a Frontend developer because I'm drawn to <br /> a
              dynamic career that combines my spark for learning and <br />{" "}
              helping others.
            </p>
            <br />
            <p
              data-aos="fade-right"
              data-aos-duration="2200"
              data-aos-delay="600"
              className="mb-4"
            >
              I creating beautiful websites that are responsive <br /> to all
              devices. I am permanently learning new ways to <br /> increase my
              skill set to meet my client's needs.
            </p>
            <br />
            <Link to = '/work'>
                <button data-aos="fade-up" data-aos-duration="1600" className="btn">
                  See my projects
                </button>
            </Link>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="img-portofolio pt-4">
            <img
              data-aos="flip-up"
              data-aos-duration="1800"
              src={require("../../images/profile1.png").default}
              className="img-fluid"
              alt="profile_picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
