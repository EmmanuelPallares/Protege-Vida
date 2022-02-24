import React, { useEffect } from "react";
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
    <section class="full-row about-company margin-top-100">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div
              class="wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="700ms"
            >
              <h2 class="title wow">
                <span>Bienvenido </span>
                {result.data.nosotrossConnection.edges[0].node.tituloPrincipal}
              </h2>
              <span class="sub-title">
                {" "}
                {result.data.nosotrossConnection.edges[0].node.subtituloAbout}
              </span>
              <div class="text-area">
                {result.data.nosotrossConnection.edges[0].node.subtituloAbout2}
              </div>
            </div>

            {/* Test for wow */}
            <div
              class="wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="700ms"
            >
              <h2 class="title wow">Lorem wow test</h2>
            </div>
            <div class="row">
              <div class="fact-counter">
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-line-chart color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="230"
                    >
                      10
                    </div>
                    <span>Años de Experiencia</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-user-1 color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="141"
                    >
                      +50
                    </div>
                    <span>Productos Quultiva</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-nature-3 color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="172"
                    >
                      +10
                    </div>
                    <span>Diseños Originales</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-time color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="2347"
                    >
                      +20
                    </div>
                    <span>
                      Proveedores que garantizan suministro de productos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img
              class="none-mobile"
              src={result.data.nosotrossConnection.edges[5].node.soloImagen.url}
              alt=""
            />
          </div>
        </div>

        {/* ICONOS DIVIDER */}
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img
                src={
                  result.data.nosotrossConnection.edges[4].node.soloImagen.url
                }
                alt=""
              />
              <div class="overlay">
                <h5 class="inner-title">
                  {" "}
                  {
                    result.data.nosotrossConnection.edges[4].node
                      .tituloPrincipal
                  }
                </h5>
                <a href="#" class="btn-link">
                  Leer más
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img
                src={
                  result.data.nosotrossConnection.edges[2].node.soloImagen.url
                }
                alt="sdscsf"
              />
              <div class="overlay">
                <h5 class="inner-title">
                  {
                    result.data.nosotrossConnection.edges[2].node
                      .tituloPrincipal
                  }
                </h5>
                <a href="#" class="btn-link">
                  Leer más
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img
                src={
                  result.data.nosotrossConnection.edges[3].node.soloImagen.url
                }
                alt="big"
              />
              <div class="overlay">
                <h5 class="inner-title">
                  {
                    result.data.nosotrossConnection.edges[3].node
                      .tituloPrincipal
                  }
                </h5>
                <a href="#" class="btn-link">
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
