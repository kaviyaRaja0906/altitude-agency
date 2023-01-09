import React from "react";
import face from "../assets/face.png";
import youtube from "../assets/youtube.png";
import bing from "../assets/bing.png";
import google from "../assets/adwords.png";
import tiktok from "../assets/tiktok.png";
import native from "../assets/native.png";
import { useNavigate } from "react-router-dom";


function ServiceMobile(){
    let navigate = useNavigate();

    return(
      <div className="service-mobile">
                        <div className="container" data-aos="fade-up">
                            <h1 className="text-center service-head">Services We Provide</h1>
                            <br></br>
                            <div className="row" data-aos="fade-right">
                                <div className="serv mx-auto" onClick={()=>navigate('/facebookads')}>
                                    <img className="serv-img" src={face} alt=""></img>
                                    <h5 className="serv-h text-center">Facebook Ads</h5>
                                    <div className="align-self-center mx-auto">
                                    <button className="serv-btn">>>></button>
                                    </div>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/youtubeads')}>
                                    <img className="serv-img" src={youtube} alt=""></img>
                                    <h5 className="serv-h text-center">Youtube Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                </div>
                                <div className="row" data-aos="fade-right">
                                <div className="serv mx-auto"  onClick={()=>navigate('/googleads')}>
                                    <img className="serv-img" src={google} alt=""></img>
                                    <h5 className="serv-h text-center">Google Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/tiktokads')}>
                                    <img className="serv-img" src={tiktok} alt=""></img>
                                    <h5 className="serv-h text-center">Tiktok Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                </div>
                                <div className="row" data-aos="fade-right">
                                <div className="serv mx-auto"  onClick={()=>navigate('/bingads')}>
                                    <img className="serv-img" src={bing} alt=""></img>
                                    <h5 className="serv-h text-center">Bing Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                <div className="serv"  onClick={()=>navigate('/nativeads')}>
                                    <img className="serv-img" src={native} alt=""></img>
                                    <h5 className="serv-h text-center">Native Ads</h5>
                                    <button className="serv-btn">>>></button>
                                </div>
                                </div>
                            </div>
                    </div>
    );
}

export default ServiceMobile;