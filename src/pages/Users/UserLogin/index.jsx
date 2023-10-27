import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
import axios from 'axios'; 
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner'
 


const UserLogin = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const loginUser = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const loginEndpoint = process.env.REACT_APP_BACKEND_URL;
      const response = await axios.post(loginEndpoint, loginData);

      if (response.status === 200 && response.data.token) {
  
        localStorage.setItem('userToken', response.data.token);
        navigate('/user-dashboard');
        toast.success('Login Successful!');
        setLoading(false);
      } else {
        const data = await response.json();
        toast.error('Login failed. Please check your credentials.');
        setLoading(false);
      }
    } catch (error) {
      const errorData = await error.response.data.message;
      toast.error(errorData);
      setLoading(false);
    }
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  }



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
              
              <form onSubmit={loginUser}>
                <MDBInput
                  wrapperClass='mb-4'
                  placeholder='Email address or username'
                  id='form1'
                  type='email'
                  name='email'
                  onChange={handleLoginInputChange} 
                />

                <MDBInput
                  wrapperClass='mb-4'
                  placeholder='Password'
                  id='form2'
                  type='password'
                  name='password'
                  onChange={handleLoginInputChange}
                />
              </form>

              <div className='d-flex justify-content-between mx-4 mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                <a href="!#">Forgot password</a>
              </div>

              <MDBBtn className='mb-4 w-100' onClick={loginUser} noRipple>Sign in</MDBBtn>
              <p className='text-center'>
                New User? <a href="#" onClick={() => handleJustifyClick('tab2')}>Register</a>
            </p>
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

          {
            loading && <InfinitySpin 
                        width='200'
                        color="#4fa94d"
                      />
          }

        </MDBContainer>
      </div>
    </div>
  )
}

export default UserLogin
