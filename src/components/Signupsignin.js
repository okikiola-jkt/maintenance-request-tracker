import React, { useState } from 'react'

const Signupsignin = () => {
  const [action, setAction] = useState("Register");

  return (
    <div className="container">
      <div className="header">
        <div className="title">{action}</div>
      </div>
        <div className="input-group">
        {action === "Log In"? <div></div>: <div className="input-field">
            <input type="text" placeholder="Name" />
          </div>}
          
          <div className="input-field">
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password"/>
          </div>

          {action === "Register"? <div></div>: <div className='lost-password'>
            Lost password <a href="#">Click here</a>
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
