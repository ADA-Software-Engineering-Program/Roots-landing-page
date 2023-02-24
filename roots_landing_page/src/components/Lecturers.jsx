import React from "react";
import ReactDom from "react-dom";
import "../lecturers.css";
import media from "../images/media.jpg";

function Lecturers(){
    return(
     <section className="lecturers">
        <img src={media} className="media"></img>
        <div className="aboutlecturer">
            <h3>Meet our distinguished lecturer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Convallis eget velit est convallis ullamcorper viverra. Mauris tellus nisl nulla bibendum integer vestibulum proin. Quam blandit.</p>
            <button>Explore</button>
        </div>
     </section>
        )};

export default Lecturers;