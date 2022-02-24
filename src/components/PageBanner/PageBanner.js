import React from "react";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  return (
    <div>
      <div id="banner">
        <div class="container">
          <div class="row padding-80">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">{props.name}</h2>
            </div>
            <div class="col-md-6 col-sm-6">
              <ul class="page-location">
                <li>
                  <Link to="/">{props.inicio}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
