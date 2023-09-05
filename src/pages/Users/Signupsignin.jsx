import React, { useState } from 'react'
import './Signupsignin.css'
import name_icon from './images/person.png'
import email_icon from './images/email.png'
import password_icon from './images/password.png'
import { Link } from "react-router-dom";

const Signupsignin = () => {
  const [action, setAction] = useState("Register");

  return (
    <div name= 'home' className="container">
      <div className="header">
        <div className="title">{action}</div>
      </div>
        <div className="input-group">
        {action === "Log In"? <div></div>: <div className="input-field">
        <img src={name_icon}/>
            <input type="text" placeholder="Name" />
          </div>}
          
          <div className="input-field">
          <img src={email_icon}/>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input-field">
          <img src={password_icon}/>
            <input type="password" placeholder="Password"/>
          </div>

          {action === "Register"? <div></div>: <div className='lost-password'>
            Forgot password <a href="#">Click here</a>
          </div>}
          
        </div>
        <div className="submit-container">
          <button className={action === "Log In" ? "submit gray" : "submit"}onClick={()=>{setAction("Register")}}>Register</button>
          <button className={action === "Register" ? "submit gray" : "submit"} onClick={()=>{setAction("Log In")}}>Log In</button>
        </div>
    </div>
  )
}

export default Signupsignin
