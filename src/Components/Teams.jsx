import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import woman from "../assets/woman.png";
import emo2 from "../assets/boy.png";
import emo3 from "../assets/boy1.png";
import emo4 from "../assets/woman1.png";
import emo5 from "../assets/girl.png";
import emo6 from "../assets/programmer.png";
import emo7 from "../assets/man.png";
import emo8 from "../assets/beauty.png";
import emo9 from "../assets/girl2.png";
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Teams(){
    
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
      <div className="teams">
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="booka">
      <div className="container" data-aos="fade-up">
      <div className="book-header">
        <h1 className="book-h text-center">Teams</h1>
      </div>
      <div className="members">
        <div className="row" data-aos="fade-right">
            <div className="member one-m">
                <img src={woman} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Aaron</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo2} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Amber</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo3} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Ann</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
        </div>
        <div className="row" data-aos="fade-right">
            <div className="member one-m">
                <img src={emo6} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Bekah</h5>
                <p className="mem-p text-center">Development</p>
            </div>
            <div className="member">
                <img src={emo4} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Carly</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo9} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Cloitare</h5>
                <p className="mem-p text-center">Development</p>
            </div>
        </div>
        <div className="row" data-aos="fade-right">
            <div className="member one-m">
                <img src={emo8} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Frank</h5>
                <p className="mem-p text-center">SEO</p>
            </div>
            <div className="member">
                <img src={emo5} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Heather</h5>
                <p className="mem-p text-center">SEO</p>
            </div>
            <div className="member">
                <img src={emo7} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Isaiah</h5>
                <p className="mem-p text-center">SEO</p>
            </div>
        </div>
      </div>
      <div className="members-mobile">
        <div className="row" data-aos="fade-right">
            <div className="member">
                <img src={woman} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Aaron</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo2} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Amber</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            </div>
            <div className="row" data-aos="fade-right">
            <div className="member">
                <img src={emo3} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Ann</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo6} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Bekah</h5>
                <p className="mem-p text-center">Development</p>
            </div>
            </div>
            <div className="row" data-aos="fade-right">
            <div className="member">
                <img src={emo4} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Carly</h5>
                <p className="mem-p text-center">Ads</p>
            </div>
            <div className="member">
                <img src={emo9} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Cloitare</h5>
                <p className="mem-p text-center">Development</p>
            </div>
        </div>
        <div className="row" data-aos="fade-right">
            <div className="member">
                <img src={emo8} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Frank</h5>
                <p className="mem-p text-center">SEO</p>
            </div>
            <div className="member">
                <img src={emo5} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Heather</h5>
                <p className="mem-p text-center">SEO</p>
            </div>
            </div>
            <div className="last">
                <img src={emo7} className="member-img"alt=""></img>
                <h5 className="mem-txt text-center">Isaiah</h5>
                <p className="mem-p text-center">SEO</p>
        </div>
      </div>
      </div>
      </div>
        <Footer />
      </div>
    );
}

export default Teams;