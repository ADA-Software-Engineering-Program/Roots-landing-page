import React from "react"; 
import  "./Dashboard.css";
import {Link} from 'react-router-dom';

function Dashboard () {
    return (
        <div className="dashboard text-center">
            <h1 className="username mb-3 text-center mb-5 mt-5">Hello👋🏾, Welcome to Roots!</h1>
            <Link to='/userdashboard'>
                <button className="startbtn ">
                    Start your learning journey 
                </button>
            </Link>
        </div>
    )
}

export default Dashboard;