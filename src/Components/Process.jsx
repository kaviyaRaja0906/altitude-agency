import React from "react";
import message from "../assets/message.png";
import submit from "../assets/submit.png";
import calls from "../assets/calls.png";
import choose from "../assets/choose.png";
import experts from "../assets/experts.png";
import started from "../assets/started.png";
import arrow from "../assets/right-arrow.png";
import call from "../assets/call.png";
import expert from "../assets/expert.png";
import plan from "../assets/planning.png";
import start from "../assets/rocket.png";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Process(){
    const scrollCounter = document.querySelector('.js-scroll-counter');
    
    window.addEventListener('scroll', function() {
      scrollCounter.innerHTML = window.pageYOffset;
    });
    
    // AOS.init()
    
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200,
      once: true, 
      mirror: true
    });
    return(
        <div className="process">
        <div className="container">
             <h2 className="text-center process-head">Our Process</h2>
            <div className="row" data-aos="fade-right">
                <div className="circle process-1">
                    <img src={submit} className="process-img"></img><br></br>
                    <h6 className="text-center">Submit A Request</h6>
                        <button className="number">1</button>
                </div>
                <div className="circle">
                    <img src={calls} className="process-img"></img><br></br>
                    <h6 className="text-center">Schedule A Call</h6>
                    <button className="number">2</button>
                </div>
                <div className="circle">
                    <img src={experts} className="process-img"></img><br></br>
                    <h6 className="text-center">Talk To Experts</h6>
                    <button className="number">3</button>
                </div>
                <div className="circle">
                    <img src={choose} className="process-img"></img><br></br>
                    <h6 className="text-center">Choose A Plan</h6>
                    <button className="number">4</button>
                </div>
                <div className="circle">
                    <img src={started} className="process-img"></img><br></br>
                    <h6 className="text-center">Get Started</h6>
                    <button className="number">5</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Process;