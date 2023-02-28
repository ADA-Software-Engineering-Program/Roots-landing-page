import React from "react";
import "../aboutus.css"; 
import circleimage from "../assets/ellipse.png";

function Aboutus(){
    return(
      <section className="aboutus mt-5" id="about">
      
      <div className="heroPage">
          <div className="row">

            <div className="abouttext col-md-6">
                <h1 className="mb-3">Finding your way Home? Let’s guide you!</h1>
                <p className="mb-5">Looking for a quick and fun way to learn Igbo language? If yes, then you’ve found your<strong> Roots!</strong></p>
                <div className="heropageButton">
                <button className="btn btn-success d-block mt-3" id="buttons">Get Started</button>
                </div>
            </div>
            
            <div className="col-md-6 heropageImg">
              <img src={circleimage} className="circle img-fluid" />
            </div>

          </div>
      </div> 

      <div className="littleStory">
          <div className="row p-5 justify-content-between">

          <div className="col-3 col-lg-6 col-md-5 littleStoryImg d-flex">
              <h1 className="text-muted align-self-center m-auto">About Us</h1>
          </div>

            <div className="abouttext col-6 col-md-6 p-3">
              <h3 className="mt-5 aboutHeading">Our Little Story</h3>

              <p className="align-self-center">
                <strong>Roots</strong> is an e-learning platform where you can learn the Igbo language from scratch.
                We provide you with resources that help simplify learning. Our courses are set up in such a way that even kids can learn conveniently,
                with or without a guardian. 
                <br/>
                <br/>
                Most of our users find that they already have a good grasp of the language as early as two months into the course and we have no doubts that you will too...
              </p> 
                <button className="btn btn-success w-50" id="buttons">Read More</button>
            </div>
          </div>
      </div> 

      </section>
        )};

export default Aboutus;