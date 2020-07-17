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
   <div style={{display: 'flex', justifyContent: 'center'}}>
       <text style={styles.text}>
           Raspihive is a IoT wonder powered by IOTA.
           100% Open Source and free! 
       </text>
   </div>
    
  );
}


const styles = {};

styles.text = {
  fontSize: "30px",
  color:"black",
  marginTop:"30px",
};