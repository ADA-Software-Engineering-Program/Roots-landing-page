import React from "react";
import "../lecturers.css";
import media from "../images/media.jpg";

function Lecturers(){
    return(
     <section className="lecturers">
        <img src={media} className="media"></img>
        <div className="aboutlecturer">
            <h3>Meet our distinguished lecturer</h3>
            <p className="lecturers_text">Lorem ipsum dolor sit amet consectetur. Convallis eget velit est convallis ullamcorper viverra. Mauris tellus nisl nulla bibendum integer vestibulum proin. Quam blandit.</p>
            <button className="btn btn-outline-dark">Explore</button>
        </div>
     </section>
        )};

export default Lecturers;