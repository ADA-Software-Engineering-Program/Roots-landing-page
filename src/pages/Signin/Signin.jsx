import React from "react"; 
import  "./Signin.css";
import signinimage from '../Signin/signinimg.png';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/slices/authSlice";


function Signin() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log({ user: result.user });
        toast.success("Login Successful...");
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
        // console.log({ result });
        toast.success("Login Successfully");
        navigate("/user/dashboard");
      })
      .catch((error) => {
        console.log(error);
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

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user/dashboard");
    }
  }, [isLoggedIn, navigate]);


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
                <span className="sign" onClick={signInWithGoogle}>Login with Google </span>
                </a>
              </div>

              <div className="signinfacebook signinsocial">
                <a href="#" >
                <img src="https://img.icons8.com/ios/50/null/facebook-f.png" className="socialicon"/>
                <span className="sign" onClick={signInWithFacebook}>Login with Facebook </span>
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
                <i className="fa-regular fa-envelope icon"></i>
                    <input
                      className="inputbox"
                      type="email"
                      id="emailInput"
                      placeholder="johndoe@gmail.com" 
                      required 
                      onChange={handleEmailChange}
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
                      placeholder="Minimum of 8 characters" 
                      required 
                      onChange={handlePasswordChange}
                    />
                </div>
              </div>

              <button className="submit text-center" onClick={loginUser} >Login</button>

              <h6 className="createaccount text-center">
                Don't have an account? 
                <Link className="loginlink" to="/signup">
                  Sign up
                </Link>
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
