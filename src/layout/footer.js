import React from "react";
import Fb from '../assets/images/icons/fi_facebook.svg';
import Ig from '../assets/images/icons/fi_instagram.svg';
import Twitter from '../assets/images/icons/fi_twitter.svg';
import Mail from '../assets/images/icons/fi_mail.svg';
import Twitch from '../assets/images/icons/fi_twitch.svg';
import logo from '../assets/images/logo/rentalll.png' 

const Footer = (props) => {
    return(
      <footer className="footer-component mt-5">
        <div className="container footer-custom">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-4 px-3 px-md-0 px-lg-2">
              <div className="wrapper-info-company-footer">
                <p className="fw-bold mb-3">
                  Jalan Suroyo No. 161 Mayangan Kota Probolinggo 67200
                </p>
                <p className="fw-bold mb-3">binarcarrental@gmail.com</p>
                <p className="fw-bold mb-3">081-233-334-808</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 px-3 px-md-0 px-lg-2">
              <p>Our Service</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-3 px-md-0 px-lg-2">
              <p className="fw-bold mb-3">Connect with us</p>
              <div className="d-flex gap-3 mb-3">
                <div className="wrap-icon">
                  <img src={Fb} alt="pict-img" className="image-icon d-block mx-auto" />
                </div>
                <div className="wrap-icon">
                  <img src={Ig} alt="pict-img" className="image-icon d-block mx-auto" />
                </div>
                <div className="wrap-icon">
                  <img src={Twitter} alt="pict-img" className="image-icon d-block mx-auto" />
                </div>
                <div className="wrap-icon">
                  <img src={Mail} alt="pict-img" className="image-icon d-block mx-auto" />
                </div>
                <div className="wrap-icon">
                  <img src={Twitch} alt="pict-img" className="image-icon d-block mx-auto" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 px-3 px-md-0 px-lg-2">
              <p className="fw-bold mb-3">Copyright Binar 2022</p>
              <div className="logo-nav-footer">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;