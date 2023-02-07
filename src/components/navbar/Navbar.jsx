import React, { useState } from 'react';
import './navbar.css'
import {Link} from "react-router-dom"

export default function Navbar() {

  const [openModal,setOpenModal] = useState(false)

  const handleClick = ( ) =>{
    setOpenModal(true)
  }
  
  return (
  <>
    <nav className='Navbar'>
        <input type="checkbox" id="check"/>
        <div className="logo">
            broomstick <span className='register-r'>&#9415;</span>
        </div>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <ul className='nav-link'>
            <li><Link  className='linkpart' to ="/">Home </Link></li>
            <li><Link className='linkpart'>About</Link></li>
            <li><Link className='linkpart'>Life Skill</Link></li>
            <li><Link className='linkpart' to="/Landingpage" >Hiring</Link></li>
           <Link className='linkpart' to="/login"> <button  className='Contact-btn'><b>Login/Signup</b></button></Link>
        </ul>
        </nav>
  </>
  )
}
