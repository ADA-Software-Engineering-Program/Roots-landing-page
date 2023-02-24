import React from "react";

function Community() {
    return (
        <div className="row p-4 border-bottom border-secondary" id="communitiy">
            <div className="col-lg-6 col-6 img">
                <img alt="" src="" className="img-responsive"></img>
            </div>
            <div className="col-6 col-lg-6 p-5">
                <h3>
                    Extended Communities
                </h3>
                <p className="text-justify community_text">
                    Connect with a learning community from all regions of the world <br></br>
                    Gain access to seek help from study partners.
                </p>
                <button className="btn btn-secondary"> Start now</button>
            </div>
        </div>
    )
}

export default Community;