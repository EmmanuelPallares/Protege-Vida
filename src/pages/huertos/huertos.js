import React, { useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import SideBarServices from "../../components/SideBarServices/SideBarServices";
import $ from "jquery";

const Huertos = () => {
  return (
    <section>
      <PageBanner title="huertos" inicio="inicio" />
      <section class="full-row">
        <div class="container">
          <div class="row">
            <SideBarServices class={active} />
            <div class="col-md-9">
              <div class="service-details">
                <div class="row">
                  <div class="col-md-12">
                    <div class="service-overview">
                      <div class="service-slider">
                        <div class="irem">
                          <img
                            src="https://i.imgur.com/jq76ja5.png"
                            alt="..."
                          />
                        </div>
                        <div class="irem">
                          <img
                            src="https://i.imgur.com/jq76ja5.png"
                            alt="..."
                          />
                        </div>
                        <div class="irem">
                          <img
                            src="https://i.imgur.com/jq76ja5.png"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div class="overview-caption">
                        <h4 class="inner-title">
                          <span>Quultiva</span> Huertos
                        </h4>
                        <p>
                          Interdum cum accumsan bibendum nullam justo elementum
                          semper. Maecenas ultrices elit arcu ante sapien.
                          Sollicitudin orci laoreet. Dui suscipit justo facilisi
                          eget Sapien curabitur massa purus primis, scelerisque
                          elementum in Porta Netus risus et mus quam ligula
                          tempus sociis molestie hymenaeos cras interdum class
                          hac lectus pulvinar morbi amet vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Huertos;
