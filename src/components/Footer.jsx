import React from "react";
import logo from '../assets/logo.png';

function Footer() {
    return (
        <div className="row p-5" id="footer">
                <div className="col-12 col-lg-6 p-5 logo">
                    <img alt="LOGO" src={logo} className="img-responsive"></img>
                    <p className="m-0 footer_text">&#169; 2010 - 2020 </p>
                    <p className="m-0 footer_text">Privacy - Terms</p>
                </div>

                <div className="col-4 col-lg-2 justify ">
                    <p><a className="nav-link" href="#">Home</a></p>
                    <p><a className="nav-link" href="#">Courses</a></p>
                    <p><a className="nav-link" href="#">Lectures</a></p>
                </div>

                <div className="col-4 col-lg-2">
                    <p className="nav-link">Quick Links</p>
                    <p><a className="nav-link" href="#">About Us</a></p>
                    <p><a className="nav-link" href="#">Testimonial</a></p>
                    <p><a className="nav-link" href="#">FAQs</a></p>
                    <p><a className="nav-link" href="#">Privacy Policy</a></p>
                </div>

                <div className="col-4 col-lg-2 footer_info">
                    <p>Company</p>
                    <p>Connect with us</p>
                    <p>124 Shomolu Lagos</p>
                    <p>roots@gmail.com</p>
                    <p>123456789</p>
                </div>
        </div>
    )
}

export default Footer;