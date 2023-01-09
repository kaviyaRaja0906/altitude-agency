import React from "react";
import message from "../assets/message.png";
import arrow from "../assets/right-arrow.png";
import submit from "../assets/submit.png";
import calls from "../assets/calls.png";
import choose from "../assets/choose.png";
import experts from "../assets/experts.png";
import started from "../assets/started.png";
import call from "../assets/call.png";
import expert from "../assets/expert.png";
import plan from "../assets/planning.png";
import start from "../assets/rocket.png";
import mark from "../assets/down-arrow.png";

function ProcessMobile(){
    return(
        <div className="process-mobile justify-content-center">
        <div className="container">
             <h2 className="text-center process-head">Our Process</h2>
            <div className="row justify-content-center" data-aos="fade-right">
                <div className="circle mx-auto">
                    <img src={submit} className="process-img"></img><br></br>
                    <h6 className="text-center">Submit A Request</h6>
                        <button className="number">1</button>
                </div>
                <div className="circle">
                    <img src={calls} className="process-img"></img><br></br>
                    <h6 className="text-center">Schedule A Call</h6>
                    <button className="number">2</button>
                </div>
                </div>
                <div className="row justify-content-center" data-aos="fade-right">
                <div className="circle mx-auto">
                    <img src={experts} className="process-img"></img><br></br>
                    <h6 className="text-center">Talk To Experts</h6>
                    <button className="number">3</button>
                </div>
                <div className="circle">
                    <img src={choose} className="process-img"></img><br></br>
                    <h6 className="text-center">Choose A Plan</h6>
                    <button className="number">4</button>
                </div>
                </div>
                <div className="circle justify-content-center last-pro">
                    <img src={started} className="process-img"></img><br></br>
                    <h6 className="text-center">Get Started</h6>
                    <button className="number">5</button>
                </div>
            </div>
        </div>  
  
);
}

export default ProcessMobile;