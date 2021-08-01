import React, {useRef, useEffect} from "react";
import "./style.css";

function About(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="container" style={{marginLeft: `${props.margin}px`}} id="about" >
      <h1 className="title">About</h1>
      <div className="smaller-container">
        <p>I'm a web developer based out of the California Central Valley. I enjoy creating web apps and enjoy being a student of this field.</p>
      </div>
      
    </div>
  )
}

export default About;