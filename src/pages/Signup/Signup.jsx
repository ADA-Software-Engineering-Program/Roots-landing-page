import React from "react"; 
import  "./Signup.css";
import signupimage from '../Signup/signupimg.png';
import { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { Link } from "react-router-dom";


function Signup() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

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

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
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
                <img src="https://img.icons8.com/ios/50/null/google-logo--v1.png" className="socialicon"/>
                <span className="sign" onClick={signInWithGoogle}>Sign up with Google </span>
                </a>
              </div>

              <div className="signupfacebook signupsocial">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/facebook-f.png" className="socialicon"/>
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
                <i class="fa-regular fa-envelope icon"></i>
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
                <i class="fa-solid fa-calendar-days icon"></i> 
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
                <i class="fa-regular fa-lock-keyhole icon"></i>
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

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check" />
                <label class="form-check-label checktext" for="check">By signing up, I agree to Roots Terms of Service and Privacy Policy.</label>
              </div>

              <input className="submit text-center" value="Create my free account" onClick={signUp}/>

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
