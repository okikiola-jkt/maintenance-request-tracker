import React, { useState } from 'react'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './index.css';
import { Navbar } from "../../../components/admin/navbar";




const AdminLogin = () => {
  return (
    <div>
      <Navbar/>
    <div className='adminLogin d-flex justify-content-center align-items-center vh-100'>
      <MDBContainer className='p-3 my-5 d-flex flex-column w-25'>
      <div className='log-in text-center mb-3'>
            <p>Log In</p>
          </div>
          <MDBInput wrapperClass='mb-4' placeholder='Email address or username' id='email' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='email' type='Password'/>

          <div className='d-flex justify-content-between mx-4 mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="!#">Forgot password</a>
          </div>
          <MDBBtn className='mb-4 w-100'>Sign in</MDBBtn>
      </MDBContainer>
    </div>
    </div>
  )
}

export default AdminLogin;