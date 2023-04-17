import React,{useState} from "react";
import { slide as Menu } from "react-burger-menu";
import face from "../assets/face.png";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import youtube from "../assets/youtube.png";
import bing from "../assets/bing.png";
import google from "../assets/adwords.png";
import tiktok from "../assets/tiktok.png";
import native from "../assets/native.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo-w.png";
import { useRef } from "react";
import "./sidebar.css";

function Sidebar(props){
    let navigate = useNavigate();
    
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return(
      <div className="mobile-navbar">
      <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <div className="dropdown">
               <button className="dropbtn">Services <i class="fa-solid fa-chevron-down"></i></button>
                 <div className="dropdown-content">
                     <a onClick={()=>navigate('/facebookads')}><img src={face} alt="" className="icon"></img>  Facebook Ads</a>
                     <a onClick={()=>navigate('/googleads')}><img src={google} alt="" className="icon"></img>  Google PPC Ads</a>
                     <a onClick={()=>navigate('/tiktokads')}><img src={tiktok} alt="" className="icon"></img>  Tiktok Ads</a>
                     <a onClick={()=>navigate('/youtubeads')}><img src={youtube} alt="" className="icon"></img>  Youtube Ads</a>
                     <a onClick={()=>navigate('/bingads')}><img src={bing} alt="" className="icon"></img>  Bing Ads</a>
                     <a onClick={()=>navigate('/facebookads')}><img src={native} alt="" className="icon"></img>  Native Ads </a>
                   </div>
                 </div>
      <a className="menu-item" onClick={()=>navigate('/pricing')}>
        Pricing
      </a>
      <a className="menu-item " onClick={()=>navigate('/teams')}>
        Teams
      </a>
    </Menu>
      <img src={logo} className="logo mob-logo" onClick={()=>navigate('/')} alt=""></img>
      </div>
        );
}

export default Sidebar;