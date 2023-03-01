import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
import logo from "../assets/logo.png";


function Navbar(){
    return( 
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
         <div class="container"> 
         <Link to="/">
              <img src={logo} alt="imagelogo" className="navbar-brand" />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-self-middle" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>

                </ul>
          </li>
        
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">About us</a>
            </li>
        
            <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonials</a>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>
            </li>

          <Link to="/signup">
            <button className="btn btn-outline-success">
                  Sign up
              </button>
          </Link> 
        </ul>
        </div>
        </div>  
    </nav>
  )
};

export default Navbar;