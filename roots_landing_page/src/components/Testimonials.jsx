import React from "react";

function Testimonials() {
    return (
        <div className="row">
            <div className="row p-4 text-center">
                <h3 className="testimonials_text">Testimonials</h3>
                <p className="header_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita enim similique in placeat amet non
                </p>
            </div>

            <div className="row">

                <div className="col-lg-1 col-1 d-none d-lg-flex">
                    <i className="fa-solid fa-angle-left"></i>
                </div>

                <div className="col-5 col-lg-5 mt-3 testimonial">
                    <img alt="testimonials" className="img-responsive"></img>
                </div>

                <div className="col-lg-5 col-10 p-5 m-auto">
                    <i className="fa-solid fa-quote-left"></i>

                    <p className="testimonial_text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore fuga aut ut impedit eaque delectus quia. Reiciendis ex atque quae nihil? Officia culpa aliquid, quisquam nulla necessitatibus temporibus doloremque. 
                    <i className="fa-solid fa-quote-right"></i>
                    </p>

                    <h3 className="text-center">Adewale Jolade</h3>
                </div>

                <div className="col-lg-1 col-1 d-none d-lg-flex">
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;