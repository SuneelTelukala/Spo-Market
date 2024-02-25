
import axios from "axios";
import {  useFormik } from "formik";
import { useState, useEffect } from "react";
import logo from '../../assets/images/logo-1.png';
import './Login.css';
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

export function UserLogin(){


     let navigate = useNavigate();
    const [data, setData] = useState([{ username:'', password:''}]);
    const [userError, setUserError] = useState('');

    const [cookies, setCookie, removeCookie] = useCookies('userName');

    const formik = useFormik({
        initialValues : {                                         
            username: '',
            password:''
        },
        onSubmit: (values)=>{
            var user = data.find(item=> item.username===values.username);
            if(user.password===values.password){
                setCookie("username", user.username);
                alert("Login Success")
                navigate("/Pro");
                
                
            } else {
                setUserError("Invalid Credentials");
            }
        }
    })

    useEffect(()=>{
        axios.post('https://test.service.spomarkets.com/auth/authorization')
        .then((response)=>{
            setData(response.data);
        })
    },[]);



    return(
           <div id="m">
              <div>
                <div className="max-w-lg mx-auto center header my-10 p-8 align-items-center rounded-x1 pt-4">
                <div className="d-flex">
                <div className="w-3/4">
                   <h1 className="text-4xl mb-2 font-medium">Sign In</h1>
                   <p className="text-slate-500">Hi, Welcome to SPO Markets</p>
               </div>
               <div className="w-1/3 items-start justify-content-space-around">
                 <img src={logo} alt="SPO Markets" id='img' />
               </div>
              </div>
               <h6>
                 By logging in to SPO Markets, I agree to the{' '}
                <a className="font-semibold text-indigo-500 hover:text-gray-500 cursor-pointer">Privacy policy</a> and{' '}
                <a className="font-semibold text-indigo-500 hover:text-gray-500 cursor-pointer">Polisy Polisy</a>
              </h6>
      </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    
                    <dd><input type="text" name="Username" placeholder="Email" onChange={formik.handleChange} className="form-control border border-3" /></dd>
                    
                    <dd><input type="password" name="Password" placeholder="Password" onChange={formik.handleChange} className="form-control border border-3 "  /></dd>
                    <div id="d">
                    <label className="flex items-center">
                       <input type="checkbox" name="rememberMe" className="form-checkbox" />
                       <span className="ml-2 text-sm">Remember me</span>
                    </label>
                     <span className="text-sm text-blue-500 cursor-pointer" id='im'>Forgot Password!</span>
                 </div>
                    
                </dl>
                <button className="btn btn-warning">Login</button>
                <div>
                        <p>Not register yet! Register Now</p>
                 </div>
                 
                <p className="h4 text-danger">{userError}</p>
 
                
                
            </form>
        </div>
    )
}