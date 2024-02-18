import React from 'react';
import videofile from '../../assets/video/video.mp4';
import logo from '../../assets/images/logo-1.png';

import './body.css';
import LogoA from '../../assets/images/logoa.png';
import LogoB from '../../assets/images/logob.png';
import LogoC from '../../assets/images/logoc.png';
import LogoD from '../../assets/images/logod.png';
import log from '../../assets/images/simplecity.png';
import lo from '../../assets/images/simple2.png';
import loc from '../../assets/images/simple3.png';



export function Projectb() {
  return (
    <div>
    <div className="d-flex justify-content-between"  id='b'>
      <div className='pt-4 ms-4'>
        <h1 className='fw-{bold}'>
          Want an easier way <br/> to invest in property?
        </h1>
        <h5 className='pt-3 pb-3'>
          <pre>Spo Markets is an award-winning platform that provides a <br/>
          simple and low-cost way to access the property market.</pre>
        </h5>
         <input type='button' value="Invest Now" className='form btn btn-primary' />
      </div>
      <div className='pt-4 btn  '>
        <center >
          <video width="550" height="300"  >
            <source src={videofile} type="video/mp4"  />
          </video>
        </center>
      </div>
    </div>
    <div id='lm'>
            <h1 className='text-center'>How It Works?</h1>
            <h5 className='text-center'>How It Works?</h5>
            <div className='d-flex justify-content-between p-4'>
                <div className='ps-4'>
                    <img src={LogoA} className="logo1" alt="" />
                    <p>Choose your property</p>
                </div>
                <div>
                    <img src={LogoB} className="logo2" alt="" />
                    <p>Buy Blocks</p>
                </div>
                <div>
                    <img src={LogoC} className="logo3" alt="" />
                    <p>Earn net rental income per Block</p>
                </div>
                <div>
                    <img src={LogoD} className="logo4" alt="" />
                    <p>Sell your Blocks to earn any <br/> capital returns</p>
                </div>
            </div>
            <h6 className='text-center'>Consider whether investing in Blocks is right for you by reading the PDS</h6>
        </div>
        <div className="container-fluid" id='lm'>
                <h1 className='text-center'>Why Choose SPO Markets?</h1>

         <div className='d-flex justify-content-xl-between'  id='mo' >       
          <div id='mon'>
          <img src={log} alt="SPO Markets"  />
             <h5>Simplicity</h5>
             <p>Select your property and within minutes you <br/> can own Blocks in an investment property.</p>
          </div>
          <div id='mon'>
          <img src={lo} alt="SPO Markets"  />
           <h5>Finally - Access to Property <br />Market</h5>
           <p>Feeling locked out of the property market?<br /> With Blocks from under $100, now there’s <br /> an affordable way to invest.</p>


          </div>
          <div id='mon'>
              
          <img src={loc} alt="SPO Markets"  />
          <h5>Property team expertise</h5>
          <p>Properties are hand-picked by our property<br /> team. Learn More.</p>



          </div>
          </div>
          
          <div className="d-flex justify-content-around" id='mon'>
                <div id='ll'>
                <img src={logo} alt="SPO Markets" id='img' />

                </div>
                <div id='l'>
                     <h3><bold>Invest</bold></h3>
                     <a href="">Fees</a><br />
                     <a href=''>Developments</a>
                </div>
                 <div id='l'>
                      <h3><b>Company</b></h3>
                      <a href=''>Disclosure Notice</a>
                      <a href=''>PSD, FSG & TMD</a><br />
                      <a href=''>RG46 Schedule & other</a><br />
                      <a href=''>Documents</a><br />
                      <a href=''>Terms & Conditions</a><br />
                      <a href=''>Privacy Policy</a><br />
                 </div>
                <div id='l'>
                      <h3><b>My Accounts</b></h3>
                     
                      <a href=''>Login</a><br />
                      <a href=''>Signup</a>
                     
                </div>
                <div id='l' >
                       <h><b>Support</b></h><br />
                       <a href=''>Contact Us</a><br />
                       <a href='' className='Phone'>+61 784235142</a><br />
                       <a href='' className='envelope-arrow-up-fill'> contact@spomarkets.com</a>

                </div>
                

        </div>
        

        </div>
    
    </div>
  );
}
