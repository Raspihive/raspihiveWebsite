import React from "react";
import './Footer/footer.css';
import Homescreen from './home'
import Downloadscreen from './download'
import Aboutscreen from './about'
import Contributescreen from './contribute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Footer() {
  return (
   <view>
       <div className="footer-content">
        <text className="footer">Friends</text>
        <text className="footer">About</text>
        <text className="footer">Community</text>
       </div>
   </view>
    
  );
}


