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

       <div style={styles.content2} >
       <img src={Wabe} style={styles.node}  />
       <img src={Wabe} style={styles.module}  />
       <img src={Wabe} style={styles.access}  />
       </div>

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

styles.node = {
  color:"black",
  height: 200,
  flex: 1, flexDirection: 'row',
  marginTop:"auto"
};

  styles.module = {
    color:"black",
    height: 200,
    flex: 1, flexDirection: 'row',
    marginTop:"auto"
  };

  styles.access = {
    color:"black",
    height: 200,
    flex: 1, flexDirection: 'row',
    marginTop:"auto"
  };

  styles.content2 = {
    justifyContent: 'center',
    textAlign: 'center'
  };