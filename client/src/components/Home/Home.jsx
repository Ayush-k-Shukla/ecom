import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Home = () => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //err on  navigate
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setAdmin(null);
  };

  useEffect(() => {
    const token = admin?.token;
    //check for token expired or not
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    setAdmin(JSON.parse(localStorage.getItem('admin')));
  }, [location]);
  return (
    <div className='home-container'>
      {admin ? (
        <>
          <h1>{`user ${admin.result.name} is currently logged in`}</h1>
          <h3>
            Now you can add the product <a href='/add'>here</a>
          </h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to='/signin'>Login</Link>
      )}

      <div className='products-container'>
        <h5>Product to be listed here</h5>
      </div>
    </div>
  );
};

export default Home;
