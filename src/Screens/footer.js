import React from "react";
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
       <text style={styles.name}>Friends</text>
   </view>
    
  );
}


const styles = {};

styles.name = {
  width: "100%",
  fontSize: "26px",
  textDecoration: 'none',
  color:"white",
  marginLeft:"70px",
  

};
