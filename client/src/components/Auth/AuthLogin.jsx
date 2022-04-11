import React, { useState } from 'react';
import './Auth.css';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { signIn, signUp } from '../../actions/auth';

const Auth = () => {
  const initialFormState = {
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
    dispatch(signIn(formData, navigate));
  };
  return (
    <div className='maindiv'>
      <div>
        <form className='formdiv'>
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
        <span>
          Don't have an account <a href='/signup'>signup</a>
        </span>
      </div>
    </div>
  );
};

export default Auth;
