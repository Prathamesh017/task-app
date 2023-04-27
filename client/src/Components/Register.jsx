import React, { useState } from 'react'
import "./Register.css";
import {BsFillPersonFill} from "react-icons/bs";
import { checkisEmpty,validateEmail } from '../helpers/helper';
function Register() {
const [intialData,setIntialData]=useState({
  name:"",
  email:"",
  password:"",
})
const [errorMessage,showErrorMessage]=useState({
  name:"",
  email:"",
  password:"",
});


const submitData=()=>{
//  const {name ,email,password}=intialData;
 for (const key in intialData) {
   checkisEmpty(key,intialData[key],showErrorMessage);
}
if(intialData.email.length>=3){
  console.log(intialData.email)
  validateEmail(intialData.email,showErrorMessage);
}

 
}
  return (
    <div className='register-form'>
        <div className='register'>

        <h1><BsFillPersonFill></BsFillPersonFill> Register</h1>
        <h3>Create An Account</h3>
        <div className='form'>
          <div className='input-div'>
            <input type='text' placeholder='enter name' onChange={(event)=>{
              setIntialData((intialData=>({...intialData,name:event.target.value})))
            }}></input>
            <p>{errorMessage.name}</p>
             </div>
            <div className='input-div'>
            <input type='email' placeholder='enter email' onChange={(event)=>{
              setIntialData((intialData=>({...intialData,email:event.target.value})))
            }}></input>
              <p>{errorMessage.email}</p>
             </div>
            <div className='input-div'>
            <input type='password' placeholder='enter password' onChange={(event)=>{
              setIntialData((intialData=>({...intialData,password:event.target.value})))
            }}></input>
              <p>{errorMessage.password}</p>
             </div>
        </div>
        <button onClick={submitData}>Regiser</button>
        </div>
    </div>
  )
}

export default Register