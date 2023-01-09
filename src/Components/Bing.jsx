import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import funnel from "../assets/funnel.png";
import { useLocation } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Bing(){

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
      easing: 'ease-in-out-sine',
      once: true, 
      delay: 200,
      mirror: true
    });
    return(
      <div className="ads">
         <Navbar />
         <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
         <div className="ad-content">
            <div className="container">
                <div className="ad-header" data-aos="fade-up">
                    <h1 className="ad-h text-center">White Label Bing Ads</h1>
                </div>
                <div className="funnel-box" >
                    <img className="funnel-img" data-aos="slide-down" src={funnel} alt=""></img>
                  </div>
                <div className="offer" data-aos="zoom-in">
                    <h1 className="offer-h text-center">What we offer</h1>
                    <br></br>
                    <p className="offer-p text-center">
                    $397/Month upto $5k Adspend - 1 Client <br></br>
                    $5k - $10k Adspend Additional $200
                    </p>
                    <br></br>
                    <div className="features row">
                       <ul className="list g-list" data-aos="fade-right">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Search Campaigns</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Location Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Management</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Tracking</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Keyword Research</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Copywriting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  New Features</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  CRM included</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  landing Page included</li>
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
                       </ul>                       
                    </div>
                    </div>
                    <div className="ad-btn-div">
                <button className="ad-btn">Book A Call</button>
                </div>
            </div>
         </div>
         <div className="ans">
            <div className="qns container" data-aos="fade-up">
            <h3>What is white label Bing Ads management?</h3>
            <p>
            White label (or private label or reseller services) as it relates to PPC management means having another agency perform your agency’s PPC fulfillment for your clients. And by PPC, meaning pay-per-click advertising, which most commonly refers to Google Ads, or sometimes Microsoft Advertising.   
            </p>
            <p>
            And so this means white label PPC management for your agency’s clients is done totally behind the scenes. Your clients wouldn’t know we exist! It’s as if the work being done was done by your in-house employees, but without all the pitfalls associated with hiring in-house which we address below. All the work we do that would appear in the ad accounts’ change history reports would use a generic email address and so we leave no trace that we aren’t officially part of your agency.   
            </p>
            <p>
            White label PPC management offers some huge benefits, as you’ll learn below. From Google Search ads to display ads, YouTube video ads, and remarketing ads, you’ll get in-house quality without in-house costs and headaches. Read on to discover how helpful this could be for you and your agency.   
            </p>
          </div>
          </div>
         <Footer />
      </div>
    );
}

export default Bing;