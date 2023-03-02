import React from "react"; 
import  "./Signin.css";
import signinimage from '../Signin/signinimg.png';

function Signin() {
  return ( 
  //  Parent element
  <div className="container">

   <div className="row formpage">

        {/* Signup page */} 
      <div className="col-lg-6">  
        <div className="signinsection">

          <p className="signintext text-center mb-4"> Welcome Back!</p>
          

          {/* Signin Socials */}
          <div className="signinsocials">

              <div className="signingoogle signinsocial">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/google-logo--v1.png" className="socialicon"/>
                <span className="sign">Login with Google </span>
                </a>
              </div>

              <div className="signinfacebook signinsocial">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/facebook-f.png" className="socialicon"/>
                <span className="sign">Login with Facebook </span>
                </a>
              </div>

          </div>
          {/* Signin Socials */}

          {/* Signin form */}
          <div className="signinform">
            <form>

              <div className="formgroup mt-4 mb-4">
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

              <input className="submit text-center" value="Login" />

              <h6 className="createaccount text-center">
                Don't have an account? 
                <span className="loginlink">
                  Sign up
                </span>
              </h6>

            </form>
          </div>
          {/* Signin form */}
        </div>
      </div>  
        {/* Signin page */}


        {/* Signin image */}
        <div className="col-lg-6">
          <div className="signinimg">
            <img src={signinimage} className=" signinimg img-fluid" />
          </div>
        </div>
        {/* Signin image */}
    </div>

</div> 
  );
}

export default Signin;
