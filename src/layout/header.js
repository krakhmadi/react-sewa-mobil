import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo/rentalll.png' 
import SideBar from "../component/Sidebar";
import gambarMobil from '../assets/images/img_car.png';
import Button from "../component/Button";

const Header = (props) => {
    const navigate = useNavigate();
    const [open, setopen] = useState(false);
    const openSideBar = () => {
        setopen(!open)
    }
    const params = useLocation()

    return(
        <div>
            <header className="header-nav" id="headerNavbar">
            <SideBar open={open} close={openSideBar} />
                <nav className="container container-custom nav-custom py-4 px-3 px-md-0">
                    <div className="wrapper-nav">
                        <div className="d-flex align-items-center">
                            <button className="logo-nav" onClick={() => navigate('/')}>
                                <img src={logo} />
                            </button>
                        </div>
                        <ul className="nav nav-pills d-none d-lg-flex justify-content-lg-center">
                            <li className="nav-item"><a href="/#sectionOurServices" className="nav-link">Our Services</a></li>
                            <li className="nav-item"><a href="/#sectionWhyUs" className="nav-link">Why Us</a></li>
                            <li className="nav-item"><a href="/#sectionTestimonial" className="nav-link">Testimonial</a></li>
                            <li className="nav-item"><a href="/#sectionFAQ" className="nav-link">FAQ</a></li>
                        </ul>
                        <div className="text-end">
                            <button
                                onClick={openSideBar}
                                id="click-btn" className="btn d-lg-none d-xl-none "><i className="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {!params.pathname.split('/').filter(i => i !== "")[1] && <section className="section-banner">
                <div className="wrapper-banner">
                    <div className="grid-item item-1 px-3 px-md-4 ps-lg-3 ps-xl-0 pe-lg-0">
                        <div className="parent-text ps-lg-3 ps-xl-0">
                            <div className="text">
                                <h1 className="judul fw-bold mb-3">Sewa & Rental mobil Terbaik di kawasan (lokasimu)</h1>
                                <p className="deskripsi fw-bold mb-3">
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
                                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                            </div>
                            <Button
                                onClick={() => navigate('/cari-mobil')}
                                className="btn btn-success">
                                Mulai Sewa Mobil
                            </Button>
                        </div>
                    </div>
                    <div className="grid-item item-2 ps-3 ps-md-4 ps-lg-0 d-flex align-items-end">
                        <div className="wrapper-mobil">
                            <img src={gambarMobil} alt="mercy" className="mobil"/>
                        </div>
                    </div>
                </div>
            </section>}
        </div>
        
        
    )
}

export default Header;