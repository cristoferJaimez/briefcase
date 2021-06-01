import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

import {
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";

//import devPhoto from '../img/devPhoto.jpg';

function DevInfo() {
  return (
    <div>
      <div className="devInfo">
        <table className="table hide-on-med-and-down">  
         <tbody>
          <tr>
            <td>
              <div className="line"></div>
            </td>
            <td>
              <h3>Cristofer <span className="ape">Jaimez</span></h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="contacts" /> (+57)
                  313 8276705
                </li>
                <li>  <FontAwesomeIcon icon={faWhatsapp} className="proyects" />  (+57) 320 8404975</li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="contacts" />{" "}
                  jaimez07788@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapPin} className="contacts" />{" "}
                  Bogotá - Colombia
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>



        {/*info mobil*/}

        <table className="table-mobil hide-on-large-only striped">  
         <tbody>
          <tr>
            <td>
              <div className="line-mobil"></div>
            </td>
            <td>
              <h3>Cristofer <span className="ape">Jaimez</span></h3>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td><FontAwesomeIcon icon={faPhone} className="contacts" /></td>
                            <td>(+57) 313 8276705</td>
                        </tr>

                        <tr>
                            <td><FontAwesomeIcon icon={faWhatsapp} className="proyects" /></td>
                            <td>(+57) 320 8404975</td>
                        </tr>

                        <tr>
                            <td><FontAwesomeIcon icon={faEnvelope} className="contacts" /></td>
                            <td> jaimez07788@gmail.com</td>
                        </tr>

                        <tr>
                            <td><FontAwesomeIcon icon={faMapPin} className="contacts" /></td>
                            <td>Bogotá - Colombia</td>
                        </tr>
                    </tbody>
                </table>
            </td>
          </tr>
          </tbody>
        </table>

        {/*fin info mobil*/}
        
      </div>
    </div>
  );
}

export default DevInfo;
