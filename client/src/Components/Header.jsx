import React from 'react';
import "./Header.css";
import {MdLogin} from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
function Header(props) {
  return (
    <div className='header'>
    <div className='left-heading'>
     <p>Task App</p>
    </div>
    <div className='right-heading'>
        <p><span className=''><MdLogin size={20}></MdLogin></span>Login</p>
        <p> <span><BsFillPersonFill size={20}/></span>Register</p>
    </div>
    </div>
  )
}

export default Header