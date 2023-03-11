import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../navbar.css";
import logo from "../assets/logo.png";
import { userSignOut } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../Redux/slices/authSlice";


function Navbar(){

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSignOut = async () => {
    const res = await userSignOut();
    if (!res) {
      navigate("/");
    }
  };

    return( 
    <> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid"> 
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="imagelogo" />
          </Link>
      
        
          {isLoggedIn ? (
            <div onClick={handleSignOut}>
              <button className="btn btn-outline-success">
                Logout
              </button>
            </div>
          ) : (
          
        <>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-self-middle p-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                        <Link className="nav-link" to='/#about'>
                          About us
                        </Link>
                      </li>

                      <li className="nav-item">
                      <Link className="nav-link" to='/#features'>
                          Features
                        </Link>
                      </li>

                      <li className="nav-item">
                      <Link className="nav-link" to='/#testimonial'>
                          Testimonials
                        </Link>
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
                  
                  </>

          )}

      </div>  
    </nav>
  </>   
  )
};

export default Navbar;