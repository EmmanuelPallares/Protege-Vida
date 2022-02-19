import React from "react";
import "../TopBar/TopBar.css";

const TopBar = () => {
  return (
    <div>
      <div className="bg-default top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <ul className="top-info-left">
                <li>Bienvenido a ProtegeVida</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="top-info-right">
                <div className="soc-icon pull-right">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-linkedin"></i>{" "}
                  </a>
                </div>
                <ul className="user-nav pull-right">
                  <li className="dropdown">
                    <a className="user-toggle" data-toggle="dropdown" href="#">
                      Redes Sociales
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
