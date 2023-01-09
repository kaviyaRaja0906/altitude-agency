import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import funnel from "../assets/funnel.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar from "./Sidebar";


function TikTok(){
  
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
                    <h1 className="ad-h text-center">White Label TikTok Ads</h1>
                </div>
                <div className="funnel-box" >
                    <img className="funnel-img" data-aos="slide-down" src={funnel} alt=""></img>
                  </div>
                <div className="offer" data-aos="zoom-in">
                    <h1 className="offer-h text-center">What we offer</h1>
                    <br></br>
                    <p className="offer-p text-center">
                    $497/Month upto $3k Adspend - 1 Client<br></br>
                    $3k - $6k Additional $251
                    </p>
                    <div className="additional-t">
                      <p className="text-left"><i class="fa-solid fa-circle list-icon fa-xs"></i>   UGC Content Creator = $100 Extra / Video<br></br>
                      <i class="fa-solid fa-circle list-icon fa-xs"></i>   $40 Per Video (Around 120sec)<br></br>
                      <i class="fa-solid fa-circle list-icon fa-xs"></i>   3 Videos Minimum Required<br></br></p>
                    </div>
                    <br></br>
                    <div className="features row">
                       <ul className="list t-list" data-aos="fade-right">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lead Generation</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Spark Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  TopBuzz Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Tracking</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lookalike Audiences</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Location Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Creative Optimization</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Copywriting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Ad Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Analysis</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  New Features</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  CRM included</li>
                       </ul>
                       <ul  className="list-1 t-list-1" data-aos="fade-left">
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Conversion Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Retargeting Ads</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Budget Management</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Audience Research</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Custom Audiences</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Detailed Targeting</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Creative Testing</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Lead Forms</li>
                       <li><i class="fa-solid fa-circle list-icon fa-xs"></i>  Audience Testing</li>
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
            <h3>What is white label TikTok Ads management?</h3>
            <p>
            White label TikTok Ads management is the act of a white label marketing agency managing your clients’ TikTok Ads campaigns on your behalf. This commonly includes everything from the setup of new TikTok Ads accounts to the ongoing management of them post-launch. White label simply refers to this occurring behind the scenes, such that your clients wouldn’t know the white label agency exists. More and more agencies are adopting this model every day, as the white label (also known as private label or reseller) approach to TikTok Ads management is super effective for many reasons, detailed below.   
            </p>
            </div>
          </div>
         <Footer />
      </div>
    );
}

export default TikTok;