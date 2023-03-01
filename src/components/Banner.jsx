import React from "react";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <section className="row align-items-center mt-2 banner">
                <div className="col-12 col-lg-12 col-md-12 mt-3 d-flex" id="rectangle">
                    <h4 className="">Ready to get started?</h4>
                    <Link to="/signup">
                      <button className="btn btn-success m-2 w-100" id="buttons">Sign Up</button>
                    </Link>
                </div>
        </section>
    )
}

export default Banner;