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
import { Navbar } from "../../../components/users/userNavbar";
 


const UserLogin = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (

  
    <div>
      <Navbar/>

    <div className=" userLogin d-flex justify-content-center align-items-center vh-100">
    <MDBContainer className='p-3 my-5 d-flex flex-column w-25'>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justfify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className='log-in text-center'>
            <p>Log In</p>
          </div>
          
          <MDBInput wrapperClass='mb-4' placeholder='Email address or username' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>

          <div className='d-flex justify-content-between mx-4 mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="!#">Forgot password</a>
          </div>

        <MDBBtn className='mb-4 w-100'>Sign in</MDBBtn>
          <p className='text-center'>New User? <a href="#" onClick={() => handleJustifyClick('tab2')}>
                Register
              </a></p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <div className='sign-up text-center mb-3'>
            <p>Sign Up</p>
          </div>
          <MDBInput wrapperClass='mb-4' placeholder='Name' id='form2' type='name'/>
          <MDBInput wrapperClass='mb-4' placeholder='Username' id='form2' type='username'/>
          <MDBInput wrapperClass='mb-4' placeholder='Email' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>
          <MDBInput wrapperClass='mb-4' placeholder='Repeat Password' id='form2' type='password'/>

          <div className='d-flex justify-content-center mx-4 mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have read and agree to the terms'/>
          </div>

          <MDBBtn className='mb-4 w-100'>Sign Up</MDBBtn>
        </MDBTabsPane>
        
      </MDBTabsContent>

    </MDBContainer>
    </div>
    </div>
  )
}

export default UserLogin
