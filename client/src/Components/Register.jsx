import React from 'react'
import "./Register.css";
import {BsFillPersonFill} from "react-icons/bs";
function Register() {
  return (
    <div className='register-form'>
        <div className='register'>

        <h1><BsFillPersonFill></BsFillPersonFill> Register</h1>
        <h3>Create An Account</h3>
        <div className='form'>
            <input type='text' placeholder='enter name'></input>
            <input type='text' placeholder='enter email'></input>
            <input type='text' placeholder='enter password'></input>
        </div>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Register