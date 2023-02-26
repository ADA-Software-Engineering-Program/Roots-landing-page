import React from "react";
import "../accessibility.css";
import media from "../assets/easy_learning.png";

function Accessibility(){
    return(
     <section className="accessibility">
         <img src={media}></img>
        <div className="access">
            <h3>Easy Learning for All</h3>
            <p className="access_text">Learning Igbo language is easy when you do it with Roots. Whether you’re just starting out or you already have a basic knowledge of the language...</p>
            <button className="btn btn-outline-dark">Get started</button>
        </div>
     </section>
        )};

export default Accessibility;