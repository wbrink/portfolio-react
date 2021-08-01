import React from "react";
import "./style.css";

function Skills(props) {
  return (
    <div className="container" style={{marginLeft: `${props.margin}px`}} id="skills">
      <h1 className="title">Skills</h1>

      <div className="icon-container">
        <i class="devicon-nodejs-plain-wordmark"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-git-plain-wordmark"></i>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-heroku-original-wordmark"></i>
        <i class="devicon-mongodb-plain-wordmark"></i>
        <i class="devicon-express-original-wordmark"></i>
      </div>
    </div>
  )
}

export default Skills;