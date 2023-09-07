import React from "react";
import './Login.css'

const Adminrequest = () => {
  
  return (

    <div className="admin">
   
        <h1>Welcome Admin</h1>
        <h5>Your maintenace request</h5>
        <form>
        <div className='admin-requests'>
            <div className='admin-container'>
                <div className="admin-checkbox"></div>
                <div className='admin-text'>New request</div>
                <div className='adminDelete-request'>X</div>
            </div>
        </div>
     
        <button className='adminNew-request'>Add Request</button>
      </form>
    </div>
);
}

export default Adminrequest;



