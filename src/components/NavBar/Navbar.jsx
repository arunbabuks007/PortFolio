import {React,useState,useRef} from "react"
import logo from '../../assets/7.jpg'
import theme_pattern from '../../assets/stripe.png'
import './Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from '../../assets/stripe.png'
import menu_close from '../../assets/stripe.png'
const Navbar = () => {
  const[menu,setMenu]=useState("about");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" height={40}/>
        <img src={menu_open}  alt="" height={40} onClick={openMenu} className="nav-mob-open"/>
    <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} alt="" height={40} onClick={()=>setMenu("about")} className="nav-mob-close"/>
      <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={theme_pattern} alt="" height={40}/>:null}</li>
      <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setMenu("about")}> About  </p></AnchorLink>{menu==="about"?<img src={theme_pattern} alt="" height={40}/>:null}</li>
      <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={()=>setMenu("services")}> Services  </p></AnchorLink>{menu==="services"?<img src={theme_pattern} alt="" height={40}/>:null}</li>
      <li><AnchorLink className="anchor-link" offset={50} href='#Portfolio'><p onClick={()=>setMenu("portfolio")}> Portfolio  </p></AnchorLink>{menu==="portfolio"?<img src={theme_pattern} alt="" height={40}/>:null}</li>
      <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setMenu("contact")}> Contact  </p></AnchorLink>{menu==="contact"?<img src={theme_pattern} alt="" height={40}/>:null}</li>
    </ul>
    <div class="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink>{menu==="contact"?<img src={theme_pattern} alt="" height={40}/>:null}</div>
    </div>
  )
}

export default Navbar