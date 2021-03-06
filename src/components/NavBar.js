import React from "react";
import {
    faHistory,
    faUser,
    faTable,
    faAddressBook
  } from "@fortawesome/free-solid-svg-icons";

  import {
    faWhatsapp,
    faFacebook,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {BrowserRouter as Routers,  Link} from 'react-router-dom'


function NavBar() {
  return (
    <div>
      <nav className="Nav">
        <div className="nav-wrapper">
            <div className="container">
            <a href="#!" className="brand-logo right deep-purple darken-3 ">  Developer  </a>
            <a href="#!" data-target="menu-responsive" className="sidenav-trigger">
                <i className="material-icons menu">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
                
            </ul>
            </div>
        </div>
      </nav>
    
   <Routers> 
        <ul className="sidenav" id="menu-responsive">
          <li className="center-align"><strong>Dev.</strong> Cristofer <strong>Jaimez</strong></li>
          <li><Link to="/" className="profile"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Profile</Link></li>
          <li><Link to="/Experience" className="experience"><FontAwesomeIcon icon={faHistory}></FontAwesomeIcon> Experience</Link></li>
          <li><Link to="/Proyects" className="proyects"> <FontAwesomeIcon icon={faTable}></FontAwesomeIcon> Proyects</Link></li>
          <li><Link to="/Contacts" className="contacts"> <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> Contacts</Link></li>
          <li className="center-align">Social Network</li>
          <li><a href="https://api.whatsapp.com/send?phone=+573208404975&text=hola,%20qué%20tal?" className="contacts"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> WhatSapp</a></li>
          <li><a href="https://www.facebook.com/CrissTo/" className="contacts"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook</a></li>
          <li><a href="https://www.instagram.com/cristofer_jaimez/" className="contacts"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram</a></li>
          <li><a href="https://www.instagram.com/cristo_arts/" className="contacts"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>  Other Instagram</a></li>
          <li className="center-align">Repositories</li>
          <li><a href="https://github.com/cristoferJaimez" className="contacts"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  GitHub</a></li>

        </ul>
        
    </Routers>
    </div>
  );
}

export default NavBar;
