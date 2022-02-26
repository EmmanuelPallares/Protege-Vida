import React from "react";

const SideBarServices = (props) => {
  return (
    <div class="col-md-3">
      <div class="service-sidebar">
        <ul class="srvc-ctgry">
          <li class={props.active}>
            <a>
              <span>
                <i class="flaticon-nature-1"></i>
              </span>
              Huertos
            </a>
          </li>
          <li>
            <a href="garden-care.html">
              <span>
                <i class="flaticon-travel"></i>
              </span>
              Plagas
            </a>
          </li>
          <li>
            <a href="watering-garden.html">
              <span>
                <i class="flaticon-nature-1"></i>
              </span>
              Riego Insumos
            </a>
          </li>
          <li>
            <a href="garden-design.html">
              <span>
                <i class="flaticon-plant"></i>
              </span>
              Fertilizantes
            </a>
          </li>
          <li>
            <a href="gutter-repair.html">
              <span>
                <i class="flaticon-fence"></i>
              </span>
              Cultivo
            </a>
          </li>
          <li>
            <a href="lawn-care.html">
              <span>
                <i class="flaticon-machine"></i>
              </span>
              Biogreen
            </a>
          </li>
          <li>
            <a href="land-design.html">
              <span>
                <i class="flaticon-tool"></i>
              </span>
              Invernaderos Mediana Escala
            </a>
          </li>
          <li>
            <a href="agricultural-research.html">
              <span>
                <i class="flaticon-greenhouse"></i>
              </span>
              Invernaderos Escala Comercial
            </a>
          </li>
          <li>
            <a href="agricultural-research.html">
              <span>
                <i class="flaticon-greenhouse"></i>
              </span>
              Accesorios para invernadero
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarServices;
