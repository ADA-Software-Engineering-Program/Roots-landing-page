import React from "react";

function Testimonials() {
    return (
        <div className="row p-5 shadow">
            <div className="row text-center">
                <h3 className="testimonials_text">Testimonials</h3>
            </div>

            <div id="carousel" className="carousel slide" data-bs-ride="carousel">

                <div className="col-1 col-lg-1">   
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </div>

                <div className="carousel-inner p-4">
                    <div className="carousel-item active justify-content-around">
                        <div className="col-12 col-lg-6 d-inline-block align-content-center">
                            <img alt="testimonials" src="https://images.unsplash.com/photo-1533781107041-b3b8441e1612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-responsive m-auto"></img>
                        </div>

                        <div className="col-12 col-lg-5 d-inline-block">
                            <i className="fa-solid fa-quote-left"></i>

                            <p className="testimonial_text"> 
                                Coming from another country, Sudan, with opposite background, I never believed that I would be able to integrate with a foreign culture. That changed when I signed up on <strong>Roots</strong>. It’s been just 6 months and I already feel like one of the natives. I recommend <strong>Roots</strong> 100%! 
                                
                                <i className="fa-solid fa-quote-right"></i>
                            </p>

                            <h3 className="text-center">Aliya Rauf</h3>
                        </div>
                    </div>

                    <div className="carousel-item justify-content-around">
                        <div className="col-12 col-lg-6 d-inline-block p-3 align-content-center">
                            <img alt="testimonials" src="https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-responsive m-auto"></img>
                        </div>

                        <div className="col-12 col-lg-5 d-inline-block">
                            <i className="fa-solid fa-quote-left"></i>

                            <p className="testimonial_text"> 
                                Coming from another country, Sudan, with opposite background, I never believed that I would be able to integrate with a foreign culture. That changed when I signed up on Roots. It’s been just 6 months and I already feel like one of the natives. I recommend Roots 100%! 
                                
                                <i className="fa-solid fa-quote-right"></i>
                            </p>

                            <h3 className="text-center">Maya </h3>
                        </div>
                    </div>
                </div>

                
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                
        </div>
    )
}

export default Testimonials;