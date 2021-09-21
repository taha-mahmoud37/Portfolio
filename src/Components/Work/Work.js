import React from "react";

import "./work.scss";
// Import Swiper styles

const Work = () => {
  return (
    <section className="container py-4 work">
      <div className="text-center">
        <h1>My Portfolio.</h1>
      </div>
      <div className="row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a href="https://medical-lap.vercel.app/" className="content">
              <img
                src={require("../../images/b.jpg").default}
                className="img-fluid"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>Medical Lab</h4>
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a href="https://tomato-restaurant.vercel.app/" className="content">
              <img
                src={require("../../images/steak8.jpg").default}
                className="img-fluid"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>Tomato</h4>
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a href="https://furniture-psi.vercel.app/" className="content">
              <img
                src={
                  require("../../images/pexels-max-vakhtbovych-6492397.jpg")
                    .default
                }
                className="img-fluid"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>Furniture</h4>
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a href="https://movies-lemon.vercel.app/" className="content">
              <img
                src={require("../../images/movie.jpg").default}
                className="img-fluid"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>Movies</h4>
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a
              href="https://taha-mahmoud37.github.io/Todo-List-App-/"
              className="content "
            >
              <img
                src={require("../../images/to-do.png").default}
                className="img-fluid h-100"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>To Do List</h4>
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-lg-4 col-md-6 protfolio mb-3"
        >
          <div className="content-card">
            <a
              href="https://taha-mahmoud37.github.io/Pop-up-Carousel/"
              className="content"
            >
              <img
                src={require("../../images/up.jpg").default}
                className="img-fluid"
                alt="fre"
              />
              <div className="cover d-flex justify-content-center align-items-center">
                <h4>Pop-up</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
