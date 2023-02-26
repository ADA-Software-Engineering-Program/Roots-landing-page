import React from "react";
import image from '../assets/frame743.png';

function Newsletter() {
    return (
        <div className="row p-5 articles justify-content-center">

                <div className="col-12 col-lg-7 col-md-7 mt-5 input_row align-self-center">
                    <h3 className="text-muted m-0">Subscribe to our newsletter</h3>
                    <p className="newsletter_text">Our channel will give you insight when a new lesson has been <br></br>uploaded as well as materials to help further your study</p>

                    <label className="form-group" htmlFor="email"></label>
                    <input type="email" placeholder="Enter your email here" className="p-2 w-50"></input>

                    <button className="btn btn-success p-2">Subscribe</button>
                </div>

                <div className="col-lg-4 col-md-5 d-none d-md-flex d-lg-flex align-self-center">
                    <img src={image} alt="" className="img-responsive"></img>
                </div>
        </div>
    )
}

export default Newsletter;