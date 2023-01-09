import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Calendly(){
  
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);


    return(
      <div className="calendly">
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="booka">
      <div className="container">
      <div className="book-header">
        <h1 className="book-h text-center">Book A Call</h1>
      </div>
      <br></br>
      <InlineWidget url="https://api.leadconnectorhq.com/widget/appointment/service/discovery-call?group=agency-altitude" />
      </div>
      </div>
        <Footer />
      </div>
    );
}

export default Calendly;