import React from "react";
import community from '../assets/community.png';

function Community() {
    return (
        <section className="coummunity row p-5 justify-content-between">
            <div className="col-lg-5 col-md-6 col-12 img align-self-center">
                <img alt="" src={community} className="img-responsive"></img>
            </div>
            <div className="col-12 col-lg-7 col-md-6 p-5 align-self-center">
                <h2>
                    Extended Communities
                </h2>

                <p className="community_text text-justify">
                    Connect with a learning community from all regions of the world <br></br>
                    Gain access to seek help from study partners.
                </p>
                <button className="btn btn-success" id="buttons"> Start your journey</button>
            </div>
        </section>
    )
}

export default Community;