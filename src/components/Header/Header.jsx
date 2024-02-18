

import './styles.css';
import logo from '../../assets/images/logo-1.png';




export function Projecta(){
  return(
    <header className="d-flex justify-content-between " id="spo">
         <div>
         <img src={logo} alt="SPO Markets" id='img' />
         </div>
         <div className='hidden space-6 md:flex'>
             <ul className='d-flex mt-6' id='sum'>
              <li className='mr-4' >
                <b><a className='nav-link page-scrol font-weight-bold me-4 cursor-pointer' href='/'>Home</a></b>
              </li>
              <li className='mr-4'>
               <b> <a className='nav-link page-scrol me-4 cursor-pointer' href=''>How is it Works</a></b>
              </li>
              <li className='mr-4'>
                <a className='nav-link page-scrol me-4 cursor-pointer' href=''>Project</a>
              </li>
              <li className='mr-4'>
                <a className='nav-link page-scrol me-4 cursor-pointer' href=''>About us</a>
              </li>
              <div className='d-flex'>
                <ul>
                 
                <li> <a className='nav-link me-4 page-scrol border ' id='sri'>Login</a></li>
                <li> <a className='nav-link  me-4 page-scrol'id='sri'>Sign up</a></li>
               </ul>
              </div>
             </ul>

         </div>

    </header>
  )
}
