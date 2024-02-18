
import './down.css';
import logo from '../../assets/images/logo-1.png';





export function Html(){
    return(
        <div className="d-flex justify-content-around">
                <div>
                <img src={logo} alt="SPO Markets" id='img' />

                </div>
                <div>
                     <h3><bold>Invest</bold></h3>
                     <a href="">Fees</a><br />
                     <a href=''>Developments</a>
                </div>
                 <div>
                      <h3><b>Company</b></h3>
                      <a href=''>Disclosure Notice</a>
                      <a href=''>PSD, FSG & TMD</a><br />
                      <a href=''>RG46 Schedule & other</a><br />
                      <a href=''>Documents</a><br />
                      <a href=''>Terms & Conditions</a><br />
                      <a href=''>Privacy Policy</a><br />
                 </div>
                <div>
                      <h3><b>My Accounts</b></h3>
                     
                      <a href=''>Login</a><br />
                      <a href=''>Signup</a>
                     
                </div>
                <div>
                       <h><b>Support</b></h><br />
                       <a href=''>Contact Us</a><br />
                       <a href='' className='Phone'>+61 784235142</a><br />
                       <a href='' className='envelope-arrow-up-fill'> contact@spomarkets.com</a>

                </div>

        </div>
    )
}