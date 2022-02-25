import React, { useEffect } from "react";
import $ from "jquery";
const MisionVision = () => {
  useEffect(() => {
    if ($(".according_details").length) {
      $(".according_title").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).addClass("active");
        }

        if ($(this).next(".according_details").is(":visible")) {
          $(this).removeClass("active");
        } else {
          $(".according_title").removeClass("active");
          $(".according_details").slideUp(300);
          $(this).addClass("active");
          $(this).next(".according_details").slideDown(300);
        }
      });
    }
  }, []);
  return (
    <>
      <section class="full-row">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title">
                    <span>Our</span> Mission
                  </h2>
                  <span class="sub-title">
                    Blandit libero feugiat erat imperdiet dignissim suspendisse
                    facilisis senectus parturient eros semper tempus et, blandit
                    hac egestas conubia mus rutrum dis consequat nulla justo
                    hymenaeos.
                  </span>
                  <ul class="check-lst">
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Cras ultricies sagittis vivamus dui faucibus. Feugiat.
                      Orci nibh ultrices.
                    </li>
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Neque accumsan maecenas platea diam hendrerit class aptent
                      tellus augue.
                    </li>
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Sociosqu metus mattis, ligula quis. Metus primis neque
                      hendrerit inceptos.
                    </li>
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Sollicitudin proin in nibh est inceptos rutrum dapibus.
                      Auctor dis.
                    </li>
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Congue magnis vivamus nisi ut hac ante. Tortor senectus.
                      Ultricies.
                    </li>
                    <li>
                      <span>
                        <i class=" fa fa-check"></i>
                      </span>
                      Cras ultricies sagittis vivamus dui faucibus. Feugiat.
                      Orci nibh ultrices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title">
                    <span>Our</span> Vision
                  </h2>
                  <span class="sub-title">
                    Blandit libero feugiat erat imperdiet dignissim suspendisse
                    facilisis senectus parturient eros semper tempus et, blandit
                    hac egestas conubia mus rutrum dis consequat nulla justo
                    hymenaeos.{" "}
                  </span>
                  <div class="our-vsn">
                    <div class="according_area">
                      <div class="according_title active">
                        Mempor posuere phasellus volutpat dolor, purus Accumsan.
                      </div>
                      <div class="according_details">
                        <p>
                          Congue nam sociis bibendum integer dolor, quam non
                          risus pulvinar neque ultrices neque sociis imperdiet
                          ullamcorper porta vitae pede molestie facilisi nec
                          cubilia fringilla parturient Consectetuer montes.
                          Condimentum eget in.
                        </p>
                      </div>
                    </div>
                    <div class="according_area">
                      <div class="according_title">
                        Parturient magna In nam aliquet proin lacinia cras
                        congue
                      </div>
                      <div class="according_details">
                        <p>
                          Congue nam sociis bibendum integer dolor, quam non
                          risus pulvinar neque ultrices neque sociis imperdiet
                          ullamcorper porta vitae pede molestie facilisi nec
                          cubilia fringilla parturient Consectetuer montes.
                          Condimentum eget in.
                        </p>
                      </div>
                    </div>
                    <div class="according_area">
                      <div class="according_title">
                        Mus nisi. Primis quisque iaculis. Torquent morbi
                        inceptos cras
                      </div>
                      <div class="according_details">
                        <p>
                          Congue nam sociis bibendum integer dolor, quam non
                          risus pulvinar neque ultrices neque sociis imperdiet
                          ullamcorper porta vitae pede molestie facilisi nec
                          cubilia fringilla parturient Consectetuer montes.
                          Condimentum eget in.
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
    </>
  );
};

export default MisionVision;
