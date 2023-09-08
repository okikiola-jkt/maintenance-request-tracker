import React from 'react'
import './index.css'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'

const AdminLogin = () => {
  return (
    <div className='container'>
        <header>
        <div className='title'> Admin Log In</div>
        </header>
        <div className="input-group">
            <div className='input-field'>
            <img src={email_icon}/>
            <input type="email" placeholder='Email'/>
            </div>
            <div className='input-field'>
            <img src={password_icon}/>
            <input type="password" placeholder='Password'/>
            </div>
            <div className="lost-password">Forgot password <a href="">Click here</a></div>
        </div>
     
       <div className="submit-container">
            <button className='submit'>Log In</button>
        </div>

    </div>
  )
}

export default AdminLogin;
