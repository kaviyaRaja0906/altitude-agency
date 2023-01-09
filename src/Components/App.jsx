import React from "react";
import Home from "./Home";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Facebook from "./Facebook";
import Google from "./Google";
import TikTok from "./TikTok";
import Bing from "./Bing";
import YouTube from "./YouTube";
import Price from "./Price";
import Calendly from "./Calendly";
import Teams from "./Teams";

function App(){
    return(
        <div>
        <div>
        <div>
        <div>
         <Router>
          <div>
           <Routes>
            <Route exact path='/' element={<Home />}  />
            <Route exact path='/facebookads' element={<Facebook />}  />
            <Route exact path='/pricing' element={<Price />}  />
            <Route exact path='/teams' element={<Teams />}  />
            <Route exact path='/bookacall' element={<Calendly />}  />
            <Route exact path='/googleads' element={<Google />}  />
            <Route exact path='/bingads' element={<Bing />}  />
            <Route exact path='/tiktokads' element={<TikTok />}  />
            <Route exact path='/youtubeads' element={<YouTube />}  />
           </Routes>
           </div>
        </Router>
        </div>
        </div>
        </div>
        </div>

    );
}

export default App;