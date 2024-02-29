import "./FormStyle.css"
import React from 'react'

const Form = () => {
  const linkdin = () =>{
    window.open("https://www.linkedin.com/in/hrushikesh-kapse/")
  }
  return (
    <div className="form">
     <form>
     <label>Your Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Subject</label>
      <input type="text"></input>
      <label>Massage</label>
      <textarea rows="6" placeholder="Type Your Massage Here" />
      <button className="btn" onClick={linkdin}>Submit</button>
     </form>
    </div>
  )
}

export default Form
