import React from "react"
import logo from '../../assets/7.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" height={40}/>
    <ul className='nav-menu'>
      <li>Home</li>
      <li> About  </li>
      <li> Services  </li>
      <li> Portfolio  </li>
      <li> Contact  </li>
    </ul>
    <div class="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar