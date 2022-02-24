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
      <section class="full-row">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h2 class="title wow fadeInRight">
                {
                  result.data.serviciosDestacadosPConnection.edges[0].node
                    .encabezado
                }
              </h2>
              <span
                class="sub-title wow fadeInRight"
                data-wow-delay="800ms"
                data-wow-duration="1000ms"
              >
                {
                  result.data.serviciosDestacadosPConnection.edges[0].node
                    .subtitulo
                }
              </span>

              {/* ICONS AND TEXT */}
              <ul class="feature">
                <li>
                  <span
                    class="wow bounceIn"
                    data-wow-delay="500ms"
                    data-wow-duration="1000ms"
                  >
                    <i class="color-default flat-icon flaticon-wallet"></i>
                  </span>
                  <div class="feature-item">
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
                    class="wow bounceIn"
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
                  <div class="feature-item">
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
                    class="wow bounceIn"
                    data-wow-delay="700ms"
                    data-wow-duration="1000ms"
                  >
                    <i class="color-default flat-icon flaticon-guarantee"></i>
                  </span>
                  <div class="feature-item">
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
                    class="wow bounceIn"
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
                  <div class="feature-item">
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
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12 col-sm-6">
                  <div class="before-muddy margin-bottom-30">
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[8].node
                          .iconServiciosDestacados.url
                      }
                      alt="ssssssss"
                    />
                    <div class="overlay img-box">
                      <span class="icon-border">
                        <i class="color-white flaticon-business-1"></i>
                      </span>
                      <h4 class="inner-title color-white">
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
                      <a href="#" class="btn btn-default">
                        Leer más
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-sm-6">
                  <div class="before-muddy margin-bottom-30">
                    <img
                      src={
                        result.data.serviciosDestacadosPConnection.edges[9].node
                          .iconServiciosDestacados.url
                      }
                      alt="dddddddddddddddd"
                    />
                    <div class="overlay img-box">
                      <span class="icon-border">
                        <i class="color-white flaticon-wallet"></i>
                      </span>
                      <h4 class="inner-title color-white">
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
                      <a href="#" class="btn btn-default">
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
