import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './index.css';
import axios from 'axios'; 
import { Navbar } from "../../../components/admin/navbar";
import { InfinitySpin } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { useAdminLogin } from "../../../hooks/mutations/useAdminLogin";




const AdminLogin = () => {
  const [adminLoginData, setAdminLoginData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { mutate: callAdminLogin} = useAdminLogin()

  const loginAdmin = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      callAdminLogin(adminLoginData, {
        onSuccess: (data) => {
          localStorage.setItem('adminToken', data.token);
          navigate('/admin-dashboard');
          toast.success('Login Successful!');
          setLoading(false);
        },
        onError: (error) => {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      });
      
    } catch (error) {
      const errorData =  error.response.data.message;
      toast.error(errorData);
      setLoading(false);
    }
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;

    setAdminLoginData({
      ...adminLoginData,
      [name]: value
    });
  }
  
  return (
    <div>
      <Navbar/>
    <div className='adminLogin d-flex justify-content-center align-items-center vh-100'>
      <MDBContainer className='p-3 my-5 d-flex flex-column w-25'>
      <div className='log-in text-center mb-3'>
            <p>Log In</p>
          </div>
          <MDBInput 
          wrapperClass='mb-4' 
          placeholder='Email address or username' 
          id='adminForm1' 
          type='email'
          name= 'email'
          onChange = {handleLoginInputChange}
          />
          <MDBInput 
          wrapperClass='mb-4' 
          placeholder='Password' 
          id='adminForm2' 
          type='password'
          name='password'
          onChange = {handleLoginInputChange}
          />
          

          <div className='d-flex justify-content-between mx-4 mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="!#">Forgot password</a>
          </div>
          <MDBBtn className='mb-4 w-100' onClick={loginAdmin} noRipple>Sign in</MDBBtn>

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

export default AdminLogin;