import React from "react";
import { Link } from "react-router-dom";

const SideBarServices = () => {
  const Productos = [
    { id: 1, name: "Huertos", icon: "fa fa-leaf", slug: "huertos" },
    { id: 2, name: "Plagas", icon: "fa fa-bug", slug: "plagas" },
    { id: 3, name: "Riego Insumos", icon: "fa fa-tint", slug: "riego-insumos" },
    { id: 4, name: "Fertilizantes", icon: "fa fa-leaf", slug: "fertilizantes" },
    { id: 5, name: "Cultivo", icon: "fa fa-leaf", slug: "cultivo" },
    { id: 6, name: "Biogreen", icon: "fa fa-leaf", slug: "biogreen" },
    {
      id: 7,
      name: "Invernaderos Mediana Escala",
      icon: "fa fa-leaf",
      slug: "invernaderos-mediana-escala",
    },
    {
      id: 8,
      name: "Invernaderos Escala Comercial",
      icon: "fa fa-leaf",
      slug: "invernaderos-escala-comercial",
    },
    {
      id: 9,
      name: "Accesorios para invernadero",
      icon: "fa fa-leaf",
      slug: "accesorios-para-invernadero",
    },
  ];
  return (
    <div class="col-md-3">
      <div class="service-sidebar">
        <ul class="srvc-ctgry">
          {Productos.map((id, name, icon, slug) => (
            <li key={name}>
              <Link to={`/${id.slug}`}>
                <i class={id.icon}></i>
                {id.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarServices;
