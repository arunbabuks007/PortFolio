import React, { useState } from "react";
// import logo from '../../assets/logo.png';
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from '../../assets/stripe.png';

const Navbar = () => {
  const [menu, setMenu] = useState("about");

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          {/* <img src={logo} alt="Logo" height={40} /> */}
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <AnchorLink className="nav-link" offset={50} href={`#${item}`} onClick={() => setMenu(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {menu === item && (
                    <img src={theme_pattern} alt="highlight" height={20} className="ms-2" />

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
  Connect With Me
</AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
