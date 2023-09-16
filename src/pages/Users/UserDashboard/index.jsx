import React, { useState } from 'react'
import { Container } from "react-bootstrap";

import './index.css'
import { Navbar } from "../../../components/users/userNavbar";
import { UserDashboard2} from '../../../components/users/userDashboard';

const UserDashboard = () => {
  
 
    return (
      <div>
        <Navbar />
  
        <Container>
          <UserDashboard2 />
        </Container>
      </div>
   
  )
}

export default UserDashboard