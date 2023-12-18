import "./FooterStyle.css"

import React from 'react';

import{FaHome, FaPhone ,FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
      <div>
        <p>Warje,Pune</p>
        <p>India</p>
      </div>
      </div>

      <div className="phone">
        <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
         9172747319</h4>
      </div>
     
      <div className="email">
        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
         rushikeshskapse@gmail.com</h4>
      </div>
        </div>
      


      <div className="right">

        <h4>About the company</h4>
        <p>This is me Hrushikesh Kapse.I enjoy discussing new project and design challenges</p>
        <div className="social">
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
        <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} />
        <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} />
        </div>
      </div>
    </div>
        </div>
  )
}

export default Footer
