import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Flag from "../assets/US-flag.png";
import logo from "../assets/logo-w.png";
import Slack from "../assets/Slack.svg";
import BS from "../assets/BS.svg";
import { useSwipeable } from "react-swipeable";
import Secret from "../assets/Secret.svg";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Process from "./Process";
import Pricing from "./Pricing";
import face from "../assets/face.png";
import youtube from "../assets/youtube.png";
import bing from "../assets/bing.png";
import google from "../assets/adwords.png";
import tiktok from "../assets/tiktok.png";
import native from "../assets/native.png";
import Questions from "./FAQs";
import Footer from "./Footer";
import main from "../assets/main.png";
import Calendly from "./Calendly";
import Navbar from "./Navbar";
import ProcessMobile from "./ProcessMobile";
import Sidebar from "./Sidebar"; 
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import ServiceMobile from "./ServiceMobile";

function Home(){

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
  once: true, 
  delay: 200,
  mirror: true
});
    return(
     <div className="home">
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="Main" id="page-wrap">
            <div data-aos="fade-up" className="container main-con">
                    <div className="main-content">
                    <p className="welcome">Welcome to Agency Altitude.</p>
                    <h1 className="main-h">White Label Services for Agencies to grow faster</h1>
                    <p className="main-p">
                      Agency Owners Recruit More Clients & Elevate Profitability While We Handle The Rest For You.
                    </p>
                    <div className="row main-btns">
                    <button className="book-btn" onClick={()=>navigate('/bookacall')}>Book A Call</button>
                    <button className="see-btn" onClick={()=>navigate('/pricing')}>See Pricing</button>
                    </div>
                    </div>
                </div>
                      </div>
                      <div className="choose">
                   <div className="container" data-aos="zoom-in">
                    <h1 className="text-center choose-head">Why Choose Agency Altitude?</h1>
                    <br></br>
                    <p className="text-center choose-p">
                     Giving Agency Owners Freedom To Focus on Securing Clients, Hire Your Remote White Label Team in Just a Few Clicks. No Contract. Flat Monthly Rate. Cancel Anytime. 100% Satisfaction Guaranteed.  
                    </p>
                    <div className="bars">
                        <div className="container">
                            <div className="bar bar-1 row" data-aos="fade-left">
                                <h1 className="count"><b>50+</b></h1>
                                <h1 className="bar-h">Agencies Managed</h1>
                            </div>
                            <br></br>
                            <div className="bar bar-2 row" data-aos="fade-left">
                                <h1 className="count"><b>$3M+</b></h1>
                                <h1 className="bar-h-2">Ad Spent Managed</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                      <Process data-aos="fade-up" /><ProcessMobile className="process-sec" />
                    <div className="services">
                        <div className="container" data-aos="fade-up">
                            <h1 className="text-center service-head">Services We Provide</h1>
                            <br></br>
                            <div className="row" data-aos="fade-right">
                                <div className="serv one" onClick={()=>navigate('/facebookads')}>
                                    <img className="serv-img" src={face} alt=""></img>
                                    <h5 className="serv-h text-center">Facebook Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/youtubeads')}>
                                    <img className="serv-img" src={youtube} alt=""></img>
                                    <h5 className="serv-h text-center">Youtube Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/googleads')}>
                                    <img className="serv-img" src={google} alt=""></img>
                                    <h5 className="serv-h text-center">Google PPC Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                            </div>
                            <div className="row" data-aos="fade-right">
                                <div className="serv one"  onClick={()=>navigate('/tiktokads')}>
                                    <img className="serv-img" src={tiktok} alt=""></img>
                                    <h5 className="serv-h text-center">Tiktok Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/bingads')}>
                                    <img className="serv-img" src={bing} alt=""></img>
                                    <h5 className="serv-h text-center">Bing Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/nativeads')}>
                                    <img className="serv-img" src={native} alt=""></img>
                                    <h5 className="serv-h text-center">Native Ads</h5>
                                    <p className="serv-btn">>>></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceMobile className="m-service"/>
                      <Questions />
                      <div className="again">
                        <div className="container again-con" data-aos="fade-right">
                            <div className="row">
                                <img src={logo} alt="" className="logo-1"></img>
                                <button className="book-btn-1" onClick={()=>navigate('/bookacall')}>Book A Call</button>
                                <button className="see-btn-1" onClick={()=>navigate('/pricing')}>See Pricing</button>
                            </div>
                        </div>
                      </div>
                    <Footer />
                </div>
    );
}

export default Home;