import React from "react"; 
import  "./Dashboard.css";

function Dashboard () {
    return (
        <div className="dashboard text-center">
            <h1 className="username mb-3 text-center mb-5 mt-5">Hello👋🏾, Welcome to Roots!</h1>

                <a href="https://roots-green.vercel.app/" target='_blank'>
            <button className="startbtn ">
                Start your learning journey 
              </button></a>
        </div>
    )
}

export default Dashboard;