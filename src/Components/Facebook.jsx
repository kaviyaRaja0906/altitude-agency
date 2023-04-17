import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import funnel from "../assets/funnel.png";
import { useLocation } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Facebook(){

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
                    <h1 className="ad-h text-center">White Label Facebook Ads</h1>
                </div>
                  <div className="funnel-box" >
                    <img className="funnel-img" data-aos="slide-down" src={funnel} alt=""></img>
                  </div>
                <div className="offer" data-aos="zoom-in">
                    <h1 className="offer-h text-center">What we offer</h1>
                    <br></br>
                    <p className="offer-p text-center">
                    $499/Month upto $3k Adspend - 1 Client <br></br>
                    $3k - $6k Additional $249
                    </p>
                    <div className="additional">
                      <p className="text-center"><i class="fa-solid fa-circle list-icon fa-xs"></i>  Additional - $30 Per Video (Around 120sec) Script Included<br></br>
                      <br></br>
                      <i class="fa-solid fa-circle list-icon fa-xs"></i>  Additional - UGC Content Creator = $100 Extra / Video</p>
                    </div>
                    <br></br>
                    <div className="features row">
                       <ul className="list f-list" data-aos="fade-right">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lead Generation</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Messenger Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Instagram Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Tracking</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lookalike Audiences</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Location Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Dynamic Creative</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Copywriting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  New Features</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  CRM included</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Includes Landing Page</li>
                       </ul>
                       <ul className="list-1" data-aos="fade-left">
                       <li className="pad"><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Retargeting Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Management</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Audience Research</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Custom Audiences</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Detailed Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Creative Production</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lead Forms</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Audience Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Reporting Dashboard</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Copywriting Included</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Images Creatives</li>
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
              <h3>What is white label Facebook Ads management?</h3>
              <p>
              White label (also known as private label or reseller services), in the context of Facebook Ads management, refers to the act of another agency (e.g. us, Agency Elevation) providing the fulfillment of your agency’s Facebook Ads management services for your clients.              </p>
              <p>
              This also means your end clients would have no idea we exist, and hence the white or private label designation. Everything we do would be branded under you and your agency, meaning the work we would do would be indistinguishable from as if the work were done by in-house employees of yours.              </p>
              <p>
              White label Facebook Ads management isn’t merely just an equivalent alternative to in-house however, as you’ll discover below. There are some big advantages to avoiding in-house labor and partnering with a private label provider like us.              
              </p>
            </div>
         </div>
         <Footer />
      </div>
    );
}

export default Facebook;