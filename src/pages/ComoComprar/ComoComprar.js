import React, { useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import HowToBuy from "../../components/HowToBuy/HowToBuy";

const ProcesoCompra = () => {
  return (
    <section>
      <PageBanner name="Como Comprar" inicio="Inicio" />
      <HowToBuy />
    </section>
  );
};

export default ProcesoCompra;
