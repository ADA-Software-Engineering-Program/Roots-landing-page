import React from "react";
import { Link } from "react-router-dom";
import "../Features.css";
import media from "../assets/tutors.png";
import community from '../assets/community.png';

function Features(){
    return(
     <section className="features" id="features">
        
     <div className="row mt-5">

         <div className="col-md-6 featuresImg mt-4">
             <img src="https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/aid9695444-v4-728px-Learn-Igbo-Language-Step-5.jpg.webp" className="img-fluid"></img>
         </div>

        <div className="col-md-6 featuresContent mt-4">
            <h3 className="featuresHeading">Easy Learning for All</h3>
            <p className="featuresText">Learning Igbo language is easy when you do it with Roots. Whether you’re just starting out or you already have a basic knowledge of the language...</p>

            <button className="btn btn-success" id="buttons">Get started</button>
        </div>
    </div>  

     <div className="row mt-5" id="lecturers">

        <div className="col-md-6 featuresContent mt-4">
            <h3 className="featuresHeading">Meet our Tutors</h3>
            <p className="featuresText">Igbo is such a rich language and our team of qualified tutors make the learning smooth and fun.  They are trained to provide the best learning experience for all types of learners, both young and old.</p>

            <button className="btn btn-success" id="buttons">Explore</button>
        </div>

        <div className="col-md-6 featuresImg mt-4">
             <img src={media} className="img-fluid"></img>
         </div>

    </div> 


     <div className="row mt-5 mb-5">

         <div className="col-md-6 featuresImg mt-4">
             <img src={community} className="img-fluid"></img>
         </div>

        <div className="col-md-6 featuresContent mt-4">
            <h3 className="featuresHeading">Extended Communities</h3>
            <p className="featuresText"> Connect with a learning community from all regions of the world <br></br>
                    Gain access to seek help from study partners.</p>

            <button className="btn btn-success" id="buttons">Start your journey</button>

        </div>
    </div>  
     </section>
    )
};

export default Features;