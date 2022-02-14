import React from "react";
import { gql, useQuery } from "urql";
const NuestrosServicios = gql`
  {
    services {
      tituloServicios
      servicio1
      parrafo1
      servicio2
      parrafo2
      servicio3
      parrafo3
      servicio4
      parrafo4
    }
  }
`;

const Ourservices = () => {
  const [result] = useQuery({ query: NuestrosServicios });

  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <section className="full-row bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="title text-center down-line wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                {result.data.services[0].tituloServicios}
              </h2>
              {/* <span className="sub-title box text-center ">
                Elit ultricies adipiscing ornare. Rutrum sapien aliquet mollis.
                Pretium condimentum. Cursus elit hac fames laoreet non nec
                facilisis quis dui.
              </span> */}
            </div>
          </div>
          <div className="row margin-top-15">
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-nature-3"></span>
                </div>
                <h4 className="inner-title">
                  {result.data.services[0].servicio1}
                </h4>
                {/* <a href="tree-plantation.html">
                </a> */}
                <p>{result.data.services[0].parrafo1}</p>
                {/* <a className="btn btn-link" href="tree-plantation.html">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-travel"></span>
                </div>
                <h4 className="inner-title">
                  {result.data.services[0].servicio2}
                </h4>
                {/* <a href="garden-care.html">
                </a> */}
                <p>{result.data.services[0].parrafo2}</p>
                {/* <a className="btn btn-link" href="garden-care.html">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-nature-2"></span>
                </div>
                <h4 className="inner-title">
                  {result.data.services[0].servicio3}
                </h4>
                {/* <a href="watering-garden.html">
                </a> */}
                <p>{result.data.services[0].parrafo3}</p>
                {/* <a className="btn btn-link" href="watering-garden.html">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-plant"></span>
                </div>
                <h4 className="inner-title">
                  {result.data.services[0].servicio4}
                </h4>
                {/* <a href="garden-design.html">
                </a> */}
                <p>{result.data.services[0].parrafo4}</p>
                {/* <a className="btn btn-link" href="garden-design.html">
                  Read More
                </a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="btn-center wow fadeIn"
                data-wow-delay="500ms"
                data-wow-duration="700ms"
              >
                {/* <a className="btn btn-primary" href="service.html">
                  All Services
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourservices;
