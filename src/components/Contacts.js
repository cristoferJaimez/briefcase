import React from "react";

function Contacts() {
  return (
    <div className="devInfo">
              <h1> Contacts </h1>
              <form>
                  <input placeholder="Ingrese email"></input>
                  <textarea placeholder="msm"></textarea>
                  <input type="submit" value="Send" className="btn btn-sm" />
              </form>
    </div>
  );
}

export default Contacts;
