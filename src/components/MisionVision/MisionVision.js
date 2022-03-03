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
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title">
                    <span>Nuestra</span>
                  </h2>

                  <div class="our-vsn">
                    <div class="according_area">
                      <div class="according_title active">Misión</div>
                      <div class="according_details">
                        <p>
                          En quultiva encontrarás el apoyo técnico y suficiente
                          para que puedas emprender esa idea que tienes,
                          empleando técnicas y productos amigables con el medio
                          ambiente. Con el apoyo de profesionales y aplicando
                          las tecnologías disponibles, diseñamos proyectos
                          funcionales a la medida del cliente haciendo uso
                          eficiente de los recursos disponibles. Por una
                          agricultura sustentable al alcance de todos...
                          Protege, Quultiva y Cosecha.
                        </p>
                      </div>
                    </div>
                    <div class="according_area">
                      <div class="according_title">Visión</div>
                      <div class="according_details">
                        <p>
                          Posicionarnos en el mercado mexicano como uno de los
                          principales proveedores de huertos hortícolas y
                          suministro de soluciones integrales para la
                          agricultura protegida y ecológica.
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
