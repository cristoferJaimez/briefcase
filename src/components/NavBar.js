import React from "react";

//import devPhoto from '../img/devPhoto.jpg';

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

        <ul className="sidenav" id="menu-responsive">
                <li><a href="#!">social</a></li>
                <li><a href="#!">social</a></li>
                <li><a href="!#">social</a></li>
        </ul>
    </div>
  );
}

export default NavBar;
