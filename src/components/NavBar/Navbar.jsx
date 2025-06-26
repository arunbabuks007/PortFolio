import React, { useState } from "react";
import logo from '../../assets/Logo.png';
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from '../../assets/stripe.png';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom-width">

      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" height={40} />
        </a>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["home", "about","Exp&Projects","services", "portfolio"].map((item) => (
              <li className="nav-item" key={item}>
                <AnchorLink className="nav-link" offset={50} href={`#${item}`} onClick={() => setMenu(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {menu === item && (
                     <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: .5,
          // repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          height: '3px',
          backgroundColor: 'white',
        }}
      />

                  )}
                </AnchorLink>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <AnchorLink
  className="btn btn-connect center-on-md"
  offset={50}
  href="#contact"
  onClick={() => setMenu("contact")}
>
  Contact Me
</AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
