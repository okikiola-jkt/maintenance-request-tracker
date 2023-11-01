import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import './index.css';
import { Navbar } from "../../../components/users/userNavbar";
import { InfinitySpin } from 'react-loader-spinner';

const UserSignup = () => {
  const [signUpData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUpInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signUpData, [name]: value });
  }

  const signupUser = async (event) => {
    try {

      event.preventDefault();  
      setLoading(true);

      if (signUpData.password !== signUpData.repeatPassword) {
        toast.error('Passwords do not match.');
        setLoading(false);
        return;
      }

      const signupEndpoint = process.env.REACT_APP_BACKEND_URL_USERSIGNUP;
      const response = await axios.post(signupEndpoint, {
        name: signUpData.name,
        email: signUpData.email, 
        password: signUpData.password
      });

      if (response.status === 201 && response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        navigate('/user-dashboard');
        toast.success('Signup Successful!');
      } else {
        toast.error('Signup failed. Please check your input.');
        setLoading(false);
      }
    } catch (error) {
      const errorData = error.response.data.message;
      toast.error(errorData);
      setLoading(false);
    }
  };

  return (

    <div>
    <Navbar/>

      <div className="userLogin d-flex justify-content-center align-items-center vh-100">
      <MDBContainer className='p-3 my-5 d-flex flex-column w-25'>
        <MDBTabs pills justify className='mb-3 d-flex flex-row justfify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => navigate('/user-login')} active={false}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink active={true}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        <h2 className='log-in text-center mb-3'>Sign Up</h2>
        <form>
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Name'
            id='form3'
            type='text'
            name='name'
            onChange={handleSignUpInputChange}
          />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Email'
            id='form4'
            type='email'
            name='email'
            onChange={handleSignUpInputChange}
          />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Password'
            id='form5'
            type='password'
            name='password'
            onChange={handleSignUpInputChange}
          />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Repeat Password'
            id='form6'
            type='password'
            name='repeatPassword'
            onChange={handleSignUpInputChange}
          />
          <div className='d-flex justify-content-center mx-4 mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <MDBBtn className='mb-4 w-100' noRipple onClick={signupUser} disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </MDBBtn>
        </form>

        {
            loading && <InfinitySpin 
                        width='200'
                        color="#4fa94d"
                      />
          }

      </MDBContainer>
    </div>
    </div>
  );
};

export default UserSignup;
