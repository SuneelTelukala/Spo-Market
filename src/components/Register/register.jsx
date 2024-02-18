import { useFormik } from "formik";
import logo from '../../assets/images/logo-1.png';
import './reg.css';





export function UserRegister(){

    const formik = useFormik({
        initialValues: {
            FristName: '',
            LastName: '',
            PhoneNumber:'',
            Email: '',
            Location: '',
            Password:''
        },
        

    }
    )

    return(
        <div id='sign'>
        <div id='m'>
         <div className='d-flex ' id='log'>
            <div>
                <h1>Sign Up</h1>
                <p>Hi,Wellcome to Spo Markets</p>
            </div>
            <div>
               <img src={logo} alt="SPO Markets" id='p' />
            </div>
     </div>
     <p id='log'>By logging in to Spo Markets,I agree to the 
                <a>Conditions of use </a>and
            </p>
            <p id='log'>Privacy Policy</p>
        <form   onSubmit={formik.handleSubmit} id='l'>
            <dd>
        <div className=" d-flex row">
             <div className="col">
                  <input type="text" onChange={formik.handleChange} className=" form-control   " placeholder="FirstName" name="FristName"/>
             </div>
            <div className="col">
                  <input type="text" onChange={formik.handleChange} className=" form-control  " placeholder="LastName" name="LastName"/>
            </div>
        </div>
        </dd>
               <dd id='z'>
                <input type='phonenumber'   onChange={formik.handleChange} placeholder='Phonenumber' name='Phonenumber' 
                 className='form-control   '/>
               </dd>
               
               <dd id='z'>
                <input type='Email' onChange={formik.handleChange} placeholder='Email' name='Email' 
                 className='form-control '/>
               </dd>
               <dd id='z'>
                <input type='Location' onChange={formik.handleChange} placeholder='Location' name='Location' 
                 className='form-control  '/>
               </dd>
               <dd id='z'>
                <input type='password' onChange={formik.handleChange} placeholder='Password' name='Password'
                 className='form-control  '/>
               </dd>
               
               <div className="form-check" id='z'>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
               </div>
                   <button type="submit" className="btn btn-primary">Submit</button>

     
        </form>
        <h5 id='z'>Already have an account?Sign up</h5>   

        </div>
    </div>
)
}
    
        