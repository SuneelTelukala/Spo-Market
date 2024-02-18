
import './App.css';



import { BrowserRouter, Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
import '../src/components/Header/styles.css';

import logo from './assets/images/logo-1.png'; 






import { Projectb } from './components/body/body';
import { Smarket } from './components/Login/log';
import { Pro } from './components/project/pro';


function App() {

  
  

  


  return (
    
    <div className='container-fluid' style={{height:'100vh'}}>
      <BrowserRouter>
      <header className="d-flex justify-content-between  fixed-top " style={{overflowY:'hidden'}} id='spo'>
         <div>
         <img src={logo} alt="SPO Markets" id='img' />
         </div>
         <div className='hidden space-6 md:flex'>
             <ul className='d-flex mt-6' id='sum'>
              <li className='mr-4' >
                <a className='nav-link page-scrol me-4 font-weight-bold cursor-pointer' href='/'>Home</a>
              </li>
              <li className='mr-4'>
                <a className='nav-link page-scrol me-4 cursor-pointer' href=''>How is it Works</a>
              </li>
              <li className='mr-4'>
                <a className='nav-link page-scrol me-4 cursor-pointer' href=''> <Link to='/Pro' style={{textDecoration:'none',color:'black'}}>Project</Link></a>
              </li>
              <li className='mr-4'>
                <a className='nav-link page-scrol me-4 cursor-pointer' href=''>About us</a>
              </li>
             <div className='d-flex'>
                <Link to='/Smarket' className=' me-4 page-scrol cursor-pointer border-radius  '  style={{textDecoration:'none',color:'black'}}>Login</Link>
                  <Link to='/' className='  me-4 page-scrol cursor-pointer  ' style={{textDecoration:'none', color:'black' }}>Sign up</Link>
              </div>
             </ul>

         </div>

    </header>
         <section>
            <Routes>
                <Route path='/'  element={<Projectb/>}/>
                <Route path='/Pro' element={<Pro/>}/>
                <Route path='/Smarket' element={<Smarket/>} />
              
              
                

                
            </Routes>
         </section>
      </BrowserRouter>
    </div>
    

  );
}

export default App;