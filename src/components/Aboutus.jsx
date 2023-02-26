import React from "react";
import "../aboutus.css";
import circleimage from "../images/circleimage.jpg";

function Aboutus(){
    return(
      <section className="aboutus">
        <div className="about">
          <div className="abouttext">
              <h1>Finding your way Home? Let’s guide you!</h1>
              <p>Immersed yourself from our collection of indigenous languages and your path home is guaranteed</p>
              <button className="get_started">Get Started</button>
          </div>
          <img src={circleimage} className="circle"></img>
        </div>
        <div className="about2">
          <img src={circleimage} className="circle2" alt=""></img>
          <div className="abouttext2">
            <h3>Our Little Story</h3>
            <p className="story">Lorem ipsum dolor sit amet consectetur. Lacus cum sem faucibus
            nsectetur neque. Volutpat venenatis leo vel tellus nulla. Pellentesque vitae ut se
            d viverra metus sed leo. Tellus pretium tristique viverra blandit lectus. 
            Dui sollicitudin dolor ullamcorper dignissim tortor placerat vulputate pharetra tortor
            .
            </p>
          </div>
          
        </div>
        
      </section>
        )};

export default Aboutus;