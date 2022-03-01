import React from "react";

const SideBarServices = () => {
  const Productos = [
    { id: 1, name: "Huertos" },
    { id: 2, name: "Plagas" },
    { id: 3, name: "Riego Insumos" },
    { id: 4, name: "Fertilizantes" },
    { id: 5, name: "Cultivo" },
    { id: 6, name: "Biogreen" },
    { id: 7, name: "Invernaderos Mediana Escala" },
    { id: 8, name: "Invernaderos Escala Comercial" },
    { id: 9, name: "Accesorios para invernadero" },
  ];
  return (
    <div class="col-md-3">
      <div class="service-sidebar">
        <ul class="srvc-ctgry">
          {Productos.map((id, name) => (
            <li key={name}>
              <a href="garden-care.html">
                <span>
                  <i class="flaticon-travel"></i>
                </span>
                {id.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarServices;
