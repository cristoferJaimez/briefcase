import React from "react";

function DevInfo(props) {
  return (
    <div className="devInfo">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="linea centrado"> Lenguage </div>
            <p>
              <br></br>
            </p>

            {props.len.map((data, key) => {
              return (
                <div className="card  col s12 m3  " key={key}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.img} alt=""></img>
                    <span className="card-title">{data.title}</span>
                  </div>
                  <div className="card-content center-align">{data.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="linea centrado"> Frameworks </div>
            <p>
              <br></br>
            </p>

            {props.fre.map((data, key) => {
              return (
                <div className="card  col s12 m3 12" key={key}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.img} alt=""></img>
                    <span className="card-title">{data.title}</span>
                  </div>
                  <div className="card-content center-align">{data.description}</div>
                </div>
              );
            })}
          </div>
        </div>



        <div className="container">
          <div className="row">
            <div className="linea centrado"> frameworks that I am interested in learning </div>
            <p>
              <br></br>
            </p>

            {props.nexF.map((data, key) => {
              return (
                <div className="card  col s12 m3 12" key={key}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.img} alt=""></img>
                    <span className="card-title">{data.title}</span>
                  </div>
                  <div className="card-content center-align">{data.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="linea centrado"> Data Base </div>
            <p>
              <br></br>
            </p>

            {props.db.map((data, key) => {
              return (
                <div className="card  col s12 m3 12" key={data.id}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.img} alt=""></img>
                    <span className="card-title">{data.title}</span>
                  </div>
                  <div className="card-content center-align">{data.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="linea centrado"> Tools </div>
            <p>
              <br></br>
            </p>

            {props.tools.map((data, key) => {
              return (
                <div className="card  col s12 m3 12" key={data.id}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.img} alt=""></img>
                    <span className="card-title">{data.title}</span>
                  </div>
                  <div className="card-content center-align">{data.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevInfo;
