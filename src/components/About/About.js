import React from "react";
import "./About.css";
import { gql, useQuery } from "urql";

const AboutText = gql`
  {
    nosotrossConnection {
      edges {
        node {
          tituloPrincipal
          subtituloAbout
          subtituloAbout2
          imagenAbout1 {
            url
          }
          soloImagen {
            url
          }
        }
      }
    }
  }
`;

const Nosotros = () => {
  const [result] = useQuery({ query: AboutText });

  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="margin-top-100">
      <section className="full-row about-company">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div
                className="wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                <h2 className="title">
                  <span>Bienvenido </span>{" "}
                  {
                    result.data.nosotrossConnection.edges[0].node
                      .tituloPrincipal
                  }
                </h2>
                <span className="sub-title">
                  {" "}
                  {result.data.nosotrossConnection.edges[0].node.subtituloAbout}
                </span>
                <div className="text-area">
                  {
                    result.data.nosotrossConnection.edges[0].node
                      .subtituloAbout2
                  }
                </div>
              </div>
              <div className="row">
                <div className="fact-counter">
                  {/* <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-line-chart color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="230"
                      >
                        10
                      </div>
                      <span>Empleados</span>
                    </div>
                  </div> */}
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-user-1 color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="141"
                      >
                        +100
                      </div>
                      <span>Clientes Satisfechos</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-nature-3 color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="172"
                      >
                        +100
                      </div>
                      <span>Green Houses</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-time color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="2347"
                      >
                        +20
                      </div>
                      <span>Años de Experiencia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="none-mobile"
                src={
                  result.data.nosotrossConnection.edges[5].node.soloImagen.url
                }
                alt=""
              />
            </div>
          </div>

          {/* ICONOS DIVIDER */}
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img
                  src={
                    result.data.nosotrossConnection.edges[4].node.soloImagen.url
                  }
                  alt=""
                />
                <div className="overlay">
                  <h5 className="inner-title">
                    {" "}
                    {
                      result.data.nosotrossConnection.edges[4].node
                        .tituloPrincipal
                    }
                  </h5>
                  <a href="#" className="btn-link">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img
                  src={
                    result.data.nosotrossConnection.edges[2].node.soloImagen.url
                  }
                  alt="sdscsf"
                />
                <div className="overlay">
                  <h5 className="inner-title">
                    {
                      result.data.nosotrossConnection.edges[2].node
                        .tituloPrincipal
                    }
                  </h5>
                  <a href="#" className="btn-link">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img
                  src={
                    result.data.nosotrossConnection.edges[3].node.soloImagen.url
                  }
                  alt="big"
                />
                <div className="overlay">
                  <h5 className="inner-title">
                    {
                      result.data.nosotrossConnection.edges[3].node
                        .tituloPrincipal
                    }
                  </h5>
                  <a href="#" className="btn-link">
                    Saber más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
