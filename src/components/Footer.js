import React from "react";

//import devPhoto from '../img/devPhoto.jpg';

function Footer() {
  return (
    <div>
      <footer className="page-footer deep-purple">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Dev. Cristofer Jaimez</h5>
                <p className="grey-text text-lighten-4"></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links of interest</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/CrissTo/">facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/cristofer_jaimez/">instagram </a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/cristo_arts/">instagram leisure</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021
            <a class="grey-text text-lighten-4 right" href="#!">social</a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Footer;
