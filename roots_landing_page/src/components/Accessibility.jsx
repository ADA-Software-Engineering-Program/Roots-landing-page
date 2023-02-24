import React from "react";
import ReactDom from "react-dom";
import "../accessibility.css";
import media from "../images/media.jpg";

function Accessibility(){
    return(
     <section className="accessibility">
        <div className="access">
            <h3>Accessibility to all</h3>
            <p>Learning Igbo language is made easy by following our guidelines and choosing the basis to start from, we have resources right from basic to advance level...</p>
            <button>Get started</button>
        </div>
        <img src={media}></img>
     </section>
        )};

export default Accessibility;