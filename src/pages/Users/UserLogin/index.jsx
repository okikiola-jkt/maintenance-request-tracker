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
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './index.css';
import { Navbar } from "../../../components/users/userNavbar";
import axios from 'axios'; 
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useUserLogin } from "../../../hooks/mutations/useUserLogin";


const UserLogin = () => {  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { mutate: callLoginUser } = useUserLogin();
  
  const loginUser = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      callLoginUser(loginData, {
        onSuccess: (data) => {
          localStorage.setItem('userToken', data.token);
          navigate('/user-dashboard');
          toast.success('Login Successful!');
          setLoading(false);
        },
        onError: (error) => {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      });

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
              <MDBTabsLink active={true}>
                  Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => navigate('/user-signup')} active={false}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
            <MDBTabsPane show={true}>

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
                New User? <a href="#" onClick={() => navigate('/user-signup')}>Register</a>
            </p>
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
