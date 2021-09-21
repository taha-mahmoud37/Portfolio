/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import "./navbar.scss";

// eslint-disable-next-line no-unused-vars
const Navbar = () => {
  return (
    <header className="nav-media">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid flex-column">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li class="nav-item mb-4">
                <Link to="/" className="hover-after">
                  <FaHome color="#000" size="2.5rem" className="icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/about" className="hover-after">
                  <SiAboutDotMe color="#000" size="2.5rem" className="icon" />
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/work" className="hover-after">
                  <MdWork color="#000" size="2.5rem" className="icon" />
                  <span>Work</span>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/contact" className="hover-after">
                  <MdEmail color="#000" size="2.5rem" className="icon" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light d-none nav-flex">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link active">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work">
                  <a className="nav-link active">Portfolio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link active">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
