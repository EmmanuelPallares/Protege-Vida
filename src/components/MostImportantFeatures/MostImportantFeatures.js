import React from "react";
import { gql, useQuery } from "urql";
const ServiciosDestacados = gql`
  {
    serviciosDestacadosPConnection {
      edges {
        node {
          encabezado
          subtitulo

          iconServiciosDestacados {
            url
          }
        }
      }
    }
  }
`;
const MostImportantFeatures = () => {
  const [result] = useQuery({ query: ServiciosDestacados });

  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <section className="full-row">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="title wow fadeInRight">
                {
                  result.data.serviciosDestacadosPConnection.edges[0].node
                    .encabezado
                }
              </h2>
              <span
                className="sub-title wow fadeInRight"
                data-wow-delay="800ms"
                data-wow-duration="1000ms"
              >
                {
                  result.data.serviciosDestacadosPConnection.edges[0].node
                    .subtitulo
                }
              </span>

              {/* ICONS AND TEXT */}
              <ul className="feature">
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="500ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-wallet"></i>
                  </span>
                  <div className="feature-item">
                    <h4>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .encabezado
                      }
                    </h4>
                    <p>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .subtitulo
                      }
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="600ms"
                    data-wow-duration="1000ms"
                  >
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .iconServiciosDestacados.url
                      }
                      width="200"
                      height="70"
                    />
                  </span>
                  <div className="feature-item">
                    <h4>
                      {" "}
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .encabezado
                      }
                    </h4>
                    <p>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .subtitulo
                      }
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="700ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-guarantee"></i>
                  </span>
                  <div className="feature-item">
                    <h4>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .encabezado
                      }
                    </h4>
                    <p>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .subtitulo
                      }
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="800ms"
                    data-wow-duration="1000ms"
                  >
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .iconServiciosDestacados.url
                      }
                      width="200"
                      height="70"
                    />
                  </span>
                  <div className="feature-item">
                    <h4>
                      {" "}
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .encabezado
                      }
                    </h4>
                    <p>
                      {
                        result.data.serviciosDestacadosPConnection.edges[4].node
                          .subtitulo
                      }
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  <div className="before-muddy margin-bottom-30">
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[8].node
                          .iconServiciosDestacados.url
                      }
                      alt="ssssssss"
                    />
                    <div className="overlay img-box">
                      <span className="icon-border">
                        <i className="color-white flaticon-business-1"></i>
                      </span>
                      <h4 className="inner-title color-white">
                        {
                          result.data.serviciosDestacadosPConnection.edges[8]
                            .node.encabezado
                        }
                      </h4>
                      <p>
                        {
                          result.data.serviciosDestacadosPConnection.edges[8]
                            .node.subtitulo
                        }
                      </p>
                      <a href="#" className="btn btn-default">
                        Leer más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6">
                  <div className="before-muddy margin-bottom-30">
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[9].node
                          .iconServiciosDestacados.url
                      }
                      alt="dddddddddddddddd"
                    />
                    <div className="overlay img-box">
                      <span className="icon-border">
                        <i className="color-white flaticon-wallet"></i>
                      </span>
                      <h4 className="inner-title color-white">
                        {
                          result.data.serviciosDestacadosPConnection.edges[9]
                            .node.encabezado
                        }
                      </h4>
                      {/* <p>
                        {
                          result.data.serviciosDestacadosPConnection.edges[9]
                            .node.subtitulo
                        }
                      </p> */}
                      <a href="#" className="btn btn-default">
                        Ver más
                      </a>
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

export default MostImportantFeatures;
