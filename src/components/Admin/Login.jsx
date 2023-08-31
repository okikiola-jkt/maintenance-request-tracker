import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
        <header>
        <div className='title'> Admin Log In</div>
        </header>
        <div className="input-group">
            <div className='input-field'>
            <input type="email" placeholder='Email'/>
            </div>
            <div className='input-field'>
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

export default Login
