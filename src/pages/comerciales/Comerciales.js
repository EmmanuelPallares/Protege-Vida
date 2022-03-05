import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";
import SideBarServices from "../../components/SideBarServices/SideBarServices";
import Slider from "../../components/Slider/Slider";
const Comerciales = () => {
  return (
    <div>
      <PageBanner title="Invernaderos Comerciales" inicio="Inicio" />
      <div class="full-row">
        <div class="container">
          <SideBarServices />

          <div class="col-md-9">
            <div class="service-details">
              <div class="row">
                <div class="col-md-12">
                  <div class="service-overview">
                    <div class="service-slider">
                      <Slider />
                    </div>
                    <div class="overview-caption">
                      <h4 class="inner-title">
                        <span>Quultiva</span> Comerciales
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comerciales;
