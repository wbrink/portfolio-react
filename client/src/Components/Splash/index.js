import React, {useState} from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./style.css";

function Splash(props) {
  return (
    <div className="" style={{marginLeft: `${props.margin}px`}}>
      <div className="splash">
        <div className="overlay">
          <h1 id="splash-title">Will Brink</h1>
          <h4 id="splash-subtitle">Full Stack Web Developer</h4>
          
          <div className="splash-links-container">
            <Link className="splash-link" smooth to="/#portfolio">View Portfolio</Link>
            {/* <a className="splash-link" href="">View Resume</a> */}
          </div>
          
          <div className="social-icons">
            <a href="https://github.com/wbrink" target="_blank"><i class="devicon-github-plain icon"></i></a>
            <a href="https://www.linkedin.com/in/willbrink/" target="_blank"><i class="devicon-linkedin-plain icon"></i></a>
          </div>

        </div>

      </div>
    </div>
    
  )
}

export default Splash;