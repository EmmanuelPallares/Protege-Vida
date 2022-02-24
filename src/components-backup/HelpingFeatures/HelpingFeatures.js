import React from "react";
import "./HelpingFeatures.css";

const HelpingFeatures = () => {
  return (
    <div>
      <section class="full-row gradientGreen before-muddy padding-100">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4">
              <div
                class="bg-white help-info wow zoomIn"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i class="flaticon-business-1"></i>
                </span>
                <h4 class="inner-title">
                  <a href="#">Asesoría</a>
                </h4>
                <p>Todos nuestros servicios incluyen asesorias via whatsapp.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div
                class="bg-white help-info wow zoomIn"
                data-wow-delay="500ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i class="flaticon-user-1"></i>
                </span>
                <h4 class="inner-title">
                  <a href="#">Video Instalación</a>
                </h4>
                <p>
                  Los invernaderos que se envian incluyen video interactivo para
                  facil armado.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div
                class="bg-white help-info wow zoomIn"
                data-wow-delay="700ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i class="flaticon-consulting-message"></i>
                </span>
                <h4 class="inner-title">
                  <a href="#">Pago Seguro</a>
                </h4>
                <p>Protege tu compra con Mercado Libre y mercado pago.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpingFeatures;
