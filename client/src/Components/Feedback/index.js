import React, {useState, useEffect} from "react";
import "./style.css";

function Feedback(props) {

  useEffect(() => {
    console.log("feedback got rendered");
  })
  return (
    <div id="feedback" style={{color: props.color, opacity: props.opacity}}>{props.message}</div>
    
  )
}

export default Feedback;