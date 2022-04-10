import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthSignUp from './components/Auth/AuthSignup';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<AuthSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
