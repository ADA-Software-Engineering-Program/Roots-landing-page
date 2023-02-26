import React from "react";
import community from '../assets/community.png';

function Community() {
    return (
        <div className="row p-5 justify-content-between" id="communitiy">
            <div className="col-lg-5 col-6 img align-self-center">
                <img alt="" src={community} className="img-responsive"></img>
            </div>
            <div className="col-6 col-lg-7 p-5 align-self-center">
                <h2>
                    Extended Communities
                </h2>

                <p className="community_text">
                    Connect with a learning community from all regions of the world <br></br>
                    Gain access to seek help from study partners.
                </p>
                <button className="btn btn-success"> Start now</button>
            </div>
        </div>
    )
}

export default Community;