import React from "react"; 
import  "./Signup.css";
import signupimage from '../Signup/signupimg.png';
import { useState } from "react";
import { auth, createUserProfile } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Signup() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFullnameChange = (event) => {
    const value = event.target.value;
    setFullname(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleBirthdateChange = (event) => {
    const value = event.target.value;
    setBirthdate(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, uid } = result.user;
        createUserProfile({
          fullname,
          email,
          birthdate,
          uid,
        });
        toast.success("Registration Successful");
        navigate("/user/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        // const user = result.user;
        toast.success("Login Successfully");
        navigate("/user/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const fprovider = new FacebookAuthProvider();
  const signInWithFacebook = () => {
    signInWithPopup(auth, fprovider)
      .then(() => {
        // console.log({ result });
        toast.success("Login Successfully");
        navigate("/user/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };


  return ( 
  //  Parent element
  <div className="container">

   <div className="row formpage">

        {/* Signup page */} 
      <div className="col-lg-6">  
        <div className="signupsection">

          <p className="signuptext text-center mb-5"> Create your account to start learning on Roots!</p>
          

          {/* Signup Socials */}
          <div className="signupsocials">

              <div className="signupgoogle signupsocial">
                <a href="#">
                <img src="https://img.icons8.com/fluency/48/null/google-logo.png" className="socialicon"/>
                <span className="sign" onClick={signInWithGoogle}>Sign up with Google </span>
                </a>
              </div>

              <div className="signupfacebook signupsocial">
                <a href="#" >
                <img src="https://img.icons8.com/external-justicon-flat-justicon/64/null/external-facebook-social-media-justicon-flat-justicon.png" className="socialicon"/>
                <span className="sign" onClick={signInWithFacebook}>Sign up with Facebook </span>
                </a>
              </div>

          </div>
          {/* Signup Socials */}

          {/* Signup form */}
          <div className="signupform">
            <form>

              <div className="formgroup mt-3 mb-3">
                <label className="formtext">Full Name</label>
                <div className="inputcontainer"> 
                  <i className="fa-regular fa-user icon"></i> 
                    <input
                      className="inputbox"
                      type="text"
                      id="firstnameInput"
                      value={fullname}
                      placeholder="John Doe" 
                      required 
                      onChange={handleFullnameChange}
                    />
                </div>
              </div>

              <div className="formgroup mt-3 mb-3">
                <label className="formtext">Email</label>
                <div className="inputcontainer"> 
                <i className="fa-regular fa-envelope icon"></i>
                    <input
                      className="inputbox"
                      type="email"
                      id="emailInput"
                      value={email}
                      placeholder="johndoe@gmail.com" 
                      required 
                      onChange={handleEmailChange}
                    />
                </div>
              </div>

              <div className="formgroup mt-3 mb-3">
                <label className="formtext">Date of Birth</label>
                <div className="inputcontainer"> 
                <i className="fa-solid fa-calendar-days icon"></i> 
                    <input
                      className="inputbox"
                      type="date"
                      id="dateInput"
                      value={birthdate}
                      placeholder="Day/Month/Year" 
                      required 
                      onChange={handleBirthdateChange}
                    />
                </div>
              </div>

              <div className="formgroup mt-3 mb-3">
                <label className="formtext">Password</label>
                <div className="inputcontainer"> 
                <i className="fa-regular fa-lock-keyhole icon"></i>
                    <input
                      className="inputbox"
                      type="password"
                      id="passwordInput"
                      value={password}
                      placeholder="Minimum of 8 characters" 
                      required 
                      onChange={handlePasswordChange}
                    />
                </div>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check" />
                <label className="form-check-label checktext">By signing up, I agree to Roots Terms of Service and Privacy Policy.</label>
              </div>

              <button className="submit text-center" onClick={signUp}>Create my free account</button>

              <h6 className="createaccount text-center mb-5">
                Already have an account? 
                <Link to="/signin" className="loginlink">
                  Login
                </Link>
              </h6>

            </form>
          </div>
          {/* Signup form */}
        </div>
      </div>  
        {/* Signup page */}


        {/* Signup image */}
        <div className="col-lg-6">
          <div className="signupimg">
            <img src={signupimage} className=" signupimg img-fluid" />
          </div>
        </div>
        {/* Signup image */}
    </div>

</div> 
  );
}

export default Signup;
