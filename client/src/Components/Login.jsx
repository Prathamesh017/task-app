import React ,{useState} from 'react'
import "./login.css";
import {MdLogin} from "react-icons/md";
import { checkisEmpty,validateEmail } from '../helpers/helper';
function Login() {
  const [intialData,setIntialData]=useState({
    email:"",
    password:"",
  })
  const [errorMessage,showErrorMessage]=useState({
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
    <div className='login-form'>
        <div className='login'>

        <h1><MdLogin></MdLogin>Login</h1>
        <h3>Please Enter Details</h3>
        <div className='form'>
          <div className='input-div'>
            <input type='text' placeholder='enter email'  onChange={(event)=>{
              setIntialData((intialData=>({...intialData,email:event.target.value})))
            }}></input>

            <p>{errorMessage.email}</p>
              </div>
            <div className='input-div'>
            <input type='text' placeholder='enter password'  onChange={(event)=>{
              setIntialData((intialData=>({...intialData,password:event.target.value})))
            }}></input>
            <p>{errorMessage.password}</p>
            </div>
        </div>
        <button onClick={submitData}>Login</button>
        </div>
    </div>
  )
}

export default Login;