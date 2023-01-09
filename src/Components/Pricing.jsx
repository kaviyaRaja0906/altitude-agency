import React,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLocation } from "react-router-dom";

function Pricing(){
    const [tabIndex, setTabIndex] = useState(0);
    const [pricetab, setPriceTab] = useState(0);
    return(
       <div className="pricing">
         <div className="container">
           <h2 className="text-center">Our Services and Packages</h2>
           <p className="text-center">
            We help you get more profit for your agency
           </p>
         <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
      <TabList>
          <Tab>White Label PPC</Tab>
          <Tab>White Label Facebook Ads</Tab>
          <Tab>White Label TikTok Ads</Tab>
          <Tab>White Label Bing Ads</Tab>
        </TabList>
        <TabPanel>
            <div className="container">
                <div className="row">
                    <div className="header col-md-6">
                        <h2>WHITE LABEL</h2>
                        <h2><b>SEO</b></h2>
                        <hr className="p-hr"></hr>
                        <p>REVIEWED ON</p>
                        <h1>Clutch</h1><p>5.0 RATING</p>
                    </div>
                    <div className="col-md-6">
                        <p>Campaign Type:</p>
                        <Tabs selectedIndex={pricetab} onSelect={pricetab => setPriceTab(pricetab)}>
                         <TabList>
                            <Tab>Local</Tab>
                            <Tab>National</Tab>
                            <Tab>Custom</Tab>
                         </TabList>
                         <TabPanel>
                            <div className="price">
                                <h1><b>$399</b></h1><br></br>
                                <p><b>Per campaign/month</b></p>
                            </div>
                         </TabPanel>
                         <TabPanel>
                            <div className="price">
                                <h1><b>$599</b></h1><br></br>
                                <p><b>Per campaign/month</b></p>
                            </div>
                         </TabPanel>
                         <TabPanel>
                            <div className="price">
                                <h1><b>Contact Us for Custom Quote</b></h1><br></br>
                            </div>
                         </TabPanel>
                         </Tabs>
                    </div>
                </div>
                <div className="includes">
                    <h5>Includes</h5>
                    <div className="row col-md-12">
                        <div className="list">
                        <ul><li>Title Tags</li><li>Internal Linking</li><li>Google Analytics</li><li>GBP Optimizations</li><li>GBP Posts</li><li>Backlink Audits</li><li>Link Building</li><li>Data Aggregators</li><li>Press Releases</li><li>Content Distribution</li><li>Keyword Research</li></ul>
                        </div>
                        <div className="list">
                        <ul><li>Meta Descriptions</li><li>Schema Markup</li><li>Search Console</li><li>GBP Management</li><li>On-page Audits</li><li>Technical Audits</li><li>Local Listings</li><li>Guest Posts (Nat'l Only)</li><li>Content Creation</li><li>Media Rooms</li><li>Reporting Dashboard</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
        hello
        </TabPanel>
      </Tabs>
         </div>
       </div>
    );
}

export default Pricing;