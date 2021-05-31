import React from "react";

//import devPhoto from '../img/devPhoto.jpg';

function NavBar() {
  return (
    <div>
      <nav className="Nav">
        <div className="nav-wrapper">
            <div className="container">
            <a href="#!" className="brand-logo ">  BriefCase  </a>
            <a href="#!" data-target="menu-responsive" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
                <li><a href="#!">social</a></li>
                <li><a href="#!">social</a></li>
                <li><a href="!#">social</a></li>
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
