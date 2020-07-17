import React from "react";
import Wabe from "../Images/wabe.svg"
import '../App.css';

export default function Hometext() {
  return (
   <view>
       <text style={styles.textbox1}>
           Raspihive is a IoT wonder powered by IOTA.
           100% Open Source and free! 
       </text>
       <img src={Wabe} style={styles.wabe}  />

   </view>
    
  );
}


const styles = {};

styles.textbox1 = {
  fontSize: "30px",
  color:"black",
  marginTop:"30px",
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  lineHeight: '60px'
};

styles.wabe = {
    color:"black",
    marginTop:"80px",
    display: 'flex',
    width: 200, 
    height: 200,
    flex: 1,
    flexDirection: 'column',
    flex: 1, flexDirection: 'row',
  };