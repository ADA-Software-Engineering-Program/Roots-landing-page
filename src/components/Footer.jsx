import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Footer() {
    return (
        <section className="footer row p-5">
                <div className="col-12 col-md-3 col-lg-6 logo">
                <Link to="/"> 
                    <img alt="LOGO" src={logo} className="img-responsive"></img>
                </Link>
                    <p className="footer_text m-0">&#169; 2010 - 2020 </p>
                    <p className="footer_text m-0">Privacy - Terms</p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                     <p>
                        <Link className="nav-link" to="/">Home</Link>
                    </p>    
                    <p><a className="nav-link" href="#">Courses</a></p>
                    <p><a className="nav-link" href="#">Lectures</a></p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                    <p className="nav-heading">Quick Links</p>
                    <p>
                        <Link className="nav-link" to="/">About Us</Link>
                    </p>
                    <p><Link className="nav-link" to="/testimonials">Testimonial</Link></p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                    <p>Company</p>
                    <p>Connect with us</p>
                    <p>124 Shomolu Lagos</p>
                    <p>roots@gmail.com</p>
                    <p>123456789</p>
                </div>
        </section>
    )
}

export default Footer;