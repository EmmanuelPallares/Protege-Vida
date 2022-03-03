import React from "react";
import "../TopBar/TopBar.css";

const TopBar = () => {
  return (
    <div>
      <div class="bg-default top-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <ul class="top-info-left">
                <li>Bienvenido a Quultiva</li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="top-info-right">
                <div class="soc-icon pull-right">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
                <ul class="user-nav pull-right">
                  <li class="dropdown">
                    <a class="user-toggle" data-toggle="dropdown" href="#">
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
