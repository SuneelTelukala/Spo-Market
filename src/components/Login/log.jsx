
import logo from '../../assets/images/logo-1.png';
import './Login.css';
import React from "react";
import axios from "axios";
import { useState} from "react";



 export function Smarket(){
    const [username,setUsername]=useState('')
    const [password,setPassword] =useState('')
    console.log({username,password})

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value) 
    }

    const handleapi = () => {
        console.log({username,password})
        axios.post('http://localhost:9966/auth/authorization',{
            username:username,
            password:password
        })
        .then (result =>{
            console.log(result)
            alert('success')
                 
        })
        .catch(error => {
            alert('servise error')
            console.log(error)
        })
    }
    

    return(
        
        <div   id="m">
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
            
            <div className="">
                <form >

          <div>
                <label>
                     <input type="Email" value={username} id="email" placeholder='Email' onChange={handleUsername} className="form-control" />
               </label><br />
               <label>
                     <input type="password" value={password} id="password" placeholder='Password' onChange={handlePassword} className="form-control" />
               </label>
          </div>

                 <div id="d">
                    <label className="flex items-center">
                       <input type="checkbox" name="rememberMe" className="form-checkbox" />
                       <span className="ml-2 text-sm">Remember me</span>
                  </label>
                     <span className="text-sm text-blue-500 cursor-pointer" id='im'>Forgot Password!</span>
                 </div>
                 <button id="d" onClick={handleapi} className="border btn btn-primary">Login</button>

                 <div>
                        <p>Not register yet! Register Now</p>
                 </div>
                 
          

                    

                </form>

            </div>

        </div>
    )
}