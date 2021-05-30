import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper   teal darken-3 ">
          <a href="#!" className="brand-logo right">
            {this.props.email ? (
              <button
                className="btn-floating small red"
                onClick={() => {
                  fire.auth().signOut();
                }}
              >
                logOut
              </button>
            ) : (
              <i className="material-icons">account_circle</i>
            )}
          </a>

          <ul id="" className="">
            <li>
              {" "}
              <a href="#!">
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
