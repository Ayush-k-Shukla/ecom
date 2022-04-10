import React, { useState } from 'react';
import './Auth.css';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { signIn, signUp } from '../../actions/auth';

const Auth = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [formData, setformData] = useState(initialFormState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setformData(formData);
    console.log(formData);
    dispatch(signUp(formData, navigate));
  };
  return (
    <div className='maindiv'>
      <div>
        <form className='formdiv'>
          <input
            type='text'
            name='firstName'
            placeholder='Enter First Name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Enter last Name onChange={handleChange}'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='enter email'
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='enter password'
            onChange={handleChange}
          />
          <input type='submit' value='submit' onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Auth;
