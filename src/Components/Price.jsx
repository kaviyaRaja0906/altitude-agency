import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import funnel from "../assets/funnel.png";
import gif from "../assets/gif.gif";
import face from "../assets/face.png";
import youtube from "../assets/youtube.png";
import bing from "../assets/bing.png";
import google from "../assets/adwords.png";
import tiktok from "../assets/tiktok.png";
import native from "../assets/native.png";
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar from "./Sidebar";

function Price(){

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  let navigate = useNavigate();
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
      once:true,
      mirror: true
    });
  
    return(
     <div className="price-section">
      <Navbar />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="price-con">
      <div className="container" data-aos="fade-up">
      <div className="price-header">
        <h1 className="price-h text-center">Services & Pricing</h1>
      </div>
      </div>
      <div className="funnel-box" >
        <img className="gif-img" data-aos="slide-down" src={funnel} alt=""></img>
      </div>
      <div className="prices">
        <div className="container">
            <div className="row pricings">
                <div className="pricebox one-p" data-aos="fade-right">
                <img className="price-img" src={face} alt=""></img>
                <h5 className="pricetxt text-center">Facebook Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/facebookads')}>See Pricing</button>
                </div>
                <div className="pricebox" data-aos="fade-left">
                <img className="price-img" src={youtube} alt=""></img>
                <h5 className="pricetxt text-center">Youtube Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/youtubeads')}>See Pricing</button>
                </div>
            </div>
            <div className="row">
                <div className="pricebox one-p" data-aos="fade-right">
                <img className="price-img" src={bing} alt=""></img>
                <h5 className="pricetxt text-center">Bing Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/bingads')}>See Pricing</button>
                </div>
                <div className="pricebox" data-aos="fade-left">
                <img className="price-img" src={google} alt=""></img>
                <h5 className="pricetxt text-center">Google Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/googleads')}>See Pricing</button>
                </div>
            </div>
            <div className="row">
                <div className="pricebox one-p" data-aos="fade-right">
                <img className="price-img" src={tiktok} alt=""></img>
                <h5 className="pricetxt text-center">TikTok Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/tiktokads')}>See Pricing</button>
                </div>
                <div className="pricebox" data-aos="fade-left">
                <img className="price-img" src={native} alt=""></img>
                <h5 className="pricetxt text-center">Native Ads</h5>
                <button className="price-btn" onClick={()=>navigate('/nativeads')}>See Pricing</button>
                </div>
            </div>

        </div>
      </div>
      </div>
      <Footer />
     </div>
    );
}

export default Price;