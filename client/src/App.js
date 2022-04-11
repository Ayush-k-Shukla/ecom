import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthSignUp from './components/Auth/AuthSignup';
import AuthLogin from './components/Auth/AuthLogin';
import './index.css';

function App() {
  const admin = JSON.parse(localStorage.getItem('admin'));

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route
            path='/signup'
            exact
            element={admin ? <Navigate to='/' /> : <AuthSignUp />}
          />
          <Route
            path='/signin'
            exact
            element={admin ? <Navigate to='/' /> : <AuthLogin />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
