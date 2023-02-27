import React from "react";
import "../accessibility.css";

function Accessibility(){
    return(
     <section className="row accessibility">
         
         <div className="col-6 col-lg-6">
             <img src="https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/aid9695444-v4-728px-Learn-Igbo-Language-Step-5.jpg.webp" className="img-responsive learigbo"></img>
         </div>

        <div className="col-5 col-lg-5 access">
            <h3 className="accesstext">Easy Learning for All</h3>
            <p className="access_text">Learning Igbo language is easy when you do it with Roots. Whether you’re just starting out or you already have a basic knowledge of the language...</p>
            <button className="btn btn-outline-dark">Get started</button>
        </div>
     </section>
        )};

export default Accessibility;