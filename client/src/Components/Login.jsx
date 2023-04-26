import React from 'react'
import "./login.css";
import {MdLogin} from "react-icons/md";
function Login() {
  return (
    <div className='login-form'>
        <div className='login'>

        <h1><MdLogin></MdLogin>Login</h1>
        <h3>Please Enter Details</h3>
        <div className='form'>
            <input type='text' placeholder='enter email'></input>
            <input type='text' placeholder='enter password'></input>
        </div>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Login;