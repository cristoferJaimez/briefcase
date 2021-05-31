import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import devPhoto from '../img/devPhoto.jpg';

function DevInfo() {
  return (
    <div>
      <div className="devInfo">
        <ul>
          <li><FontAwesomeIcon icon={['fab', 'phone']} /> (+57) 313 8276705</li>
          <li> (+57) 320 8404975</li>
          <li> jaimez07788@gmail.com</li>
          <li> Bogota - Colombia</li>
        </ul>
      </div>
    </div>
  );
}

export default DevInfo;
