import React from "react";
import logo from "../assets/logo-w.png";
import { useNavigate } from "react-router-dom";

function Footer(){
    let date = new Date();
    let currentyear = date.getFullYear();
    let navigate = useNavigate();
    return(
      <div>
      <footer className="footer">
        <div className="foot row">
        <img src={logo} alt="" className=" foot-logo"></img>
         <div className="col-md-3 links">
            <p className="footer-links"><b>Services</b></p>
            <p className="footer-links" onClick={()=>navigate('/facebookads')}>White Label Facebook Ads</p>
            <p className="footer-links" onClick={()=>navigate('/googleads')}>White Label Google PPc Ads</p>
            <p className="footer-links" onClick={()=>navigate('/tiktokads')}> White LabelTikTok Ads</p>
            <p className="footer-links" onClick={()=>navigate('/youtubeads')}>White Label Youtube Ads</p>
            <p className="footer-links" onClick={()=>navigate('/bingads')}>White Label Bing Ads</p>
            <p className="footer-links"onClick={()=>navigate('/nativeads')}>White Label Native Ads</p>            
         </div>
         <div className="col-md-3 links-2">
         <p className="footer-links"><b>Menus</b></p>
            <p className="footer-links" onClick={()=>navigate('/')}>home</p>
            <p className="footer-links">Privacy Policy</p>
            <p className="footer-links">Terms of USe</p>
            <p className="footer-links">FAQs</p>
            <p className="footer-links">Pricing</p>
         </div>
         <hr className="foot-hr"></hr>
        <p className="text-center copy-right">© Copyright {currentyear} Altitude Agency</p>
         <div>
         </div>
        </div>
      </footer>
      <footer className="mobile-footer">
      <div className="foot">
      <img src={logo} alt="" className=" foot-logo"></img>
         <div className="row">
         <div className="links">
            <p className="footer-links"><b>Services</b></p>
            <p className="footer-links" onClick={()=>navigate('/facebookads')}>White Label Facebook Ads</p>
            <p className="footer-links" onClick={()=>navigate('/googleads')}>White Label GooglePPc Ads</p>
            <p className="footer-links" onClick={()=>navigate('/tiktokads')}> White Label TikTok Ads</p>
            <p className="footer-links" onClick={()=>navigate('/youtubeads')}>White Label Youtube Ads</p>
            <p className="footer-links" onClick={()=>navigate('/bingads')}>White Label Bing Ads</p>
            <p className="footer-links" onClick={()=>navigate('/nativeads')}>White Label Native Ads</p>            
         </div>
         <div className="links-2">
         <p className="footer-links"><b>Menus</b></p>
            <p className="footer-links" onClick={()=>navigate('/')}>home</p>
            <p className="footer-links">Privacy Policy</p>
            <p className="footer-links">Terms of USe</p>
            <p className="footer-links" onClick={()=>navigate('/pricing')}>Pricing</p>
         </div>
         <hr className="foot-hr"></hr>
        <p className="col-md-12 text-center copy-right">© Copyright {currentyear} Altitude Agency</p>
         </div>
      </div>
      </footer>
      </div>
    );
}

export default Footer;