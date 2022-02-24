import React from "react";
import { Link } from "react-router-dom";

const HowToBuy = () => {
  return (
    <section class="full-row bg-default padding-50">
      <div class="container">
        <div class="row">
          <div class="get-tch full-row">
            <div class="col-md-9 col-sm-8 col-xs-12">
              <h4 class="banner-title color-white no-margin">
                ¿Cómo realizar tu compra?
              </h4>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-12 box-right-middle">
              <Link to="como-comprar">
                <a class="btn btn-large">Proceso de Compra</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
