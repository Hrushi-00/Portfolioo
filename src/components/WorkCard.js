import "./WorkCardStyle.css";
import React from 'react'

import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-derails">
      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn1">View</NavLink>
        <NavLink to="url.com" className="btn1">Source</NavLink>
      </div>
    </div>
</div>
  )
}

export default WorkCard
