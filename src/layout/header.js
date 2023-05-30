import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/rentalll.png";
import SideBar from "../component/Sidebar";
import Button from "../component/Button";
import { LoginToken } from "../config/login-token";

const Header = (props) => {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const openSideBar = () => {
    setopen(!open);
  };
  const params = useLocation();

  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Return null to hide the component
  }

  return (
    <div>
      <header className="header-nav" id="headerNavbar">
        <SideBar open={open} close={openSideBar} />
        <nav className="container nav-custom py-4 px-3 px-md-0">
          <div className="wrapper-nav">
            <div className="d-flex align-items-center">
              <button className="logo-nav" onClick={() => navigate("/")}>
                <img src={logo} />
              </button>
            </div>
            <ul className="nav nav-pills d-none d-lg-flex justify-content-lg-end align-items-center gap-2">
              <li className="nav-item">
                <a href="/#sectionOurServices" className="nav-link">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/#sectionWhyUs" className="nav-link">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/#sectionTestimonial" className="nav-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href="/#sectionFAQ" className="nav-link">
                  FAQ
                </a>
              </li>
              <li>
                {!LoginToken ? (
                  <Button
                    onClick={() => navigate("/login")}
                    className="nav-item btn btn-success"
                  >
                    Register
                  </Button>
                ) : (
                  <Button
                    className="nav-item btn "
                    style={{
                      background: "#F0F3FF",
                      border: "solid",
                      borderColor: "#0D28A6",
                      color: "#0D28A6",
                    }}
                    onClick={() => {
                      navigate("/");
                      localStorage.removeItem("ACCESS_TOKEN");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Button>
                )}
              </li>
            </ul>
            <div className="text-end">
              <button
                onClick={openSideBar}
                id="click-btn"
                className="btn d-lg-none d-xl-none "
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
