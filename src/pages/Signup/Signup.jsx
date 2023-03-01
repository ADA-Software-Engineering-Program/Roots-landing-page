import React from "react"; 
import  "./Signup.css";
import signupimage from '../Signup/signupimg.png';

function Signup() {
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

              <div className="signupgoogle">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/google-logo--v1.png" className="socialicon"/>
                <span className="sign">Sign up with Google </span>
                </a>
              </div>

              <div className="signupfacebook">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/facebook-f.png" className="socialicon"/>
                <span className="sign">Sign up with Facebook </span>
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
                      placeholder="John Doe" 
                      required 
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
                      placeholder="johndoe@gmail.com" 
                      required 
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
                      placeholder="Day/Month/Year" 
                      required 
                    />
                </div>
              </div>

              <div className="formgroup mt-3 mb-3">
                <label className="formtext">Password</label>
                <div className="inputcontainer"> 
                <i class="fa-regular fa-lock-keyhole icon"></i>
                    <input
                      className="inputbox"
                      type="text"
                      id="passwordInput"
                      placeholder="Minimum of 8 characters" 
                      required 
                    />
                </div>
              </div>

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check" />
                <label class="form-check-label checktext" for="check">By signing up, I agree to Roots Terms of Service and Privacy Policy.</label>
              </div>

              <input className="submit text-center" value="Create my free account" />

              <h6 className="createaccount text-center mb-5">
                Already have an account? 
                <span className="loginlink">
                  Login
                </span>
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
