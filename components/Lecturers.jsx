import React from "react";
import "../lecturers.css";
import media from "../assets/tutors.png";

function Lecturers(){
    return(
     <section className="lecturers">
        <div className="aboutlecturer">
            <h3>Meet our distinguished lecturer</h3>
            <p className="lecturers_text">Igbo is such a rich language and our team of qualified tutors make the learning smooth and fun.  They are trained to provide the best learning experience for all types of learners, both young and old. </p>
            <button className="btn btn-outline-dark">Explore</button>
        </div>
        <img src={media} className="media"></img>
     </section>
        )};

export default Lecturers;