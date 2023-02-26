import React from "react";
import "../aboutus.css";
import circleimage from "../assets/ellipse.png";
function Aboutus(){
    return(
      <section className="aboutus">
        <div className="row justify-content-around p-5 mt-5">
          <div className="abouttext col-5 col-lg-5">
              <h1>Finding your way Home? Let’s guide you!</h1>

              <p className="d-inline">Looking for a quick and fun way to learn Igbo language? If yes, then you’ve found your<strong> Roots!</strong></p>
              <button className="btn btn-success d-block mt-3">Get Started</button>
          </div>

          <img src={circleimage} className="circle col-7 col-lg-7 img-responsive"></img>
        </div>

        <div className="about2 row">
          <img src={circleimage} className="circle2 col-7 col-lg-7 img-responsive" alt=""></img>
          <div className="abouttext2 col-6 col-lg-6">
            <h3>Our Little Story</h3>
            <p className="story">
              Roots is an e-learning platform where you can learn the Igbo language from scratch.
              We provide you with resources that help simplify learning. Our courses are set up in such a way that even kids can learn conveniently,
              with or without a guardian. 
              Most of our users find that they already have a good grasp of the language as early as two months into the course and we have no doubts that you will too...
            </p>
            <p className="readmore">Read More</p>
          </div>
          
        </div>
        
      </section>
        )};

export default Aboutus;