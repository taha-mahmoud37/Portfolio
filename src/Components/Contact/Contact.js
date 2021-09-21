import React from "react";
import "./contact.scss";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="container contact py-5">
      <div className="row">
        <div className="col-lg-5 pt-5 d-flex ">
          <div className="contact-content pt-5">
            <h4 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              What’s your story?
              <br />
              Get in touch
            </h4>
            <p data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Currently available for freelancing if the right project comes up,
              feel free to contact me.
            </p>
            <h5 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Find me online:
            </h5>
            <div className="icons">
              <a href="https://twitter.com/TaHaM08">
                <FaTwitter
                  size="2rem"
                  data-aos="fade-right"
                  data-aos-duration="2200"
                  className="icon twitter"
                />
              </a>
              <a href="https://www.linkedin.com/in/taha-mahmoud-1913161aa/">
                <FaLinkedinIn
                  size="2rem"
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  className="icon linked"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100027514530868">
                <FaFacebookF
                  size="2rem"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                  className="icon facebook"
                />
              </a>
              <a href="https://github.com/taha-mahmoud37">
                <AiFillGithub
                  size="2rem"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="icon git"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 pt-4">
          <h3 className="mb-3">Send me message a here</h3>
          <form
            action="https://formcarry.com/s/Bv0kS58NMeM"
            method="POST"
            accept-charset="UTF-8"
          >
            <div className="mb-4">
              <label
                for="exampleFormControlInput1"
                className="form-label d-none"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control w-100"
                placeholder="Full Name"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
            <div className="mb-4">
              <label
                for="exampleFormControlInput1"
                className="form-label d-none"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control w-100"
                placeholder="Email address"
                data-aos="fade-left"
                data-aos-duration="1400"
              />
            </div>
            <div className="mb-4">
              <div className="form-group">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label d-none"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control w-100"
                  name="comment"
                  id="exampleFormControlTextarea1"
                  placeholder="Write comment"
                  rows="8"
                  data-aos="fade-left"
                  data-aos-duration="1800"
                ></textarea>
              </div>
            </div>

            <button
              data-aos="fade-up"
              data-aos-duration="1600"
              type="submit"
              className="btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
