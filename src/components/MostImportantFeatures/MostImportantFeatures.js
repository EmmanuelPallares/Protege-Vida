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
              <ul className="feature">
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="500ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-wallet">
                      ssssss
                    </i>
                  </span>
                  <div className="feature-item">
                    <h4>Reasonable Price</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="600ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-consulting-message"></i>
                  </span>
                  <div className="feature-item">
                    <h4>Free Consultation</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
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
                    <h4>Garanteed Works</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="800ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-medal"></i>
                  </span>
                  <div className="feature-item">
                    <h4>Certified Architecture</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="900ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-customer-service"></i>
                  </span>
                  <div className="feature-item">
                    <h4>24/7 Support</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
                    </p>
                  </div>
                </li>
                <li>
                  <span
                    className="wow bounceIn"
                    data-wow-delay="1000ms"
                    data-wow-duration="1000ms"
                  >
                    <i className="color-default flat-icon flaticon-cup"></i>
                  </span>
                  <div className="feature-item">
                    <h4>Awards Winner</h4>
                    <p>
                      Quam. Lectus dis. Inceptos curabitur non enim facilisi
                      dolor dis tempus eu vehicula eu condimentum, tortor
                      rhoncus ut malesuada habitasse hendrerit curae.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  <div className="before-muddy margin-bottom-30">
                    <img src="images/banner/3.png" alt="" />
                    <div className="overlay img-box">
                      <span className="icon-border">
                        <i className="color-white flaticon-business-1"></i>
                      </span>
                      <h4 className="inner-title color-white">
                        Invernaderos Disponibles en Mercado Libre
                      </h4>
                      <p>
                        Inceptos ante libero eget fringilla arcu. Rutrum
                        interdum nostra fermentum posuere.
                      </p>
                      <a href="#" className="btn btn-default">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6">
                  <div className="before-muddy margin-bottom-30">
                    <img src="" alt="dddddddddddddddd" />
                    <div className="overlay img-box">
                      <span className="icon-border">
                        <i className="color-white flaticon-wallet"></i>
                      </span>
                      <h4 className="inner-title color-white">
                        Calcluter Cost
                      </h4>
                      <p>
                        Inceptos ante libero eget fringilla arcu. Rutrum
                        interdum nostra fermentum posuere.
                      </p>
                      <a href="#" className="btn btn-default">
                        Calcluter
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
