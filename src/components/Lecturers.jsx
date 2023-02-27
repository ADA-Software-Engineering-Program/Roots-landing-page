import React from "react";
import "../lecturers.css";
import media from "../assets/tutors.png";

function Lecturers(){
    return(
     <section className="row lecturers p-5">
        <div className="col-6 col-lg-6 aboutlecturer">
            <h3 className="tutors">Meet our Tutors</h3>
            <p className="lecturers_text">Igbo is such a rich language and our team of qualified tutors make the learning smooth and fun.  They are trained to provide the best learning experience for all types of learners, both young and old. </p>
            <button className="btn btn-success">Explore</button>
        </div>
        <img src={media} className="media img-responsive col-6 col-lg-6"></img>
     </section>
        )};

export default Lecturers;