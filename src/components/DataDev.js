import React from "react";
import Logo from '../assets/img/logo.png';
import {
  faWhatsapp,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DataDev(props) {
  return (
    <div>
      <section className="left dasboard hide-on-med-and-down">
        <div className="dev-img-info z-depth-5 ">
          <img src={Logo} alt="img"></img>
          <div className="socialNetwoards center-align">
            <a href="#!" className="proyects"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a> 
            <a href="https://www.facebook.com/CrissTo/" className="contacts">  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a>
            <a href="https://www.instagram.com/cristofer_jaimez/" className="profile">  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/cristo_arts/" className="profile">  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a>

          </div>
        </div>
        <ul className="collection">
          <a href="#!" className="collection-item texto valign-wrapper"><i className="material-icons  profile  flow-text ">account_circle</i> Profile</a>
          <a href="#!" className="collection-item texto valign-wrapper"><i className="material-icons  experience ">history</i> Experience</a>
          <a href="#!" className="collection-item texto valign-wrapper"><i className="material-icons  proyects ">view_quilt</i>  Proyects</a>
          <a href="#!" className="collection-item texto valign-wrapper"><i className="material-icons  contacts ">contacts</i> Contacts</a>
        </ul>
      </section>
    </div>
  );
}

export default DataDev;
