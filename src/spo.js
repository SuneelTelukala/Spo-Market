import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Main } from './components/main';
import { Projectd } from './components/Login/Login';

import logo from './assets/images/logo-1.png';

function Spo() {
  return (
    <div className='container-fluid' style={{ height: '100vh' }}>
      <Router>
        <header className="d-flex justify-content-between " id="spo">
          <div>
            <img src={logo} alt="SPO Markets" id='img' />
          </div>
          <div className='hidden space-6 md:flex'>
            <ul className='d-flex mt-6' id='sum'>
              <li className='mr-4'>
                <Link to="/">Home</Link>
              </li>
              <li className='mr-4'>
                <Link to="">How is it Works</Link>
              </li>
              <li className='mr-4'>
                <Link to="">Project</Link>
              </li>
              <li className='mr-4'>
                <Link to="">About us</Link>
              </li>
              <div className='d-flex'>
                <Link to="/login" className='me-4 page-scrol'>Login</Link>
                <Link to="/signup" className='me-4 page-scrol'>Sign up</Link>
              </div>
            </ul>
          </div>
        </header>

        <section>
          <Routes>
            <Route path='/' element={<Main />} />
            {/* Add more routes as needed */}
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default Spo;
