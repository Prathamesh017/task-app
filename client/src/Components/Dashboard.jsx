import React, { useState } from 'react'
import Header from './Header'
import Register from './Register'
import Login from './Login';
function Dashboard() {
const [loginOrRegister,setLoginorRegister]=useState(true);
  return (
    <div className='App'>
        <div>
        <Header></Header>
        </div>
        <div>
        {loginOrRegister===true?<Register></Register>:<Login></Login>}
        </div>
       
    </div>
    
  )
}

export default Dashboard