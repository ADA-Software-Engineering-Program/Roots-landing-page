import React from "react";
import image from '../assets/frame.png';

function Newsletter() {
    return (
        <section className="newsletter p-5 row justify-content-center">

                <div className="col-12 col-lg-7 col-md-7 mt-5 input_row">
                    <h3 className="text-muted m-0 p-2">Subscribe to our newsletter</h3>
                    <p className="newsletter_text p-3">
                        Our channel will give you insight when a new lesson has been <br></br>uploaded as well as materials to help further your study
                    </p>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control m-0" placeholder="Enter your email here" aria-label="Enter your email here" aria-describedby="buttons"/>
                        <button className="btn btn-success" type="button" id="buttons">Subscribe</button>
                    </div>

                </div>

                <div className="col-lg-4 col-md-5 d-none d-md-flex d-lg-flex align-self-center">
                    <img src={image} alt="" className="img-fluid"></img>
                </div>

                
        </section>
    )
}

export default Newsletter;