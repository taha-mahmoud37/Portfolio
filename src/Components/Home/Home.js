import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Typical from "react-typical";

const Home = () => {
  return (
    <header className="container header d-flex align-items-center">
      <div class="row py-5">
        <div className="col-lg-4 col-md-12 img-box">
          <img
            data-aos="flip-up"
            data-aos-duration="1800"
            src={require("../../images/avater.png").default}
            className="img-fluid"
            alt="avater"
          />
        </div>

        <div className="col-lg-7 offset-lg-1 col-md-12 pt-5">
          <div className="head-content">
            <p data-aos="fade-right" data-aos-duration="1000">
              Hi, I am
            </p>
            <h1 data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" className="mb-2">
              Taha Mahmoud
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-duration="18000"
              data-aos-delay="500"
              className="mb-4"
            >
              {" "}
              I'm{" "}
              <Typical
                className="span_"
                steps={["Frontend developer", 3000, "Web designer", 3000]}
                loop={Infinity}
                wrapper="span"
              />
              from Egypt
            </h2>
            <Link to="/about">
              <button
                data-aos="fade-up"
                data-aos-duration="1600"
                className="btn"
              >
                Let's get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
