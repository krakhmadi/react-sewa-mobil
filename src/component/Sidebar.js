import React from 'react';

const SideBar = ({ open, close }) => {
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
                </ul>
            </div>
        </aside>
    )
}
export default SideBar