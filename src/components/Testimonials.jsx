import React from "react";

function Testimonials() {
    return (
        <section className="testimonial row shadow-sm bg-body rounded d-flex align-content-middle" id="testimonial">
            <div className="justify-content-center d-flex">
                <h3 className="text-center">Testimonials</h3>
            </div>

            <div id="carousel" className="carousel slide w-100 p-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="col-12 col-lg-6 d-inline-block">
                            <img alt="testimonials" src="https://images.unsplash.com/photo-1533781107041-b3b8441e1612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-responsive w-100"></img>
                        </div>

                        <div className="col-12 col-lg-6 d-inline-block p-3">
                            
                            <p className="testimonial_text m-auto"> 
                            <i className="fa-solid fa-quote-left"></i><br></br>
                                Coming from another country, Sudan, with opposite background, I never believed that I would be able to integrate with a foreign culture. That changed when I signed up on <strong>Roots</strong>. It’s been just 6 months and I already feel like one of the natives. I recommend <strong>Roots</strong> 100%! 
                                <i className="fa-solid fa-quote-right"></i>
                            </p>
                            <h3 className="text-center">Aliya Rauf</h3>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-lg-6 d-inline-block">
                            <img alt="testimonials" src="https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-responsive w-100"></img>
                        </div>

                        <div className="col-12 col-lg-6 d-inline-block p-3">
                            
                            <p className="testimonial_text m-auto"> 
                                <i className="fa-solid fa-quote-left"></i><br></br>
                                Coming from another country, Sudan, with opposite background, I never believed that I would be able to integrate with a foreign culture. That changed when I signed up on Roots. It’s been just 6 months and I already feel like one of the natives. I recommend Roots 100%! 
                                <i className="fa-solid fa-quote-right"></i>
                            </p>
                            <h3 className="text-center">Maya </h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials;