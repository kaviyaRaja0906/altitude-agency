import React from "react";
import logo from "../assets/logo-w.png";
import face from "../assets/face.png";
import youtube from "../assets/youtube.png";
import bing from "../assets/bing.png";
import google from "../assets/adwords.png";
import tiktok from "../assets/tiktok.png";
import native from "../assets/native.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Navbar(){
  let navigate = useNavigate();

    return(
        <div className="Navbar">
        <div className="row">
           <div className="logo">
               <img className="logo" src={logo} alt="" onClick={() => navigate('/')}></img>
           </div>
           <div className="menu">
             <ul className="row">
             <div className="dropdown">
               <button className="dropbtn">Services <i class="fa-solid fa-chevron-down"></i></button>
                 <div className="dropdown-content">
                   <div className="row">
                     <div className="col-md-6 hover-menu">
                     <a onClick={()=>navigate('/facebookads')}><img src={face} alt="" className="icon"></img>  Facebook Ads</a>
                     <a onClick={()=>navigate('/googleads')}><img src={google} alt="" className="icon"></img>  Google PPC Ads</a>
                     <a onClick={()=>navigate('/tiktokads')}><img src={tiktok} alt="" className="icon"></img>  Tiktok Ads</a>
                     </div>
                     <div className="col-md-6 hover-menu">
                     <a onClick={()=>navigate('/youtubeads')}><img src={youtube} alt="" className="icon"></img>  Youtube Ads</a>
                     <a onClick={()=>navigate('/bingads')}><img src={bing} alt="" className="icon"></img>  Bing Ads</a>
                     <a onClick={()=>navigate('/facebookads')}><img src={native} alt="" className="icon"></img>  Native Ads </a>
                     </div>
                   </div>
                   </div>
                 </div>
               <li className="menu-item more" onClick={()=>navigate('/pricing')}><a>Pricing</a></li>
               <li className="menu-item more" onClick={()=>navigate('/teams')}><a>Teams</a></li>
             </ul>
           </div>
              <button className="call-btn" onClick={()=>navigate('/bookacall')}>Book A call</button>
          </div>
        </div>
    );    
    }

export default Navbar;