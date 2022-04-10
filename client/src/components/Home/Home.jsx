import React from 'react';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='products-container'>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
