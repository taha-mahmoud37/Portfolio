import React from "react";
import "./footer.scss";


function Footer() {
  return (
    <footer className="py-3">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="footer-content">
            <p>
              © 2021 copyright <span>TM</span> all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
