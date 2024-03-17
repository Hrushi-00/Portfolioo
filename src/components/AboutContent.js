import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import React from 'react'
import React1 from "../assets/react2.avif"
import React2 from "../assets/react6.jpg"
const AboutContent = () => {
  const linkdin = () =>{
    window.open("https://www.linkedin.com/in/hrushikesh-kapse/")
  }
  return (
    <div className="about">
     <div className="left"> 
     <h1>Who Am I?</h1>
     <p>Im a react Front-end Developer.I create responsive secure websites.</p>
      <Link to="/contact"><button className="btn1" onClick={linkdin}>Contact</button></Link>
      </div>
       
     <div className="right">
<div className="img-container">
    <div className="top">
        <img src={React1} className="img" alt="true"></img>
    </div>
    <div className="bottom">
        <img src={React2} className="img" alt="true"></img>
    </div>
</div>

     </div>
    </div>
  )
}

export default AboutContent
