import React from "react";
import image from '../assets/frame743.svg';

function Newsletter() {
    return (
        <div className="row p-5 articles justify-content-around">

                <div className="col-7 col-lg-7 col-md-7 col-sm-12 mt-5 input_row">
                    <h1 className="text-muted">Articles</h1>
                    <h3 className="text-muted">Subscribe to our newsletter</h3>
                    <p>Our channel will give you insight when a new lesson has been <br></br>uploaded as well as materials to help further your study</p>

                    <label className="form-group" htmlFor="email"></label>
                    <input type="email" placeholder="Enter your email here" className="p-2 w-75"></input>
                    <button className="btn btn-outline-dark p-1 mt-1">Subscribe</button>
                </div>

                <div className="col-5 col-lg-4 col-md-5 mt-5">
                    <img src={image} alt="" className="img-responsive w-75"></img>
                </div>
        </div>
    )
}

export default Newsletter;