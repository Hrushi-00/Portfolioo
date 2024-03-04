import "./Heroimgstyle.css"

import React from 'react'


import IntroImg from "../assets/third.jpg"

import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
    <img className="into-img" src={IntroImg} alt="IntroImg"
    />
    <div className="content">
        <p> HI,I'M Hrushikesh Kapse</p>
        <h1>WEB DEVELOPER</h1>
        <Link to="/project" className="btn">Project</Link>
        <Link to="https://www.linkedin.com/in/hrushikesh-kapse/" className="btn-light">Contact</Link>
    </div>
      </div>
    </div>
  )
}

export default Heroimg
