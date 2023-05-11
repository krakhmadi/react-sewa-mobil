import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ open, close }) => {
    const navigate = useNavigate();
    return (
        <aside id="aside-nav" className={open ? `d-flex` : "d-none"}>
            <div className="side-nav-bar">
                <div className="title-bar d-flex justify-content-between">
                    <strong className="title-icon">BCR</strong>
                    <span onClick={close} id="close-aside" className=" icon-times"><i className="fa fa-times"></i></span>
                </div>
                <ul className="side-nav-bar-list">
                    <li className="nav-item"><a href="#sectionOurServices" className="nav-link">Our Services</a></li>
                    <li className="nav-item"><a href="#sectionWhyUs" className="nav-link">Why Us</a></li>
                    <li className="nav-item"><a href="#sectionTestimonial" className="nav-link">Testimonial</a></li>
                    <li className="nav-item"><a href="#sectionFAQ" className="nav-link">FAQ</a></li>
                    <li>
                        <Button
                            onClick={() => navigate('/cari-mobil')}
                            className="nav-item btn btn-success">
                            Register
                        </Button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
export default SideBar