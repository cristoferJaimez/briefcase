//CSS
import "./App.css";
//Components
import DataDev from "./components/DataDev.js";
import Footer from "./components/Footer.js";
import DevInfo from "./components/DevInfo.js";
import Proyects from "./components/Proyects.js";
import Contacts from "./components/Contacts.js";
//Json
import { lenguage, framewords, dataBase, tools, nextFramewords } from './data/experience.json';



import Logo from './assets/img/logo.png';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import NavBar from './components/NavBar.js';


//router
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
  <Router>  
    <section className="left dasboard hide-on-med-and-down">
        <div className="dev-img-info z-depth-5 ">
          <img src={Logo} alt="img"></img>
          <div className="socialNetwoards center-align">
            <a href="https://api.whatsapp.com/send?phone=+573208404975&text=hola,%20qué%20tal?" target="blank_" className="proyects"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a> 
            <a href="https://www.facebook.com/CrissTo/" target="blank_" className="contacts">  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a>
            <a href="https://www.instagram.com/cristofer_jaimez/" target="blank_" className="profile">  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/cristo_arts/" target="blank_" className="profile">  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a>
            <a href="https://github.com/cristoferJaimez" target="blank_" className="">  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a>

          </div>
        </div>
        <ul className="collection">
          <Link to="/"  className="collection-item texto valign-wrapp"><i className="material-icons  profile  flow-text ">account_circle</i> Profile</Link>
          <Link to="/Experience" className="collection-item texto valign-wrapper lighten-5"><i className="material-icons  experience ">history</i> Experience</Link>
          <Link to="/Proyects" className="collection-item texto valign-wrapper lighten-5"><i className="material-icons  proyects ">view_quilt</i>  Proyects</Link>
          <Link to="/Contacts" className="collection-item texto valign-wrapper"><i className="material-icons  contacts ">contacts</i> Contacts</Link>
        </ul>
      
      </section>
     

    <Switch>
      <Router exact  path="/">
          <DataDev />
      </Router>

      <Router path="/Experience">
          <DevInfo len = {lenguage} fre = {framewords} tools={tools} db={dataBase} nexF={nextFramewords} />
      </Router>

      <Router path="/Proyects">
          <Proyects />
      </Router>

      <Router path="/Contacts">
          <Contacts />
      </Router>
    </Switch>


      </Router>

      <header className="App-header">
        
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
