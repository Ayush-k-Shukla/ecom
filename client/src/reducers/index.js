import { combineReducers } from 'redux';
import products from './products.js';
import authReducer from './auth.js';

export default combineReducers({
  products,
  authReducer,
});
