import React, { useState } from 'react'
import './index.css'

const Request = () => {
  
  
  return (
    <div className='main-request'>
        <h1>Welcome user</h1>
        <h4>Your maintenace request</h4>
        <form>
        <div className='requests'>
            <div className='request-container'>
                <div className="request-checkbox"></div>
                <div className='request-text'>New request</div>
                <div className='delete-request'>X</div>
            </div>
        </div>
     
        <button className='new-request'>Add Request</button>
      </form>
    </div>
  )
}

export default Request