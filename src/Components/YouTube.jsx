import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import funnel from "../assets/funnel.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar from "./Sidebar";


function YouTube(){
  
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);


    const scrollCounter = document.querySelector('.js-scroll-counter');
    
    window.addEventListener('scroll', function() {
      scrollCounter.innerHTML = window.pageYOffset;
    });
    
    // AOS.init()
    
    AOS.init({
      offset: 200,
      duration: 800,
      once: true, 
      easing: 'ease-in-out-sine',
      delay: 200,
      mirror: true
    });
    return(
      <div className="ads">
         <Navbar />
         <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
         <div className="ad-content">
            <div className="container" data-aos="fade-up">
                <div className="ad-header">
                    <h1 className="ad-h text-center">White Label YouTube Ads</h1>
                </div>
                <div className="funnel-box" >
                    <img className="funnel-img" data-aos="slide-down" src={funnel} alt=""></img>
                  </div>
                <div className="offer" data-aos="zoom-in">
                    <h1 className="offer-h text-center">What we offer</h1>
                    <br></br>
                    <p className="offer-p text-center">
                    $497/Month upto $3k Adspend <br></br>
                    $3k - $6k Additional $250
                    </p>
                    <br></br>
                    <div className="features row">
                       <ul className="list g-list" data-aos="fade-right">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Video Campaigns</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  YouTube Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Location Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Management</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Tracking</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Keyword Research</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Copywriting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  New Features</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  3 Videos Minimum Required</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  CRM included</li>
                       </ul>
                       <ul className="list-1" data-aos="fade-left">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Remarketing Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Scheduling</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Audience Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Bid Management</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Extensions</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Keyword Selection</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Negative Keywords</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Extension Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Reporting Dashboard</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Landing Pages includeds</li>
                       </ul>                     
                    </div>
                </div>
                <div className="ad-btn-div">
                <button className="ad-btn">Book A Call</button>
                </div>
            </div>
         </div>
         <Footer />
      </div>
    );
}

export default YouTube;