import React from "react";
import "../accessibility.css";
import media from "../images/media.jpg";

function Accessibility(){
    return(
     <section className="accessibility">
        <div className="access">
            <h3>Accessibility to all</h3>
            <p className="access_text">Learning Igbo language is made easy by following our guidelines and choosing the basis to start from, we have resources right from basic to advance level...</p>
            <button className="btn btn-outline-dark">Get started</button>
        </div>
        <img src={media} alt=""></img>
     </section>
        )};

export default Accessibility;